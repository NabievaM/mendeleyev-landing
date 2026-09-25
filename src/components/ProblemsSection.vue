<template>
  <section class="relative bg-white dark:bg-white/5 max-[640px]:py-16">
    <div class="max-w-295 mx-auto px-8 max-[640px]:px-5">
      <!-- TITLE -->
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.15] text-[#0F1E33] dark:text-white max-w-175 mx-auto"
        >
          {{ t.probTitle }}
        </h2>

        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-150 mt-5 leading-normal mx-auto"
        >
          {{ t.probSub }}
        </p>
      </div>

      <!-- CARDS -->
      <div
        class="reveal grid grid-cols-2 gap-7 max-[980px]:grid-cols-1 max-[640px]:flex max-[640px]:grid-cols-none max-[640px]:overflow-x-auto max-[640px]:snap-x max-[640px]:snap-mandatory max-[640px]:-mx-2 max-[640px]:px-2 max-[640px]:pb-0 max-[640px]:[scrollbar-width:none] max-[640px]:[&::-webkit-scrollbar]:hidden"
      >
        <div
          v-for="p in problems"
          :key="p.problem.uz"
          class="rounded-3xl bg-[#F5F6F7] dark:bg-white/5 p-6 max-[640px]:p-3 max-[640px]:shrink-0 max-[640px]:w-[90%] max-[640px]:snap-center"
        >
          <!-- OTA-ONA -->
          <div class="flex items-end gap-3 mb-4">
            <!-- Person icon -->
            <span
              class="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shrink-0 shadow-sm [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-red-600"
              v-html="personSvg()"
            ></span>

            <!-- Question -->
            <div
              class="bg-white dark:bg-white/10 rounded-[14px] px-4 py-3 shadow-sm max-w-75"
            >
              <span
                class="text-[12px] text-gray-400 dark:text-white/40 block mb-1"
              >
                {{ t.probLabelLeft }}
              </span>

              <p
                class="text-[15.5px] text-[#0F1E33] dark:text-white leading-[1.35]"
              >
                {{ p.problem[lang] }}
              </p>
            </div>
          </div>

          <div class="relative ml-18 max-[640px]:ml-11.25">
            <div
              class="rounded-[16px] bg-linear-to-br from-red-600 to-red-500 px-4 py-4 pr-12 shadow-sm"
            >
              <span class="text-[12px] text-white/70 block mb-1">
                {{ t.probLabelRight }}
              </span>

              <p class="text-[15.5px] font-semibold text-white leading-[1.4]">
                {{ p.solution[lang] }}
              </p>
            </div>

            <!-- LOGO -->
            <span
              class="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-green-600 ring-4 ring-[#F5F6F7] dark:ring-white/5 flex items-center justify-center overflow-hidden"
            >
              <img
                src="/images/logo.webp"
                alt="Logo"
                class="w-full h-full object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personSvg } from "../data/icons";

const props = defineProps({
  t: Object,
  lang: String,
  problems: Array,
});
</script>
