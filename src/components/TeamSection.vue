<template>
  <section id="team" class="relative py-[100px] max-[640px]:py-16">
    <div class="max-w-[1280px] mx-auto px-8 max-[640px]:px-5">
      <!-- TITLE -->
      <div class="reveal mb-14 text-center">
        <h2
          class="mx-auto max-w-[800px] text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.15] text-[#0F1E33] dark:text-white"
        >
          {{ t.teamTitle }}
        </h2>

        <p
          class="mx-auto mt-4 max-w-[650px] text-[17px] leading-[1.6] text-[#9AA0AD] dark:text-white/60"
        >
          {{ t.teamSub }}
        </p>
      </div>

      <!-- TEAM: auto-scrolling marquee -->
      <div
        class="reveal group relative overflow-hidden"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
      >
        <div
          class="flex gap-5 w-max animate-marquee"
          :style="{ animationPlayState: paused ? 'paused' : 'running' }"
        >
          <!-- render team twice for seamless loop -->
          <div
            v-for="(m, i) in [...team, ...team]"
            :key="m.name.uz + '-' + i"
            class="shrink-0 w-[270px] overflow-hidden rounded-[22px] bg-[#F5F6F8] dark:bg-white/5"
          >
            <!-- IMAGE -->
            <div
              class="w-full overflow-hidden rounded-t-[22px] bg-gradient-to-br from-red-800 via-red-700 to-red-500"
              :style="{ height: m.imageHeight || '166px' }"
            >
              <img
                :src="m.image"
                :alt="m.name[lang]"
                class="block h-full object-cover mx-auto"
                :style="{
                  width: m.imageWidth || '100%',
                  objectPosition: m.imagePosition || 'center top',
                }"
              />
            </div>

            <!-- CONTENT -->
            <div class="px-[14px] py-[17px]">
              <h4
                class="mb-[8px] text-[24px] font-bold leading-[1.05] tracking-[-0.5px] text-[#071B4A] dark:text-white"
              >
                {{ m.name[lang] }}
              </h4>

              <p
                class="text-[16px] font-normal leading-[1.25] text-[#8B91A3] dark:text-white/60"
              >
                {{ m.role[lang] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  t: Object,
  lang: String,
  team: Array,
});

const paused = ref(false);
</script>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
