<template>
  <section
    v-if="gallery.length"
    id="team-gallery"
    class="relative overflow-hidden pt-0 pb-16 max-[640px]:pb-12"
  >
    <!-- TITLE -->
    <div class="reveal mb-10 px-5 text-center">
      <h2
        class="text-[clamp(26px,3vw,36px)] font-bold leading-[1.2] text-[#0F1E33] dark:text-white"
      >
        {{ text.title }}
      </h2>
      
      <p
        class="mx-auto mt-3 max-w-[520px] text-[16px] leading-[1.6] text-[#9AA0AD] dark:text-white/50"
      >
        {{ text.sub }}
      </p>
    </div>

    <div class="reveal">
      <!-- SAHNA: markazda katta rasm, ikki yonida kichiklari -->
      <div
        ref="stage"
        class="relative w-full select-none"
        :style="{ height: w * 0.75 + 8 + 'px' }"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <button
          v-for="(p, i) in gallery"
          :key="p.src"
          type="button"
          class="tg-slide absolute left-1/2 top-1/2 overflow-hidden bg-[#F5F6F8] dark:bg-white/5"
          :class="offset(i) === 0 ? 'cursor-zoom-in' : 'cursor-pointer'"
          :style="slideStyle(i)"
          :tabindex="Math.abs(offset(i)) > 1 ? -1 : 0"
          :aria-label="`${text.alt} ${i + 1}`"
          @click="onSlideClick(i)"
        >
          <img
            :src="p.src"
            :alt="`${text.alt} ${i + 1}`"
            loading="lazy"
            decoding="async"
            draggable="false"
            class="block aspect-[4/3] w-full object-cover"
            @error="failed.push(p.src)"
          />
        </button>
      </div>

      <!-- SIGNATURA + STRELKALAR -->
      <div
        class="mt-8 flex items-center justify-center gap-8 text-[#0F1E33] dark:text-white"
      >
        <button
          type="button"
          class="px-2 text-[24px] leading-none opacity-50 transition-opacity hover:opacity-100"
          :aria-label="text.prev"
          @click="go(-1)"
        >
          ←
        </button>

        <div class="min-w-[120px] text-center">
          <div class="text-[18px] font-semibold">{{ text.caption }}</div>
          <div
            class="mt-1 text-[13px] tabular-nums text-[#9AA0AD] dark:text-white/40"
          >
            {{ String(current + 1).padStart(2, "0") }} /
            {{ String(gallery.length).padStart(2, "0") }}
          </div>
        </div>

        <button
          type="button"
          class="px-2 text-[24px] leading-none opacity-50 transition-opacity hover:opacity-100"
          :aria-label="text.next"
          @click="go(1)"
        >
          →
        </button>
      </div>
    </div>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <Transition name="tg-fade">
        <div
          v-if="lb !== null"
          class="fixed inset-0 z-[1000] flex items-center justify-center bg-white/95 p-4 dark:bg-[#0b1220]/95"
          role="dialog"
          aria-modal="true"
          @click.self="closeLb"
          @touchstart.passive="onLbTouchStart"
          @touchend.passive="onLbTouchEnd"
        >
          <img
            :key="gallery[lb].src"
            :src="gallery[lb].src"
            :alt="`${text.alt} ${lb + 1}`"
            class="max-h-[84vh] max-w-full rounded-xl object-contain md:max-w-[min(1100px,88vw)]"
          />

          <div
            class="absolute inset-x-0 bottom-5 flex items-center justify-center gap-6 text-[#0F1E33] dark:text-white"
          >
            <button
              type="button"
              class="px-2 text-[24px] leading-none opacity-60 hover:opacity-100"
              :aria-label="text.prev"
              @click="lbMove(-1)"
            >
              ←
            </button>
            <span class="text-[13px] tabular-nums opacity-60">
              {{ lb + 1 }} / {{ gallery.length }}
            </span>
            <button
              type="button"
              class="px-2 text-[24px] leading-none opacity-60 hover:opacity-100"
              :aria-label="text.next"
              @click="lbMove(1)"
            >
              →
            </button>
          </div>

          <button
            type="button"
            class="absolute right-5 top-5 px-2 text-[22px] leading-none text-[#0F1E33] opacity-60 hover:opacity-100 dark:text-white"
            :aria-label="text.close"
            @click="closeLb"
          >
            ✕
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  lang: { type: String, default: "uz" },
});

/* ------------------------------------------------------------------
   RASMLAR RO'YXATI
   Rasmlarni public/images/team/ ichiga tashlang va nomini shu yerga yozing.
   Topilmagan rasm avtomatik yashiriladi.
------------------------------------------------------------------ */
const FOLDER = "/images/team/";
const photos = [
  "team1.JPG",
  "team2.JPG",
  "team3.JPG",
  "team6.JPG",
  "team4.JPG",
  "team5.JPG",
  "team7.JPG",
  "team8.JPG",
  "team9.JPG",
  "team10.JPG",
  "team11.JPG",
  "team12.JPG",
  "team13.JPG",
  "team14.JPG",
];

/* Sozlamalar */
const AUTOPLAY_MS = 4500; // 0 qilsangiz avtomatik aylanish o'chadi
const SIDE_SCALE = 0.78; // yon rasmlar markazdagiga nisbatan kattaligi
const GAP = 16; // rasmlar orasidagi masofa (px)

/* ------------------------------------------------------------------
   MATNLAR (3 tilda)
------------------------------------------------------------------ */
const texts = {
  uz: {
    title: "Jamoamiz hayotidan",
    sub: "Kundalik ish, suhbatlar va birga o'tgan lahzalar.",
    caption: "Mendeleyev jamoasi",
    alt: "Jamoa surati",
    close: "Yopish",
    prev: "Oldingi",
    next: "Keyingi",
  },
  ru: {
    title: "Из жизни команды",
    sub: "Рабочие будни, беседы и моменты, проведённые вместе.",
    caption: "Команда Mendeleyev",
    alt: "Фото команды",
    close: "Закрыть",
    prev: "Назад",
    next: "Далее",
  },
  en: {
    title: "Life at our team",
    sub: "Everyday work, conversations and moments spent together.",
    caption: "Mendeleyev team",
    alt: "Team photo",
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
};

const text = computed(() => texts[props.lang] || texts.uz);

const failed = ref([]);
const gallery = computed(() =>
  photos
    .map((f) => ({ src: FOLDER + f }))
    .filter((p) => !failed.value.includes(p.src))
);

/* ---------------- Karusel ---------------- */
const stage = ref(null);
const stageW = ref(1200);
const current = ref(0);
const hover = ref(false);

const isMobile = computed(() => stageW.value < 640);
// markazdagi (katta) rasm kengligi
const w = computed(() =>
  isMobile.value ? stageW.value * 0.72 : Math.min(stageW.value * 0.4, 560)
);

function measure() {
  if (stage.value) stageW.value = stage.value.clientWidth;
}

// markazdan necha qadam narida (aylanma)
function offset(i) {
  const n = gallery.value.length;
  let d = (i - current.value + n) % n;
  if (d > n / 2) d -= n;
  return d;
}

function slideStyle(i) {
  const d = offset(i);
  const abs = Math.abs(d);
  const sign = d < 0 ? -1 : 1;
  const sideW = w.value * SIDE_SCALE;

  let x = 0;
  if (abs > 0) {
    x = sign * ((w.value + sideW) / 2 + GAP + (abs - 1) * (sideW + GAP));
  }
  const scale = abs === 0 ? 1 : SIDE_SCALE;
  const visible = abs <= 3;

  return {
    width: w.value + "px",
    transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    zIndex: 10 - Math.min(abs, 9),
  };
}

function go(dir) {
  const n = gallery.value.length;
  current.value = (current.value + dir + n) % n;
}

function onSlideClick(i) {
  if (offset(i) === 0) openLb(i);
  else current.value = i;
}

/* Avtomatik aylanish */
let timer = null;
const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function startAuto() {
  stopAuto();
  if (!AUTOPLAY_MS || reduceMotion) return;
  timer = setInterval(() => {
    if (!hover.value && lb.value === null && !document.hidden) go(1);
  }, AUTOPLAY_MS);
}
function stopAuto() {
  if (timer) clearInterval(timer);
  timer = null;
}

/* Barmoq bilan surish (sahna) */
let tx = 0;
function onTouchStart(e) {
  tx = e.changedTouches[0].clientX;
}
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) < 40) return;
  go(dx < 0 ? 1 : -1);
  startAuto();
}

/* ---------------- Lightbox ---------------- */
const lb = ref(null);

function openLb(i) {
  lb.value = i;
}
function closeLb() {
  if (lb.value !== null) current.value = lb.value; // karusel ham shu rasmga o'tadi
  lb.value = null;
}
function lbMove(dir) {
  const n = gallery.value.length;
  lb.value = (lb.value + dir + n) % n;
}

function onKey(e) {
  if (lb.value === null) return;
  if (e.key === "Escape") closeLb();
  else if (e.key === "ArrowRight") lbMove(1);
  else if (e.key === "ArrowLeft") lbMove(-1);
}

let lx = 0;
function onLbTouchStart(e) {
  lx = e.changedTouches[0].clientX;
}
function onLbTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - lx;
  if (Math.abs(dx) < 50) return;
  lbMove(dx < 0 ? 1 : -1);
}

watch(lb, (v) => {
  document.body.style.overflow = v === null ? "" : "hidden";
});

// rasm yuklanmay qolsa, indeks chegaradan chiqib ketmasin
watch(
  () => gallery.value.length,
  (n) => {
    if (current.value >= n) current.value = 0;
  }
);

onMounted(() => {
  measure();
  window.addEventListener("resize", measure);
  window.addEventListener("keydown", onKey);
  startAuto();
});
onBeforeUnmount(() => {
  stopAuto();
  window.removeEventListener("resize", measure);
  window.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.tg-slide {
  border-radius: 6px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
  will-change: transform;
}

.tg-fade-enter-active,
.tg-fade-leave-active {
  transition: opacity 0.2s ease;
}
.tg-fade-enter-from,
.tg-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .tg-slide {
    transition: none;
  }
}
</style>
