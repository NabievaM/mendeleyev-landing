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
        class="relative flex h-[570px] items-center justify-center transition-[opacity,transform] duration-[900ms] ease delay-[200ms] max-[980px]:order-[-1] max-[980px]:h-[520px] max-[640px]:order-none max-[640px]:h-[430px]"
        :class="heroLoaded ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-0'"
      >
        <!-- ========================================= -->
        <!-- BIG RED CIRCLE — o'ng tomondan chiqadi -->
        <!-- ========================================= -->
        <div
          class="absolute -right-[280px] top-[15%] z-0 h-[300px] w-[300px] rounded-full bg-red-500 max-[980px]:-right-[120px] max-[980px]:h-[240px] max-[980px]:w-[240px] max-[640px]:-right-[85px] max-[640px]:top-[12%] max-[640px]:h-[170px] max-[640px]:w-[170px]"
        ></div>

        <!-- ========================================= -->
        <!-- SOFT GLOW -->
        <!-- ========================================= -->
        <div
          class="absolute -left-8 bottom-[8%] z-0 h-[120px] w-[120px] rounded-full bg-red-500/10 blur-[20px] max-[640px]:hidden"
        ></div>

        <!-- ========================================= -->
        <!-- MAIN PHOTO CARD -->
        <!-- ========================================= -->
        <div
          class="relative z-10 h-[100%] w-[88%] overflow-hidden rounded-[28px] bg-white shadow-[0_25px_60px_-20px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/80 max-[980px]:w-[90%] max-[640px]:h-[82%] max-[640px]:w-[92%] max-[640px]:rounded-[22px]"
        >
          <!-- very light background -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-white via-slate-50/70 to-white"
          ></div>

          <!-- Logo watermark -->
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/logo.webp"
              alt=""
              class="h-[100%] w-[55%] object-contain opacity-[0.035]"
            />
          </div>
          <!-- ========================================= -->
          <!-- PERSON -->
          <!-- ========================================= -->
          <div
            class="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center"
          >
            <img
              src="/images/ustoz.webp"
              alt="Ustoz"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              width="600"
              height="800"
              class="h-[96%] w-[88%] max-w-none object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] max-[640px]:h-[94%] max-[640px]:w-[92%]"
            />
          </div>
        </div>

        <!-- ========================================= -->
        <!-- FLOATING SLOGAN CARD -->
        <!-- ========================================= -->
        <div
          class="absolute -bottom-[1%] left-1/2 z-30 flex w-[76%] -translate-x-1/2 items-center justify-center rounded-[22px] bg-white/95 px-8 py-5 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.20)] backdrop-blur-md ring-1 ring-slate-200/70 dark:bg-[#111827]/95 dark:ring-white/[0.08] dark:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.45)] max-[980px]:w-[78%] max-[640px]:w-[88%] max-[640px]:rounded-[16px] max-[640px]:px-4 max-[640px]:py-4"
        >
          <!-- ICON -->
          <div
            class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 ring-1 ring-red-500/15 dark:bg-red-500/15 dark:ring-red-400/20 max-[640px]:mr-3 max-[640px]:h-9 max-[640px]:w-9"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="h-6 w-6 text-red-500 dark:text-red-400 max-[640px]:h-4 max-[640px]:w-4"
            >
              <path
                d="M12 3L14.1 9.1L20.5 9.2L15.4 13L17.3 19.1L12 15.5L6.7 19.1L8.6 13L3.5 9.2L9.9 9.1L12 3Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <!-- TEXT -->
          <div class="leading-[1.1]">
            <div
              class="text-[21px] font-extrabold tracking-[-0.6px] text-[#0b1b34] dark:text-white max-[640px]:text-[16px]"
            >
              Sifatli ta'lim
            </div>

            <div
              class="mt-1 text-[14px] font-bold tracking-[-0.2px] text-red-500 dark:text-red-400 max-[640px]:text-[11px]"
            >
              Yorqin kelajak!
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
  heroLoaded: Boolean,
});

defineEmits(["openContact"]);

const titleWords = computed(() => props.t.hero.title.split(" "));

const titleFirst = computed(() => titleWords.value[0]);

const titleRest = computed(() => titleWords.value.slice(1).join(" "));
</script>
