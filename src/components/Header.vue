<template>
  <!-- =========================================================
       HEADER
  ========================================================== -->
  <header
    class="sticky top-0 z-[100] border-b border-line bg-white backdrop-blur-[14px] dark:border-white/10 dark:bg-ink"
  >
    <div
      class="mx-auto flex h-[84px] max-w-[1180px] items-center justify-between px-8 max-[640px]:px-5"
    >
      <!-- =====================================================
           LOGO
      ====================================================== -->
      <a href="#top" class="flex items-center gap-3" @click="closeMenu">
        <span
          class="relative inline-flex h-14 w-14 shrink-0 items-center justify-center"
        >
          <img
            src="/images/logo.jpg"
            alt="MENDELEYEV logo"
            class="h-full w-full object-contain rounded-full"
          />
        </span>

        <span class="flex flex-col leading-[1.15]">
          <strong
            class="font-[Montserrat] text-2xl max-[480px]:text-lg max-[380px]:text-base font-extrabold leading-[0.85] tracking-[-0.5px] text-red-950 dark:text-white"
          >
            MENDELEYEV
          </strong>
        </span>
      </a>

      <!-- =====================================================
           RIGHT SIDE
      ====================================================== -->
      <div class="flex items-center gap-[18px]">
        <!-- ===================================================
             PHONE
        ==================================================== -->
        
          <a :href="'tel:' + data.phoneRaw"
          class="whitespace-nowrap text-[17px] text-gray-500 max-[980px]:hidden dark:text-white/60"
        >
          {{ data.phone }}
        </a>

        <!-- ===================================================
             LANGUAGE DROPDOWN
        ==================================================== -->
        <div class="relative" ref="langWrapRef">
          <button
            type="button"
            class="flex cursor-pointer items-center gap-1.5 px-2.5 py-1.5 pl-2 text-[13px] font-bold text-ink transition-colors duration-200 dark:text-white"
            @click="langMenuOpen = !langMenuOpen"
          >
            <img
              :src="currentLangOption.flag"
              alt=""
              class="h-6 w-8 shrink-0 rounded-[3px] border border-gray-200 object-cover"
            />

            <span>
              {{ currentLangOption.label }}
            </span>

            <svg
              class="h-3 w-3 shrink-0 transition-transform duration-200"
              :class="langMenuOpen ? 'rotate-180' : ''"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- LANGUAGE MENU -->
          <div
            v-show="langMenuOpen"
            class="absolute right-0 top-full z-[110] mt-2 min-w-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft dark:border-white/10 dark:bg-ink"
          >
            <button
              v-for="opt in langOptions.filter((o) => o.code !== lang)"
              :key="opt.code"
              type="button"
              class="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap border-0 bg-transparent px-3 py-2 text-[13px] font-bold text-ink hover:bg-red-50 dark:text-white dark:hover:bg-white/10"
              @click="selectLang(opt.code)"
            >
              <img
                :src="opt.flag"
                alt=""
                class="h-6 w-8 shrink-0 rounded-[3px] border border-gray-300 object-cover"
              />

              {{ opt.label }}
            </button>
          </div>
        </div>

        <!-- ===================================================
             CONTACT BUTTON
        ==================================================== -->
        
         <a href="#contact"
          @click.prevent="$emit('openContact')"
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-red-500 px-8 py-3.5 text-md font-semibold text-white hover:bg-red-600 max-[640px]:hidden"
        >
          {{ t.nav.cta }}
        </a>

        <!-- ===================================================
             MENU BUTTON
             MENU BOG'LANISHNING OLDIDA
        ==================================================== -->
        <button
          type="button"
          class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border-0 bg-red-500 p-0 text-white transition-all duration-200 hover:bg-red-600 active:scale-95"
          @click="toggleMenu"
          aria-label="Menyuni ochish"
        >
          <!-- HAMBURGER -->
          <svg v-if="!menuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7H20"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />

            <path
              d="M4 12H20"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />

            <path
              d="M4 17H20"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>

          <!-- CLOSE -->
          <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />

            <path
              d="M18 6L6 18"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <!-- ===================================================
             DARK MODE TOGGLE
        ==================================================== -->
        <button
          type="button"
          class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-gray-100 p-0 text-ink transition-all duration-200 hover:bg-gray-200 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          @click="toggleDark"
          aria-label="Rejimni almashtirish"
        >
          <!-- MOON (light mode -> click to go dark) -->
          <svg v-if="!isDark" class="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- SUN (dark mode -> click to go light) -->
          <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="4.5"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="M12 2.5v2M12 19.5v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2.5 12h2M19.5 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- =========================================================
       DARK OVERLAY
  ========================================================== -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-[200] bg-black/65"
      @click="closeMenu"
    ></div>
  </Transition>

  <!-- =========================================================
       SIDE MENU
  ========================================================== -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <aside
      v-if="menuOpen"
      class="fixed right-0 top-0 z-[210] flex h-screen w-full max-w-[390px] flex-col bg-white px-8 py-7 shadow-2xl dark:bg-ink"
    >
      <!-- =====================================================
           MENU HEADER
      ====================================================== -->
      <div class="flex items-center justify-between">
        <!-- LOGO -->
        <a href="#top" class="flex items-center gap-2" @click="closeMenu">
          <span
            class="relative inline-flex h-12 w-12 shrink-0 items-center justify-center"
          >
            <img
              src="/images/logo.jpg"
              alt="MENDELEYEV logo"
              class="h-full w-full object-contain rounded-full"
            />
          </span>

          <span
            class="font-[Montserrat] text-[20px] font-extrabold leading-[0.85] tracking-[-0.5px] text-red-950 dark:text-white"
          >
            MENDELEYEV
          </span>
        </a>

        <!-- CLOSE BUTTON -->
        <button
          type="button"
          @click="closeMenu"
          aria-label="Menyuni yopish"
          class="flex h-10 w-10 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-red-950 transition hover:text-red-500 dark:text-white dark:hover:text-red-400"
        >
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />

            <path
              d="M18 6L6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <!-- =====================================================
           MENU LINKS
      ====================================================== -->
      <nav class="mt-16 flex flex-col items-center gap-7 text-center">
        <!-- YO'NALISHLAR -->
        
          <a href="#courses"
          @click="closeMenu"
          class="text-[20px] font-medium text-red-950 transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-red-400"
        >
          {{ t.nav.courses }}
        </a>

        <!-- JAMOA -->
        
          <a href="#team"
          @click="closeMenu"
          class="text-[20px] font-medium text-red-950 transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-red-400"
        >
          {{ t.nav.team }}
        </a>

        <!-- SAVOL-JAVOB -->
        
          <a href="#faq"
          @click="closeMenu"
          class="text-[20px] font-medium text-red-950 transition-colors duration-200 hover:text-red-500 dark:text-white dark:hover:text-red-400"
        >
          {{ t.nav.faq }}
        </a>
      </nav>

      <!-- =====================================================
           MOBILE PHONE
      ====================================================== -->
      <div class="mt-10 text-center min-[981px]:hidden">
        
          <a :href="'tel:' + data.phoneRaw"
          class="text-[16px] font-medium text-gray-500 dark:text-white/60"
          @click="closeMenu"
        >
          {{ data.phone }}
        </a>
      </div>

      <!-- =====================================================
           BOTTOM CONSULTATION
      ====================================================== -->
      <div class="mt-auto">
        
          <a href="#contact"
          @click.prevent="onMobileContactClick"
          class="flex h-[60px] w-full items-center justify-center rounded-xl bg-red-500 text-[16px] font-semibold text-white transition-all duration-200 hover:bg-red-600 hover:shadow-[0_14px_30px_-12px_rgba(239,68,68,0.65)]"
        >
          {{ t.nav.cta }}
        </a>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useDarkMode } from "../composables/useDarkMode";

const { isDark, toggleDark } = useDarkMode();

const props = defineProps({
  lang: String,
  menuOpen: Boolean,
  t: Object,
  data: Object,
});

// ============================================================
// EMITS
// ============================================================

const emit = defineEmits(["update:menuOpen", "changeLang", "openContact"]);

// ============================================================
// MENU
// ============================================================

const toggleMenu = () => {
  emit("update:menuOpen", !props.menuOpen);

  // Menu ochilganda til menyusini yopamiz
  langMenuOpen.value = false;
};

const closeMenu = () => {
  emit("update:menuOpen", false);
};

const onMobileContactClick = () => {
  closeMenu();
  emit("openContact");
};

// ============================================================
// LANGUAGE
// ============================================================

const langOptions = [
  {
    code: "uz",
    label: "UZB",
    flag: "/images/ozb-flag.png",
  },

  {
    code: "ru",
    label: "RUS",
    flag: "/images/rus-flag.webp",
  },
];

const langMenuOpen = ref(false);

const langWrapRef = ref(null);

const currentLangOption = computed(() => {
  return langOptions.find((o) => o.code === props.lang) || langOptions[0];
});

function selectLang(code) {
  emit("changeLang", code);

  langMenuOpen.value = false;
}

// ============================================================
// CLICK OUTSIDE LANGUAGE
// ============================================================

function onClickOutside(e) {
  if (langWrapRef.value && !langWrapRef.value.contains(e.target)) {
    langMenuOpen.value = false;
  }
}

// ============================================================
// ESC KEY
// ============================================================

function onKeyDown(e) {
  if (e.key === "Escape") {
    langMenuOpen.value = false;

    if (props.menuOpen) {
      closeMenu();
    }
  }
}

// ============================================================
// MOUNT / UNMOUNT
// ============================================================

onMounted(() => {
  document.addEventListener("click", onClickOutside);

  document.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);

  document.removeEventListener("keydown", onKeyDown);
});
</script>