<template>
  <section id="courses" class="relative max-[640px]:py-16 leading-12">
    <div class="max-w-[1280px] mx-auto px-8 max-[640px]:px-5">
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-200 mx-auto"
        >
          {{ t.courseTitle }}
        </h2>
        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-[560px] mt-4 leading-[1.6] mx-auto"
        >
          {{ t.courseSub }}
        </p>
      </div>

      <div
        class="reveal grid grid-cols-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 gap-6"
      >
        <div
          v-for="c in courses"
          :key="c.name.uz"
          class="relative overflow-hidden rounded-lg p-5 flex flex-col gap-1 bg-gradient-to-br from-red-600 to-red-500 shadow-[0_16px_32px_-12px_rgba(46,125,50,0.45)]"
        >
          <!-- decorative triangle pattern -->
          <div
            class="pointer-events-none absolute top-0 right-0 w-40 h-40 opacity-[0.15]"
            v-html="triangleGridSvg()"
          ></div>

          <!-- icon badge -->
          <div
            class="relative z-10 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm"
          >
            <svg
              class="w-7 h-7 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3z"
                fill="currentColor"
              />
              <path
                d="M5 10.18v4.32c0 .35.15.68.42.9C6.6 16.4 8.98 18 12 18s5.4-1.6 6.58-2.6c.27-.22.42-.55.42-.9v-4.32l-7 3.18-7-3.18z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div class="relative z-10 flex flex-col gap-0.5 mb-3">
            <span class="text-[16px] font-bold text-white/70">{{
              c.level[lang]
            }}</span>
            <h3 class="text-[28px] font-bold text-white leading-tight">
              {{ c.name[lang] }}
            </h3>
            <p class="text-[16px] text-white/50 font-bold leading-[1.65] mt-1">
              {{ c.desc[lang] }}
            </p>
          </div>

          <button
            type="button"
            @click="$emit('openContact')"
            class="relative z-10 mt-auto max-w-full self-start bg-white text-red-600 font-bold text-[17px] px-10 mx-auto py-2.5 rounded-md transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98] max-[640px]:px-8"
          >
            {{ t.courseCta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hexDotSvg, hexLogoSvg } from "../data/icons";

const props = defineProps({ t: Object, lang: String, courses: Array });
defineEmits(["openContact"]);

function triangleGridSvg() {
  return `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <pattern id="tri" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <polygon points="13,2 24,22 2,22" fill="white" />
        </pattern>
      </defs>
      <rect width="160" height="160" fill="url(#tri)" />
    </svg>
  `;
}
</script>
