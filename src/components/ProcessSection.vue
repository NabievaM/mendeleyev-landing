<template> 
  <section 
    id="process" 
    class="relative pb-25 max-[640px]:py-16 bg-white dark:bg-[#0b1220] text-[#0b1b34] dark:text-white leading-12 transition-colors duration-300" 
  > 
    <div class="max-w-295 mx-auto px-8 max-[640px]:px-5"> 
      <div class="reveal mb-14 text-center"> 
        <h2 
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-160 mx-auto" 
        > 
          {{ t.procTitle }} 
        </h2> 
        <p 
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-140 mt-4 leading-[1.6] mx-auto" 
        > 
          {{ t.procSub }} 
        </p> 
      </div> 
 
      <div class="relative"> 
        <!-- markazdagi vertikal punktir chiziq --> 
        <div 
          class="hidden sm:block absolute left-1/2 top-2 bottom-2 border-l-2 border-dashed border-gray-200 dark:border-white/15 -translate-x-1/2" 
        ></div> 
 
        <div 
          v-for="(step, i) in steps" 
          :key="step.title.uz" 
          class="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 mb-10 last:mb-0" 
        > 
          <!-- markazdagi katta nuqta (chiziqlar shu yerda tutashadi) --> 
          <div 
            class="hidden sm:block absolute left-1/2 top-1/2 w-3.5 h-3.5 rounded-full bg-gray-300 dark:bg-white/25 -translate-x-1/2 -translate-y-1/2 z-10" 
          ></div> 
 
          <!-- nuqtadan kartagacha boradigan gorizontal punktir --> 
          <div 
            v-if="i % 2 === 0" 
            class="hidden sm:block absolute top-1/2 -translate-y-1/2 h-0 border-t-2 border-dashed border-gray-200 dark:border-white/15" 
            style="left: calc(50% - 32px); width: 32px" 
          ></div> 
          <div 
            v-else 
            class="hidden sm:block absolute top-1/2 -translate-y-1/2 h-0 border-t-2 border-dashed border-gray-200 dark:border-white/15" 
            style="left: 50%; width: 32px" 
          ></div> 
 
          <!-- CHAP ustun: juft bo'lmagan (0, 2, 4...) qadamlar shu yerda --> 
          <div 
            v-if="i % 2 === 0" 
            :ref="setCardRef(i)" 
            class="step-card bg-gray-50 dark:bg-white/[0.06] rounded-2xl p-7 max-[640px]:p-6 flex flex-col gap-4" 
            :style="{ transitionDelay: `${(i % 6) * 90}ms` }" 
          > 
            <div 
              class="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7" 
              v-html="processIconSvg(step.icon)" 
            ></div> 
            <div> 
              <h4 class="text-[25px] font-bold text-[#0b1b34] dark:text-white mb-2"> 
                {{ String(i + 1).padStart(2, "0") }}. {{ step.title[lang] }} 
              </h4> 
              <p class="text-[17px] leading-5 text-gray-400 dark:text-white/60 max-w-[420px]"> 
                {{ step.desc[lang] }} 
              </p> 
            </div> 
          </div> 
          <div v-else class="hidden sm:block"></div> 
 
          <!-- O'NG ustun: juft (1, 3, 5...) qadamlar shu yerda --> 
          <div v-if="i % 2 === 0" class="hidden sm:block"></div> 
          <div 
            v-else 
            :ref="setCardRef(i)" 
            class="step-card bg-gray-50 dark:bg-white/[0.06] rounded-2xl p-7 max-[640px]:p-6 flex flex-col gap-4" 
            :style="{ transitionDelay: `${(i % 6) * 90}ms` }" 
          > 
            <div 
              class="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center [&>svg]:w-7 [&>svg]:h-7" 
              v-html="processIconSvg(step.icon)" 
            ></div> 
            <div> 
              <h4 class="text-[25px] font-bold text-[#0b1b34] dark:text-white mb-2"> 
                {{ String(i + 1).padStart(2, "0") }}. {{ step.title[lang] }} 
              </h4> 
              <p class="text-[17px] text-gray-400 dark:text-white/60 leading-5 max-w-[420px]"> 
                {{ step.desc[lang] }} 
              </p> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </section> 
</template> 
 
<script setup> 
import { onMounted, onBeforeUnmount } from "vue"; 
import { processIconSvg } from "../data/icons"; 
 
defineProps({ t: Object, lang: String, steps: Array }); 
 
const cardEls = []; 
function setCardRef(i) { 
  return (el) => { 
    if (el) cardEls[i] = el; 
  }; 
} 
 
let observer; 
onMounted(() => { 
  observer = new IntersectionObserver( 
    (entries) => { 
      entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
          entry.target.classList.add("is-visible"); 
          observer.unobserve(entry.target); 
        } 
      }); 
    }, 
    { threshold: 0.2, rootMargin: "0px 0px -60px 0px" } 
  ); 
  cardEls.forEach((el) => el && observer.observe(el)); 
}); 
onBeforeUnmount(() => observer && observer.disconnect()); 
</script> 
 
<style scoped> 
.step-card { 
  opacity: 0; 
  transform: translateY(28px); 
  transition: opacity 0.6s ease, transform 0.6s ease; 
  will-change: opacity, transform; 
} 
.step-card.is-visible { 
  opacity: 1; 
  transform: translateY(0); 
} 
</style>