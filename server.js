import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.backend' })

const app = express()
const PORT = process.env.PORT || 3001

const BOT_TOKEN = process.env.BOT_TOKEN
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID
const TELEGRAM_API =
  BOT_TOKEN && BOT_TOKEN !== 'PUT_NEW_BOT_TOKEN_HERE'
    ? `https://api.telegram.org/bot${BOT_TOKEN}`
    : null

app.use(cors())
app.use(express.json())

// ============================================================
// ARIZALARNI XOTIRADA SAQLASH (leadId -> {chatId, messageId, ...})
// Bu orqali "Bog'landim" tugmasi bosilganda qaysi xabarni
// tahrirlashni va holatini bilib olamiz.
// ============================================================
const leads = new Map()

function isBotConfigured() {
  return Boolean(TELEGRAM_API) && Boolean(ADMIN_CHAT_ID)
}

function generateLeadId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function telegramRequest(method, payload) {
  try {
    const response = await fetch(`${TELEGRAM_API}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await response.json().catch(() => null)
    return { ok: response.ok && data?.ok, data }
  } catch (error) {
    console.error(`Telegram "${method}" so'rovida xatolik:`, error)
    return { ok: false, data: null }
  }
}

function buildLeadMessage(lead) {
  const statusLine =
    lead.status === 'contacted'
      ? '🟢 Holat: Bog\'lanildi ✅'
      : '🟡 Holat: Kutilmoqda'

  return [
    '🔔 YANGI ARIZA',
    '',
    `👤 Ism: ${lead.name}`,
    `📞 Telefon: ${lead.phone}`,
    '',
    statusLine,
  ].join('\n')
}

// ============================================================
// HEALTH CHECK
// ============================================================

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'mendeleyev-leads',
    botConfigured: isBotConfigured(),
  })
})

// ============================================================
// YANGI ARIZA QABUL QILISH
// ============================================================

app.post('/api/lead', async (req, res) => {
  try {
    const { name, phone } = req.body || {}

    if (!name?.trim() || !phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Barcha maydonlarni to‘ldiring.',
      })
    }

    if (!isBotConfigured()) {
      console.error('Telegram credentials are not configured in .env.backend')
      return res.status(500).json({
        success: false,
        message: 'Telegram serveri sozlanmagan.',
      })
    }

    const leadId = generateLeadId()

    const lead = {
      chatId: ADMIN_CHAT_ID,
      messageId: null,
      name: name.trim(),
      phone: phone.trim(),
      status: 'pending',
    }

    const { ok, data } = await telegramRequest('sendMessage', {
      chat_id: ADMIN_CHAT_ID,
      text: buildLeadMessage(lead),
      reply_markup: {
        inline_keyboard: [
          [{ text: "✅ Bog'landim", callback_data: `contacted:${leadId}` }],
        ],
      },
    })

    if (!ok) {
      console.error('Telegram API error:', data)
      return res.status(502).json({
        success: false,
        message: 'Telegramga yuborishda xatolik yuz berdi.',
      })
    }

    lead.messageId = data.result.message_id
    leads.set(leadId, lead)

    return res.json({
      success: true,
      message: 'Ariza muvaffaqiyatli yuborildi.',
    })
  } catch (error) {
    console.error('Lead server error:', error)
    return res.status(500).json({
      success: false,
      message: 'Serverda xatolik yuz berdi.',
    })
  }
})

// ============================================================
// TELEGRAM CALLBACK: "✅ Bog'landim" TUGMASI BOSILGANDA
// ============================================================

async function handleCallbackQuery(callbackQuery) {
  const data = callbackQuery.data || ''

  if (!data.startsWith('contacted:')) {
    await telegramRequest('answerCallbackQuery', {
      callback_query_id: callbackQuery.id,
    })
    return
  }

  const leadId = data.slice('contacted:'.length)
  const lead = leads.get(leadId)

  if (!lead) {
    // Server qayta ishga tushgan bo'lishi mumkin — xotirada topilmadi.
    await telegramRequest('answerCallbackQuery', {
      callback_query_id: callbackQuery.id,
      text: 'Ariza topilmadi (server qayta ishga tushgan bo\'lishi mumkin).',
    })
    return
  }

  if (lead.status === 'contacted') {
    await telegramRequest('answerCallbackQuery', {
      callback_query_id: callbackQuery.id,
      text: 'Allaqachon "Bog\'lanildi" deb belgilangan ✅',
    })
    return
  }

  lead.status = 'contacted'
  lead.contactedAt = new Date()

  // Xabar matnini yangilaymiz va tugmani olib tashlaymiz
  await telegramRequest('editMessageText', {
    chat_id: lead.chatId,
    message_id: lead.messageId,
    text: buildLeadMessage(lead),
  })

  await telegramRequest('answerCallbackQuery', {
    callback_query_id: callbackQuery.id,
    text: '"Bog\'lanildi" deb belgilandi ✅',
  })
}

// ============================================================
// LONG POLLING: Telegramdan callback yangilanishlarini olish
// (Webhook/domen talab qilinmaydi, shu jarayon ishlab tursa bo'ldi)
// ============================================================

let pollingOffset = 0

async function initPollingOffset() {
  // Server ishlamay turgan paytdagi eski bosilgan tugmalarni
  // "topilmadi" deb javob bermasligi uchun offsetni oxirigacha suramiz.
  const { ok, data } = await telegramRequest('getUpdates', { offset: -1 })
  if (ok && Array.isArray(data.result) && data.result.length > 0) {
    pollingOffset = data.result[data.result.length - 1].update_id + 1
  }
}

async function pollTelegramUpdatesForever() {
  console.log("🤖 Telegram bog'lanish holati kuzatuvi ishga tushdi")

  while (true) {
    try {
      const response = await fetch(
        `${TELEGRAM_API}/getUpdates?timeout=25&offset=${pollingOffset}&allowed_updates=${encodeURIComponent(
          JSON.stringify(['callback_query'])
        )}`
      )
      const data = await response.json()

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          pollingOffset = update.update_id + 1

          if (update.callback_query) {
            await handleCallbackQuery(update.callback_query)
          }
        }
      } else {
        console.error('getUpdates xato javob qaytardi:', data)
        await sleep(3000)
      }
    } catch (error) {
      console.error('Telegram polling xatoligi:', error)
      await sleep(3000)
    }
  }
}

app.listen(PORT, () => {
  console.log(`✅ Lead backend: http://localhost:${PORT}`)
})

if (isBotConfigured()) {
  initPollingOffset().then(() => {
    pollTelegramUpdatesForever()
  })
} else {
  console.warn(
    '⚠️  BOT_TOKEN yoki ADMIN_CHAT_ID sozlanmagan — bog\'lanish holati kuzatilmaydi.'
  )
}
