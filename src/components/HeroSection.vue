<template>
  <section
    id="top"
    class="relative overflow-hidden bg-white dark:bg-ink transition-colors duration-300 pt-16 pb-12.5 max-[640px]:pt-8 max-[640px]:pb-1"
  >
    <div
      class="mx-auto grid max-w-[1280px] grid-cols-[1.05fr_0.95fr] items-center gap-[50px] px-8 max-[980px]:grid-cols-1 max-[980px]:gap-8 max-[640px]:px-5"
    >
      <!-- ================= LEFT ================= -->
      <div class="relative z-20">
        <!-- QUOTE BADGE -->
        <div
          class="mb-7 inline-flex items-center transition-all duration-700 ease delay-[50ms] motion-reduce:transition-none"
          :class="
            heroLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[22px] opacity-0'
          "
        >
          <div
            class="relative inline-flex max-w-full items-center overflow-hidden rounded-[12px] bg-[#f7f8fa] px-4 py-2.5 pr-10 shadow-[0_3px_12px_rgba(0,0,0,0.025)]"
          >
            <span
              class="whitespace-nowrap text-[16px] font-semibold leading-[1.35] tracking-[-0.3px] text-[#7d83a3] max-[480px]:whitespace-normal max-[480px]:text-[13px]"
            >
              <span class="font-extrabold text-red-500">
                “{{ t.hero.badgeStrong || t.hero.ctaSecondary }}”
              </span>
              {{ t.hero.eyebrow }}
            </span>

            <!-- RED END -->
            <span
              class="absolute right-0 top-0 h-full w-[25px] rounded-r-[12px] bg-red-500"
            >
              <span
                class="absolute -left-[11px] top-[-3px] h-[calc(100%+6px)] w-[24px] rounded-full bg-[#f7f8fa]"
              ></span>
            </span>
          </div>
        </div>

        <!-- TITLE -->
        <h1
          class="max-w-[650px] text-[clamp(36px,4.5vw,56px)] font-extrabold leading-[1.04] tracking-[-1.8px] text-ink dark:text-white transition-all duration-700 ease delay-[150ms] motion-reduce:transition-none"
          :class="
            heroLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[22px] opacity-0'
          "
        >
          <span class="text-red-500">{{ titleFirst }}</span>
          {{ titleRest }}
        </h1>

        <!-- DESCRIPTION -->
        <p
          class="mt-6 max-w-125 text-[17px] leading-[1.65] text-gray-500 dark:text-white/60 transition-all duration-700 ease delay-[250ms] motion-reduce:transition-none"
          :class="
            heroLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5.5 opacity-0'
          "
        >
          {{ t.hero.desc }}
        </p>

        <!-- CTA -->
        <div
          class="mt-9 flex flex-wrap gap-[14px] transition-all duration-700 ease delay-[350ms] motion-reduce:transition-none"
          :class="
            heroLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[22px] opacity-0'
          "
        >
          <a
            href="#contact"
            @click.prevent="$emit('openContact')"
            class="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-800 via-red-700 to-red-600 px-25 py-6 text-[16px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(230,50,98,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:from-red-600 hover:via-red-500 hover:to-red-500 max-[640px]:w-full max-[640px]:px-6 max-[640px]:py-4.5"
          >
            {{ t.hero.ctaPrimary }}
          </a>
        </div>

        <!-- STATS -->
        <div
          class="mt-14 flex flex-wrap gap-x-[38px] gap-y-6 transition-all duration-700 ease delay-[450ms] motion-reduce:transition-none"
          :class="
            heroLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[22px] opacity-0'
          "
        >
          <div v-for="s in t.hero.stats" :key="s.label" class="flex flex-col">
            <strong
              class="font-head text-[30px] font-semibold text-ink dark:text-white"
            >
              {{ s.value }}
            </strong>

            <span class="text-sm text-gray-500 dark:text-white/60">
              {{ s.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- ================= RIGHT ================= -->
      <div
        class="relative flex h-[570px] items-center justify-center transition-[opacity,transform] duration-[900ms] ease delay-[200ms] max-[980px]:order-[-1] max-[640px]:order-none max-[980px]:h-[520px] max-[640px]:h-[430px] motion-reduce:transition-none"
        :class="heroLoaded ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-0'"
      >
        <!-- ========================================= -->
        <!-- MODERN BACKGROUND + PERSON -->
        <!-- ========================================= -->
        <div
          class="absolute bottom-[25px] max-[640px]:bottom-15 right-[5%] h-[100%] w-[88%] overflow-hidden bg-red-500 shadow-[0_35px_70px_-25px_rgba(230,50,98,0.45)] max-[980px]:right-[4%] max-[980px]:w-[90%] max-[640px]:right-0 max-[640px]:w-[94%]"
          style="
            clip-path: polygon(
              14% 5%,
              50% 0%,
              86% 7%,
              100% 14%,
              100% 67%,
              97% 76%,
              91% 85%,
              82% 93%,
              70% 99%,
              30% 99%,
              18% 94%,
              9% 85%,
              3% 75%,
              0% 65%,
              0% 14%
            );
          "
        >
          <!-- ========================================= -->
          <!-- GEOMETRIC PATTERN -->
          <!-- ========================================= -->
          <svg
            class="absolute inset-0 z-0 h-full w-full opacity-[0.17]"
            viewBox="0 0 500 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="white">
              <!-- TOP -->
              <polygon points="35,55 145,18 120,112" />
              <polygon points="165,15 285,42 195,100" />
              <polygon points="315,25 470,75 350,130" />

              <!-- ROW 2 -->
              <polygon points="5,145 105,112 85,235" />
              <polygon points="125,120 235,155 160,235" />
              <polygon points="265,130 390,165 305,250" />
              <polygon points="405,125 500,155 445,230" />

              <!-- ROW 3 -->
              <polygon points="35,260 145,225 110,350" />
              <polygon points="175,250 295,285 210,370" />
              <polygon points="325,260 445,295 360,375" />

              <!-- ROW 4 -->
              <polygon points="10,385 120,345 90,470" />
              <polygon points="145,380 275,415 185,500" />
              <polygon points="310,390 450,425 355,510" />

              <!-- BOTTOM -->
              <polygon points="60,495 160,475 125,570" />
              <polygon points="215,505 320,530 250,590" />
              <polygon points="365,500 475,530 395,585" />
            </g>
          </svg>

          <!-- ========================================= -->
          <!-- LIGHT GRADIENT -->
          <!-- ========================================= -->
          <div
            class="absolute inset-0 z-[1] bg-gradient-to-br from-red-400/30 via-transparent to-red-700/30"
          ></div>

          <!-- ========================================= -->
          <!-- PERSON INSIDE SHAPE -->
          <!-- ========================================= -->
          <div class="absolute inset-0 z-5 flex items-end justify-center">
            <img
              src="/images/ustoz.png"
              alt=""
              fetchpriority="high"
              loading="eager"
              decoding="async"
              width="600"
              height="800"
              class="h-[150%] w-[100%] max-w-none object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] max-[980px]:h-[105%] max-[980px]:w-[105%] max-[640px]:h-[110%] max-[640px]:w-[110%]"
            />
          </div>

          <!-- ========================================= -->
          <!-- DARK GLASS -->
          <!-- ========================================= -->
          <div
            class="absolute bottom-35 max-[640px]:bottom-27 left-0 z-10 h-[105px] w-full bg-white/[0.20] backdrop-blur-[1px] max-[640px]:h-[80px]"
          >
            <div
              class="flex h-full items-center justify-center px-5 text-center"
            >
              <span
                class="font-head text-[30px] font-extrabold uppercase leading-[0.95] tracking-[-1px] text-gray-400 max-[640px]:text-[20px]"
              >
                Sifatli ta'lim
                <br />
                Yorqin kelajak!
              </span>
            </div>
          </div>
        </div>

        <!-- GRADUATION CAP (bitiruv shapkasi) -->
        <div
          class="absolute left-[-12px] top-[65px] z-30 flex h-[88px] w-[88px] -rotate-[12deg] items-center justify-center rounded-[25px] border-[3px] border-red-300 bg-white/90 shadow-[0_15px_35px_rgba(230,50,98,0.25)] backdrop-blur-md animate-hero-float max-[640px]:left-[-5px] max-[640px]:top-[45px] max-[640px]:h-[68px] max-[640px]:w-[68px] motion-reduce:animate-none"
        >
          <svg
            class="h-16 w-16 text-red-500 max-[640px]:h-12 max-[640px]:w-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Cap top -->
            <path d="M12 3L2 8l10 5 8-4v6h1.5V8L12 3Z" fill="currentColor" />
            <!-- Cap band / head base -->
            <path
              d="M6 10.6V15c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5v-4.4l-6 3-6-3Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <!-- TROPHY (g'alaba) -->
        <div
          class="absolute right-[-5px] top-[230px] z-30 flex h-[58px] w-[58px] rotate-[8deg] items-center justify-center rounded-[18px] border-2 border-red-300 bg-white/90 shadow-[0_12px_28px_rgba(230,50,98,0.22)] backdrop-blur-md max-[640px]:right-[-2px] max-[640px]:top-[190px] max-[640px]:h-[48px] max-[640px]:w-[48px]"
        >
          <svg
            class="h-12 w-12 text-red-500 max-[640px]:h-9 max-[640px]:w-9"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M6 3h12v2h3v2c0 2.2-1.6 4-3.6 4.4A5.5 5.5 0 0 1 13 13.9V16h3v2H8v-2h3v-2.1a5.5 5.5 0 0 1-4.4-4.5C4.6 9 3 7.2 3 5V3h3ZM5 5v0c0 1.1.8 2 1.9 2.2A9 9 0 0 1 6 5H5Zm13 0a9 9 0 0 1-.9 2.2C18.2 7 19 6.1 19 5v0h-1Z"
            />
          </svg>
        </div>

        <!-- ========================================= -->
        <!-- MOTIVATION TEXT -->
        <!-- ========================================= -->
        <div
          class="absolute bottom-[-8px] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-center max-[640px]:bottom-[-4px]"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  t: Object,
  heroLoaded: Boolean,
});

defineEmits(["openContact"]);

const titleWords = computed(() => props.t.hero.title.split(" "));

const titleFirst = computed(() => titleWords.value[0]);

const titleRest = computed(() => titleWords.value.slice(1).join(" "));
</script>
