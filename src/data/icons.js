// data/icons.js

export function hexLogoSvg(color = "#2FA84F") {
  return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,3 58,17.5 58,46.5 32,61 6,46.5 6,17.5" stroke="${color}" stroke-width="3.4" stroke-linejoin="round"/>
    <polygon points="32,17 46,25 46,39 32,47 18,39 18,25" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="7.5" stroke="${color}" stroke-width="3"/>
  </svg>`;
}

export function arrowSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

export function phoneSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="#fff" stroke-width="1.6"/></svg>`;
}

export function pinSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s7-6.8 7-12a7 7 0 10-14 0c0 5.2 7 12 7 12z" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="10" r="2.4" stroke="#fff" stroke-width="1.6"/></svg>`;
}

export function telegramSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4L2.5 11.3c-1 .4-1 1.7.1 2l4.4 1.4 1.7 5.2c.2.7 1 .9 1.6.4l2.5-2.2 4.5 3.3c.7.5 1.7.1 1.9-.7L22 5.1c.2-.8-.6-1.4-1-1.1z" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
}

export function instagramSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="#fff" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="#fff"/></svg>`;
}

export function youtubeSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="6" width="19" height="12" rx="3" stroke="#fff" stroke-width="1.6"/><path d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" fill="#fff"/></svg>`;
}

export function heroHexArt() {
  return `<svg viewBox="0 0 480 460" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="240,18 430,128 430,348 240,458 50,348 50,128" stroke="#ffffff" stroke-width="3" opacity="0.9"/>
    <polygon points="240,80 375,158 375,318 240,396 105,318 105,158" stroke="#ffffff" stroke-width="2.6" opacity="0.75"/>
    <polygon points="240,150 320,196 320,282 240,328 160,282 160,196" stroke="#ffffff" stroke-width="2.4" opacity="0.9"/>
    <circle cx="240" cy="239" r="34" stroke="#ffffff" stroke-width="3"/>
    <circle cx="240" cy="239" r="6" fill="#ffffff"/>
  </svg>`;
}

// --- Afzalliklar bo'limi ikonkalari (jahonschool uslubida) ---
const advIcons = {
  // 1) Notebook / planshet ikonkasi — "Ixtisoslashgan ta'lim"
  lab: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.5" y="2.5" width="13" height="19" rx="3" stroke="currentColor" stroke-width="1.8"/>
      <rect x="9" y="6" width="6" height="4" rx="1" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="12" cy="17" r="1.2" fill="currentColor"/>
    </svg>
  `,
  // 2) Portfel (chamodon) ikonkasi — "Hayotiy ko'nikmalar"
  app: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="8" width="18" height="12" rx="2.5" stroke="currentColor" stroke-width="1.8"/>
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M3 13h18" stroke="currentColor" stroke-width="1.8"/>
    </svg>
  `,
  // 3) Globus ikonkasi — "Ijtimoiy xulq-atvor"
  target: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3 12h18" stroke="currentColor" stroke-width="1.6"/>
      <path d="M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9s1.3-6.4 3.8-9z" stroke="currentColor" stroke-width="1.6"/>
    </svg>
  `,
  // 4) Yulduz ikonkasi — "Texnologik maktab"
  mentor: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.6l-5.9 2.9 1.3-6.6-4.9-4.5 6.6-.8L12 2.5z"/>
    </svg>
  `,
};

export function personSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.8"/>
    <path d="M4.5 20C4.5 16.4 7.8 13.5 12 13.5C16.2 13.5 19.5 16.4 19.5 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;
}

export function advIconSvg(name) {
  return advIcons[name] || advIcons.target;
}

// --- Kartaning o'ng tomonidagi dekorativ uchburchak naqsh ---
export function hexDotSvg() {
  const rows = 6;
  const cols = 5;
  const size = 18;
  const gap = 6;
  const step = size + gap;
  let triangles = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * step;
      const y = r * step;
      const flip = (r + c) % 2 === 0;
      const points = flip
        ? `${x},${y + size} ${x + size},${y + size} ${x + size / 2},${y}`
        : `${x},${y} ${x + size},${y} ${x + size / 2},${y + size}`;
      triangles += `<polygon points="${points}" fill="currentColor" opacity="0.6"/>`;
    }
  }

  const width = cols * step;
  const height = rows * step;

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      ${triangles}
    </svg>
  `;
}

// --- Sharoitlar (amenities) bo'limi ikonkalari ---
const amenIcons = {
  classroom: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  group: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15.5 14.5c2.6.4 4.5 2.5 4.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  device: `<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="4.5" width="19" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 21h8M12 17.5v3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  exam: `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2.4" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 9.5l2 2 4-4.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 16h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 20V10M12 20V4M18 20v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.8 7-12a7 7 0 10-14 0c0 5.2 7 12 7 12z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.8"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 16l1.5-5.5A2 2 0 0 1 7.4 9h9.2a2 2 0 0 1 1.9 1.5L20 16" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="3" y="16" width="18" height="4" rx="1.5" stroke="currentColor" stroke-width="1.8"/><circle cx="7.5" cy="20" r="1.3" fill="currentColor"/><circle cx="16.5" cy="20" r="1.3" fill="currentColor"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="9" width="17" height="12" rx="1.5" stroke="currentColor" stroke-width="1.8"/><path d="M3 9h18v3.5H3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 9v12" stroke="currentColor" stroke-width="1.8"/><path d="M12 9c-1-3-3.5-4.5-5-3.2C5.5 7 7 9 12 9zM12 9c1-3 3.5-4.5 5-3.2C18.5 7 17 9 12 9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  security: `
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L19 6V11.5C19 16.2 16.1 19.8 12 21C7.9 19.8 5 16.2 5 11.5V6L12 3Z"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linejoin="round"
    />
    <path
      d="M9 12L11 14L15.5 9.5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`,
  sun: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.3" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

export function amenIconSvg(name) {
  return amenIcons[name] || amenIcons.classroom;
}

// --- "Qabul jarayoni" bo'limi ikonkalari ---
// jahonschool.uz'dagi ikonkalarga vizual jihatdan o'xshab chizilgan,
// hech qanday tashqi paket talab qilmaydi (v-html orqali ishlaydi).
const processIcons = {
  // 01. Maktabga tashrif — maktab/bino siluetiga o'xshash ikonka
  building: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M4 21V9l8-5 8 5v12" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 21v-6h6v6" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12h.01M15 12h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,

  // 02. Maktab bilan tanishuv — portfel/sumka
  briefcase: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 13h18" stroke="currentColor" stroke-width="1.8"/></svg>`,

  // 03. Ota-ona bilan suhbat — bitta suhbat pufakchasi
  chat: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.7 8.7 0 0 1-3.8-.9L3 20l1.2-3.6a8.3 8.3 0 0 1-1.1-4.2A8.4 8.4 0 0 1 12 3.6a8.4 8.4 0 0 1 9 7.9z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,

  // 04. Psixolog suhbati — kichik katakchalar (jadval/grid) ikonkasi
  grid: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.6" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="3" width="8" height="8" rx="1.6" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="13" width="8" height="8" rx="1.6" stroke="currentColor" stroke-width="1.8"/><rect x="13" y="13" width="8" height="8" rx="1.6" stroke="currentColor" stroke-width="1.8"/></svg>`,

  // 05. O'quvchining bilimini o'lchash — nuqtali suhbat pufakchasi
  messageDots: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3v-3H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="11" r="1" fill="currentColor"/><circle cx="16" cy="11" r="1" fill="currentColor"/></svg>`,

  // 06. Qabul — bayram / party popper
  party: `<svg viewBox="0 0 24 24" fill="none">
<!-- popper -->
<path
  d="M4.2 19.8L8.7 7.2L17.2 15.7L4.2 19.8Z"
  fill="currentColor"
/>
<path
  d="M8.7 7.2L17.2 15.7"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
/>

<!-- confetti -->
<path
  d="M11.2 4.3L10.5 2.1"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
/>
<path
  d="M15.1 5.1L16.2 2.7"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
/>
<path
  d="M18.1 7.5L20.3 6.2"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
/>
<path
  d="M19.4 11L21.8 11.4"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
/>

<!-- small confetti dots -->
<circle cx="13.2" cy="2.1" r="1" fill="currentColor"/>
<circle cx="20.8" cy="3.9" r="0.9" fill="currentColor"/>
<circle cx="22" cy="8.2" r="0.8" fill="currentColor"/>
</svg>`,
};

export function processIconSvg(name) {
  return processIcons[name] || processIcons.building;
}
