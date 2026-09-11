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
      v-if="open"
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
          v-if="open"
          class="relative w-full max-w-125 rounded-[26px] bg-white dark:bg-ink px-7 py-9 max-[480px]:px-5 max-[480px]:py-7 shadow-2xl"
        >
          <!-- CLOSE BUTTON -->
          <button
            type="button"
            @click="close"
            aria-label="Yopish"
            class="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-gray-100 p-0 text-ink transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
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

          <template v-if="!submitted">
            <!-- HEADING -->
            <h3
              class="max-w-90 mx-auto text-center text-[26px] max-[480px]:text-[22px] font-extrabold leading-[1.25] text-ink dark:text-white"
            >
              {{ t.contactTitle }}
            </h3>
            <p
              class="mt-3 text-center text-[15px] leading-[1.55] text-gray-400 dark:text-white/60"
            >
              {{ t.contactSub }}
            </p>

            <!-- FORM -->
            <form
              @submit.prevent="$emit('submit')"
              class="mt-7 flex flex-col gap-3.5"
            >
              <input
                type="text"
                v-model="formData.name"
                :placeholder="t.form.namePh"
                required
                class="w-full rounded-xl border border-gray-200 dark:border-white/15 bg-transparent px-5 py-4 text-[15px] text-ink placeholder-gray-400 outline-none transition-colors duration-200 focus:border-red-400 dark:text-white dark:placeholder-white/40"
              />

              <div
                class="flex w-full items-center gap-2.5 rounded-xl border border-gray-200 dark:border-white/15 px-5 py-4 transition-colors duration-200 focus-within:border-red-400"
              >
                <span class="inline-block shrink-0 overflow-hidden rounded-xs">
                  <img
                    class="h-5 w-8"
                    src="../../public/images/ozb-flag.png"
                    alt=""
                  />
                </span>

                <input
                  type="tel"
                  v-model="formData.phone"
                  @input="$emit('formatPhone', $event)"
                  placeholder="+998 **-***-**-**"
                  maxlength="17"
                  required
                  class="flex-1 bg-transparent text-[15px] text-ink placeholder-gray-400 outline-none dark:text-white dark:placeholder-white/40"
                />
              </div>

              <button
                type="submit"
                class="mt-1 w-full cursor-pointer rounded-xl bg-red-500 px-7 py-4.5 text-[15.5px] font-bold text-white transition-colors duration-200 hover:bg-red-600"
              >
                {{ t.form.submit }}
              </button>
            </form>

            <p
              class="mt-4 text-center text-[12.5px] leading-[1.5] text-gray-400 dark:text-white/45"
            >
              {{ t.form.note }}
            </p>
          </template>

          <template v-else>
            <div class="py-4 text-center">
              <img
                class="mx-auto h-15 w-15 rounded-full"
                src="../../public/images/logo.jpg"
                alt=""
              />
              <h3 class="mb-2 mt-4 text-[22px] font-bold text-ink dark:text-white">
                {{ t.form.thanksTitle }}
              </h3>
              <p class="text-[15px] text-gray-400 dark:text-white/60">
                {{ t.form.thanksDesc }}
              </p>
            </div>
          </template>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  open: Boolean,
  t: Object,
  submitted: Boolean,
  formData: Object,
});

const emit = defineEmits(["close", "submit", "formatPhone"]);

function close() {
  emit("close");
}

// ============================================================
// ESC KEY TO CLOSE
// ============================================================

function onKeyDown(e) {
  if (e.key === "Escape" && props.open) {
    close();
  }
}

onMounted(() => {
  document.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onKeyDown);
});

// ============================================================
// LOCK BODY SCROLL WHILE MODAL IS OPEN
// ============================================================

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
);
</script>
