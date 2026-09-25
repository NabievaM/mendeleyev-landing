<template>
  <section
    id="results"
    class="relative pb-20 bg-white dark:bg-ink transition-colors duration-300 max-[640px]:pb-14 leading-12"
  >
    <div class="max-w-[1280px] mx-auto px-8 max-[640px]:px-5">
      <!-- HEADER -->
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-160 mx-auto"
        >
          {{ t.results.title }}
        </h2>
        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-140 mt-4 leading-[1.6] mx-auto"
        >
          {{ t.results.subtitle }}
        </p>
      </div>

      <!-- CONTENT -->
      <div
        class="reveal grid grid-cols-[1fr_1fr] gap-6 max-[820px]:grid-cols-1"
      >
        <!-- LEFT: DESCRIPTION CARD -->
        <div
          class="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-10 flex items-center shadow-[0_20px_45px_-15px_rgba(230,50,98,0.4)] min-h-[420px] max-[640px]:p-7 max-[640px]:min-h-[280px]"
        >
          <div
            class="pointer-events-none absolute top-0 right-0 w-56 h-56 opacity-[0.12]"
            v-html="triangleGridSvg()"
          ></div>

          <p
            class="relative z-10 text-[18px] leading-[1.75] font-medium text-white"
          >
            {{ t.results.desc }}
          </p>
        </div>

        <!-- RIGHT: SINGLE VERTICAL MARQUEE -->
        <div
          class="results-marquee__wrap relative overflow-hidden rounded-[28px] h-[420px] max-[640px]:h-[300px]"
        >
          <div class="results-marquee__track flex flex-col gap-4">
            <div
              v-for="(img, i) in loopedImages"
              :key="i"
              class="relative overflow-hidden rounded-2xl shrink-0 h-[195px] w-full max-[640px]:h-[140px]"
            >
              <img
                :src="img"
                alt=""
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  t: Object,
  lang: String,
  images: {
    type: Array,
    default: () => [],
  },
});

// Uzluksiz aylanish uchun ro'yxat ikki marta takrorlanadi
const loopedImages = computed(() => [...props.images, ...props.images]);

function triangleGridSvg() {
  return `
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <pattern id="tri-results" width="26" height="26" patternUnits="userSpaceOnUse">
          <polygon points="13,2 24,22 2,22" fill="white" />
        </pattern>
      </defs>
      <rect width="220" height="220" fill="url(#tri-results)" />
    </svg>
  `;
}
</script>

<style scoped>
.results-marquee__wrap {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 32px,
    #000 calc(100% - 32px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    #000 32px,
    #000 calc(100% - 32px),
    transparent 100%
  );
}

.results-marquee__track {
  animation: scroll-results-up 22s linear infinite;
}

.results-marquee__wrap:hover .results-marquee__track {
  animation-play-state: paused;
}

@keyframes scroll-results-up {
  from {
    transform: translateY(0);
  }
  to {
    /* Ro'yxat 2 marta chiqarilgani uchun -50% da uzilishsiz aylanadi */
    transform: translateY(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .results-marquee__track {
    animation: none;
  }
  .results-marquee__wrap {
    overflow-y: auto;
  }
}
</style>
