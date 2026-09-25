<template>
  <section
    id="amenities"
    class="relative py-[100px] max-[640px]:py-16 max-[640px]:leading-8 leading-12"
  >
    <div class="max-w-[1280px] mx-auto px-8 max-[640px]:px-5">
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-200 mx-auto"
        >
          {{ t.amenTitle }}
        </h2>
        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-[560px] mt-4 leading-[1.6] mx-auto"
        >
          {{ t.amenSub }}
        </p>
      </div>

      <!-- ================= DESKTOP / TABLET LAYOUT ================= -->
      <div
        class="reveal grid grid-cols-[1fr_320px_1fr] max-[980px]:grid-cols-1 gap-6 items-start max-[640px]:hidden"
      >
        <!-- Chap ustun -->
        <div class="flex flex-col gap-5">
          <div
            class="rounded-2xl bg-[#F3F5F7] dark:bg-white/5 p-3.75 flex gap-5 items-center"
            v-for="am in leftAmenities"
            :key="am.uz"
          >
            <span
              class="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center shrink-0 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-white"
              v-html="amenIconSvg(am.icon)"
            ></span>
            <p
              class="text-[17px] text-[#0F1E33] dark:text-white leading-[1.5] font-medium"
            >
              {{ am[lang] }}
            </p>
          </div>
        </div>

        <!-- Markaziy rasm -->
        <div class="relative aspect-[320/560] max-[980px]:aspect-[320/280]">
          <div
            class="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-red-600 to-red-500"
          >
            <span
              class="pointer-events-none select-none absolute inset-0 text-white/25 [&>svg]:w-full [&>svg]:h-full"
              v-html="hexDotSvg()"
            ></span>
          </div>

          <img
            src="../../public/images/person.webp"
            alt="MENDELEYEV"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] max-[980px]:h-[145%] w-auto max-w-none object-contain z-10"
          />
        </div>

        <!-- O'ng ustun -->
        <div class="flex flex-col gap-5">
          <div
            class="rounded-2xl bg-[#F3F5F7] dark:bg-white/5 p-3.75 flex gap-5 items-center"
            v-for="am in rightAmenities"
            :key="am.uz"
          >
            <span
              class="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center shrink-0 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-white"
              v-html="amenIconSvg(am.icon)"
            ></span>
            <p
              class="text-[17px] text-[#0F1E33] dark:text-white leading-[1.5] font-medium"
            >
              {{ am[lang] }}
            </p>
          </div>
        </div>
      </div>

      <!-- ================= MOBILE LAYOUT ================= -->
      <div class="hidden max-[640px]:flex max-[640px]:flex-col gap-4">
        <!-- To'liq kenglikdagi rasm -->
        <div
          class="relative w-full aspect-[335/220] rounded-3xl overflow-hidden bg-gradient-to-br from-red-600 to-red-500"
        >
          <span
            class="pointer-events-none select-none absolute inset-0 text-white/25 [&>svg]:w-full [&>svg]:h-full"
            v-html="hexDotSvg()"
          ></span>

          <img
            src="../../public/images/person.webp"
            alt="MENDELEYEV"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[130%] max-[640px]:h-[100%] w-auto max-w-none object-contain z-10"
          />
        </div>

        <!-- Bitta ustunli, uzunroq kartochkalar -->
        <div
          class="rounded-2xl bg-[#F3F5F7] dark:bg-white/5 px-4 py-4 flex gap-4 items-center"
          v-for="am in amenities"
          :key="am.uz"
        >
          <span
            class="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-white"
            v-html="amenIconSvg(am.icon)"
          ></span>
          <p
            class="text-[15px] text-[#0F1E33] dark:text-white leading-[1.45] font-medium"
          >
            {{ am[lang] }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { hexDotSvg, amenIconSvg } from "../data/icons";

const props = defineProps({ t: Object, lang: String, amenities: Array });

const leftAmenities = computed(() =>
  props.amenities.filter((_, i) => i % 2 === 0)
);
const rightAmenities = computed(() =>
  props.amenities.filter((_, i) => i % 2 === 1)
);
</script>
