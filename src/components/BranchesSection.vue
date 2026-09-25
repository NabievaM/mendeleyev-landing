<template>
  <section :id="sectionId" class="relative pb-25 max-[640px]:py-16">
    <div class="max-w-7xl mx-auto px-8 max-[640px]:px-5">
      <!-- TITLE -->
      <div class="reveal mb-14 text-center">
        <span
          class="inline-block rounded-full bg-blush px-4 py-1.5 text-[13px] font-bold text-red dark:bg-white/10 dark:text-white/80"
        >
          {{ tag }}
        </span>

        <h2
          class="mx-auto mt-4 max-w-200 text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.15] text-[#0F1E33] dark:text-white"
        >
          {{ title }}
        </h2>

        <p
          class="mx-auto mt-4 max-w-162.5 text-[17px] leading-[1.6] text-[#9AA0AD] dark:text-white/60"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- CARDS GRID -->
      <div
        class="reveal grid grid-cols-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 gap-6"
      >
        <button
          v-for="b in branches"
          :key="b.id"
          type="button"
          class="group text-left cursor-pointer overflow-hidden rounded-[22px] border-0 bg-[#F5F6F8] p-0 transition-transform duration-200 hover:-translate-y-1 dark:bg-white/5"
          @click="selected = b"
        >
          <!-- COVER -->
          <div
            class="relative flex h-60 items-end overflow-hidden 0 p-4"
          >
            <img
              v-if="b.image"
              :src="b.image"
              :alt="b.name[lang]"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <div
              class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
            ></div>

            <span
              class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm"
              v-html="icon === 'lc' ? bookSvg() : buildingSvg()"
            ></span>

            <h4
              class="relative z-10 text-[19px] font-bold leading-[1.2] text-white"
            >
              {{ b.name[lang] }}
            </h4>
          </div>

          <!-- BODY -->
          <div class="px-4.5 py-4.5">
            <p
              class="min-h-10.5 text-[14px] leading-normal text-gray-400 dark:text-white/55"
            >
              {{ b.address[lang] }}
            </p>

            <div class="mt-3">
              <span
                class="block text-[26px] font-extrabold leading-none text-red"
              >
                {{ b.capacity }}
              </span>
              <span
                class="text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-white/40"
              >
                {{ t.branches.capacityShort }}
              </span>
            </div>

            <div
              class="mt-3.5 flex items-center justify-between gap-2 border-t border-gray-200 pt-3 dark:border-white/10"
            >
              <span
                class="block shrink-0 rounded-lg bg-red-500 px-3.5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-red-600 dark:bg-white/10 dark:text-white"
              >
                {{ t.branches.detailsBtn }}
              </span>

              <span
                class="flex items-center gap-1.5 text-[13.5px] font-medium text-gray-400 dark:text-white/50"
              >
                <span
                  class="h-3.5 w-3.5 shrink-0"
                  v-html="phoneMiniSvg()"
                ></span>
                {{ b.phone }}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>

    <BranchDetailModal
      :branch="selected"
      :t="t"
      :lang="lang"
      @close="selected = null"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import BranchDetailModal from "./BranchDetailModal.vue";

defineProps({
  sectionId: String,
  tag: String,
  title: String,
  subtitle: String,
  branches: Array,
  lang: String,
  t: Object,
  icon: { type: String, default: "school" }, // "school" | "lc"
});

const selected = ref(null);

function hexPatternSvg() {
  return `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <defs>
      <pattern id="hexpg" width="26" height="22" patternUnits="userSpaceOnUse">
        <polygon points="13,1 24,6.5 24,15.5 13,21 2,15.5 2,6.5" fill="none" stroke="white" stroke-width="1.1"/>
      </pattern>
    </defs>
    <rect width="200" height="150" fill="url(#hexpg)" />
  </svg>`;
}

function buildingSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M4 21V6a1 1 0 0 1 .5-.87l7-4a1 1 0 0 1 1 0l7 4A1 1 0 0 1 20 6v15" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M9 10h.01M15 10h.01M9 13.5h.01M15 13.5h.01" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>`;
}

function bookSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" stroke="#fff" stroke-width="1.6"/></svg>`;
}

function phoneMiniSvg() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.7"/></svg>`;
}
</script>
