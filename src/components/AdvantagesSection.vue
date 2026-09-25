<template>
  <section
    id="advantages"
    class="relative max-[640px]:py-5 max-[640px]:leading-7 leading-12 pb-30"
  >
    <div class="max-w-295 mx-auto px-8 max-[640px]:px-5">
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-160 mx-auto"
        >
          {{ t.advTitle }}
        </h2>
        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-140 mt-4 leading-[1.6] mx-auto"
        >
          {{ t.advSub }}
        </p>
      </div>
      <div
        class="reveal grid grid-cols-2 gap-7 max-[640px]:flex max-[640px]:grid-cols-none max-[640px]:overflow-x-auto max-[640px]:snap-x max-[640px]:snap-mandatory max-[640px]:-mx-5 max-[640px]:px-5 max-[640px]:pb-2 max-[640px]:[scrollbar-width:none] max-[640px]:[&::-webkit-scrollbar]:hidden"
      >
        <div
          class="relative overflow-hidden p-[34px_30px] max-[640px]:p-[20px_20px] rounded-2xl bg-[#F3F5F7] dark:bg-white/5 transition-transform duration-200 hover:-translate-y-1 max-[640px]:shrink-0 max-[640px]:w-[95%] max-[640px]:snap-center"
          v-for="a in advantages"
          :key="a.icon"
        >
          <!-- Dekorativ uchburchak naqsh -->
          <span
            class="pointer-events-none select-none absolute right-0 top-0 h-full w-[45%] text-[#DADFE3] dark:text-white/10 [&>svg]:w-full [&>svg]:h-full"
            v-html="hexDotSvg()"
          ></span>

          <div class="relative z-10 leading-8">
            <span
              class="w-16 h-16 max-[640px]:w-12 max-[640px]:h-12 rounded-2xl bg-red-500 flex items-center justify-center mb-5 shrink-0 [&>svg]:w-10 [&>svg]:h-10 [&>svg]:text-white"
              v-html="advIconSvg(a.icon)"
            ></span>
            <h3
              class="text-[30px] max-[640px]:text-[25px] font-bold text-[#0F1E33] dark:text-white mb-2.5"
            >
              {{ a.title[lang] }}
            </h3>

            <ul v-if="Array.isArray(a.desc[lang])" class="leading-[1.6]">
              <li
                v-for="(item, i) in a.desc[lang]"
                :key="i"
                class="flex gap-2 text-[17px] leading-normal font-medium text-gray-400 dark:text-white/60"
              >
                <span
                  class="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-gray-500"
                ></span>

                <span>{{ item }}</span>
              </li>
            </ul>

            <!-- Oddiy paragraf -->
            <p
              v-else
              class="text-[17px] max-[640px]:text-[15px] font-medium text-gray-400 dark:text-white/60 leading-[1.6] max-w-[70%] max-[640px]:max-w-[90%]"
            >
              {{ a.desc[lang] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hexDotSvg, advIconSvg } from "../data/icons";
const props = defineProps({ t: Object, lang: String, advantages: Array });
</script>
