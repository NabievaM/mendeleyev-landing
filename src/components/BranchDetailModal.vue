<template>
  <Transition
    enter-active-class="transition-opacity duration-250"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="branch"
      class="fixed inset-0 z-[300] flex items-center justify-center bg-black/65 backdrop-blur-sm p-4"
      @click.self="close"
    >
      <Transition
        appear
        enter-active-class="transition-all duration-250 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-3"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-3"
      >
        <div
          v-if="branch"
          class="relative w-full max-w-125 max-h-[92vh] overflow-y-auto rounded-[26px] bg-white dark:bg-ink shadow-2xl"
        >
          <!-- HEADER / COVER -->
          <div
            class="relative flex h-60 items-end overflow-hidden rounded-t-[26px] bg-linear-to-br from-gray-300 via-gray-400 to-gray-500 p-6 dark:from-white/10 dark:via-white/15 dark:to-white/20"
          >
            <img
              v-if="branch.image"
              :src="branch.image"
              :alt="branch.name[lang]"
              class="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div
              class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
            ></div>

            <!-- CLOSE BUTTON -->
            <button
              type="button"
              @click="close"
              :aria-label="t.branches.closeLabel"
              class="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-black/30 p-0 text-white backdrop-blur-sm transition hover:bg-black/40"
            >
              <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <div class="relative z-10">
              <h3
                class="text-[26px] max-[480px]:text-[21px] font-extrabold leading-[1.15] text-white"
              >
                {{ branch.name[lang] }}
              </h3>
              <p class="mt-1 text-[14px] text-white/75">
                {{ branch.address[lang] }}
              </p>
            </div>
          </div>

          <!-- BODY -->
          <div class="px-7 py-7 max-[480px]:px-5 max-[480px]:py-6">
            <!-- ADDRESS -->
            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red/10 text-red dark:bg-red/20"
                v-html="pinSvgLocal()"
              ></span>
              <div>
                <p
                  class="text-[12.5px] font-bold uppercase tracking-wide text-gray-400 dark:text-white/50"
                >
                  {{ t.branches.addressLabel }}
                </p>
                <p class="text-[15.5px] leading-[1.5] text-ink dark:text-white">
                  {{ branch.address[lang] }}
                </p>
                <p
                  v-if="branch.landmark"
                  class="mt-1 text-[13.5px] leading-[1.5] text-gray-400 dark:text-white/50"
                >
                  {{ t.branches.landmarkLabel }}: {{ branch.landmark[lang] }}
                </p>
              </div>
            </div>

            <!-- CAPACITY -->
            <!-- <div
              class="mt-5 flex items-center justify-between rounded-2xl bg-blush px-5 py-4 dark:bg-white/5"
            >
              <span
                class="text-[13px] font-bold text-ink-soft dark:text-white/60"
              >
                {{ t.branches.capacityLabel }}
              </span>
              <span class="text-[26px] font-extrabold leading-none text-red">
                {{ branch.capacity }}
              </span>
            </div> -->

            <!-- PHONE -->
            <a
              :href="'tel:' + branch.phoneRaw"
              class="mt-4 flex items-center gap-3 rounded-2xl border border-gray-100 px-5 py-3.5 transition-colors hover:border-red/30 dark:border-white/10"
            >
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red/10 text-red dark:bg-red/20"
                v-html="phoneSvgLocal()"
              ></span>
              <span class="text-[16px] font-bold text-ink dark:text-white">
                {{ branch.phone }}
              </span>
            </a>

            <!-- ACTIONS -->
            <div class="mt-5 grid grid-cols-3 gap-2.5">
              <a
                :href="branch.telegram"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-1.5 rounded-xl bg-[#29A9EA] px-2 py-3 text-[13.5px] font-bold text-white transition hover:opacity-90"
              >
                <span class="h-4 w-4" v-html="telegramSvgLocal()"></span>
                {{ t.branches.telegramBtn }}
              </a>
              <a
                :href="branch.instagram"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-2 py-3 text-[13.5px] font-bold text-white transition hover:opacity-90"
              >
                <span class="h-4 w-4" v-html="instagramSvgLocal()"></span>
                {{ t.branches.instagramBtn }}
              </a>
              <a
                :href="branch.mapUrl"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center gap-1.5 rounded-xl bg-red px-2 py-3 text-[13.5px] font-bold text-white transition hover:bg-red-mid"
              >
                <span class="h-4 w-4" v-html="pinSvgLocal()"></span>
                {{ t.branches.mapBtn }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  branch: { type: Object, default: null },
  t: Object,
  lang: String,
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

function onKeyDown(e) {
  if (e.key === "Escape" && props.branch) close();
}

onMounted(() => document.addEventListener("keydown", onKeyDown));
onUnmounted(() => document.removeEventListener("keydown", onKeyDown));

watch(
  () => props.branch,
  (val) => {
    document.body.style.overflow = val ? "hidden" : "";
  }
);

function hexPatternSvg() {
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <pattern id="hexp" width="28" height="24" patternUnits="userSpaceOnUse">
          <polygon points="14,1 26,7 26,17 14,23 2,17 2,7" fill="none" stroke="white" stroke-width="1.2"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#hexp)" />
    </svg>`;
}

function pinSvgLocal() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5"><path d="M12 22s7-6.8 7-12a7 7 0 10-14 0c0 5.2 7 12 7 12z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function phoneSvgLocal() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function telegramSvgLocal() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M21 4L2.5 11.3c-1 .4-1 1.7.1 2l4.4 1.4 1.7 5.2c.2.7 1 .9 1.6.4l2.5-2.2 4.5 3.3c.7.5 1.7.1 1.9-.7L22 5.1c.2-.8-.6-1.4-1-1.1z" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
}

function instagramSvgLocal() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="#fff" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1" fill="#fff"/></svg>`;
}
</script>
