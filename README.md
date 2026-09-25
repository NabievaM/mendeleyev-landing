# Mendeleyev Landing — Vue 3 + Telegram leads

## 1. Install
```bash
npm install
```

## 2. Configure Telegram
Open `.env.backend` and replace `PUT_NEW_BOT_TOKEN_HERE` with a NEW token from @BotFather.
Keep `ADMIN_CHAT_ID=1548569662`.

Never put the bot token in `VITE_*` variables or Vue source files.

## 3. Start backend
```bash
npm run server
```
Expected:
`✅ Lead backend: http://localhost:3001`

## 4. Start frontend
In another terminal:
```bash
npm run dev
```

Frontend uses:
`VITE_LEAD_API_URL=http://localhost:3001/api/lead`

## 5. Telegram requirement
The Telegram bot must be started/authorized as needed and the target admin chat must be reachable by the bot. For a private chat, send `/start` to the bot from the admin account before testing.
