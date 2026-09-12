<template>
  <footer class="relative overflow-hidden bg-red-500 text-white">
    <!-- TOP RIGHT TRIANGLES -->
    <svg
      class="pointer-events-none absolute right-0 top-0 w-[190px] h-[150px] opacity-30"
      viewBox="0 0 190 150"
      fill="none"
    >
      <path d="M145 0H190V55L145 0Z" fill="white" opacity=".18" />
      <path d="M100 0H145L122 55L100 0Z" fill="white" opacity=".12" />
      <path d="M55 0H100L77 55L55 0Z" fill="white" opacity=".16" />
      <path d="M10 0H55L32 55L10 0Z" fill="white" opacity=".1" />

      <path d="M167 55H190V100L167 55Z" fill="white" opacity=".12" />
      <path d="M122 55H167L145 100L122 55Z" fill="white" opacity=".16" />
      <path d="M77 55H122L100 100L77 55Z" fill="white" opacity=".1" />
    </svg>

    <div class="relative max-w-[1280px] mx-auto px-8 max-[640px]:px-5">
      <!-- MAIN FOOTER -->
      <div
        class="grid grid-cols-[270px_270px_1fr_310px] gap-x-8 pt-11 pb-5 max-[1100px]:grid-cols-2 max-[1100px]:gap-x-14 max-[700px]:grid-cols-1 max-[700px]:gap-10"
      >
        <!-- LOGO -->
        <div>
          <a href="#top" class="inline-flex items-center gap-3">
            <!-- Logo icon -->
            <img
              class="w-12 h-12 rounded-full"
              src="../../public/images/logo.jpg"
              alt=""
            />

            <!-- Logo text -->
            <span
              class="flex flex-col text-white font-extrabold leading-[0.82] uppercase tracking-[-0.03em]"
            >
              <span class="text-[27px]">Mendeleyev</span>
            </span>
          </a>

          <a
            href="#contact"
            @click.prevent="$emit('openContact')"
            class="mt-6 inline-flex w-[237px] h-[67px] items-center justify-center rounded-[18px] bg-white text-red-500 text-[16px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          >
            {{ t.footer.ctaButton }}
          </a>
        </div>

        <!-- CONTACT -->
        <div>
          <h3
            class="text-[28px] max-[640px]:text-[24px] font-extrabold leading-[1.15] text-white mb-4"
          >
            {{ t.footer.contactTitle }}
          </h3>

          <a
            :href="'tel:' + data.phoneRaw"
            class="flex items-center gap-2.5 text-[17px] text-white/55 hover:text-white transition-colors duration-200"
          >
            <!-- phone icon -->
            <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.1 3.8L9.3 3.2C10 3 10.7 3.4 11 4.1L12.1 7C12.3 7.6 12.1 8.2 11.6 8.6L10.1 9.8C10.9 11.7 12.4 13.2 14.2 14L15.4 12.5C15.8 12 16.4 11.8 17 12L19.9 13.1C20.6 13.4 21 14.1 20.8 14.8L20.2 17C20 17.7 19.4 18.2 18.7 18.2C10.8 18.2 5.8 13.2 5.8 5.3C5.8 4.6 6.3 4 7.1 3.8Z"
                fill="currentColor"
              />
            </svg>

            {{ data.phone }}
          </a>

          <nav class="mt-5 flex flex-col gap-3">
            <a
              href="#courses"
              class="text-[17px] text-white/55 hover:text-white transition-colors duration-200"
            >
              {{ t.nav.courses }}
            </a>

            <a
              href="#team"
              class="text-[17px] text-white/55 hover:text-white transition-colors duration-200"
            >
              {{ t.nav.team }}
            </a>

            <a
              href="#faq"
              class="text-[17px] text-white/55 hover:text-white transition-colors duration-200"
            >
              {{ t.nav.faq }}
            </a>
          </nav>
        </div>

        <!-- SOCIAL -->
        <div>
          <h3
            class="max-w-72.5 text-[28px] max-[640px]:text-[24px] font-extrabold leading-[1.15] text-white"
          >
            {{ t.footer.socialTitle }}
          </h3>

          <div class="mt-5 flex flex-col gap-3">
            <!-- YouTube -->
            <a
              :href="data.social.youtube"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2.5 text-[18px] font-semibold text-white/55 hover:text-white transition-colors duration-200"
            >
              <span
                class="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"
                v-html="youtubeSvg()"
              ></span>
              <span>YouTube</span>
            </a>

            <!-- Instagram -->
            <a
              :href="data.social.instagram"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2.5 text-[18px] font-semibold text-white/55 hover:text-white transition-colors duration-200"
            >
              <span
                class="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"
                v-html="instagramSvg()"
              ></span>
              <span>Instagram</span>
            </a>

            <!-- Telegram -->
            <a
              :href="data.social.telegram"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2.5 text-[18px] font-semibold text-white/55 hover:text-white transition-colors duration-200"
            >
              <span
                class="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"
                v-html="telegramSvg()"
              ></span>
              <span>Telegram</span>
            </a>
          </div>
        </div>

        <!-- MAP -->
        <div class="max-[1100px]:col-span-2 max-[700px]:col-span-1">
          <div class="w-full h-63 overflow-hidden rounded-[18px] bg-white/10">
            <iframe
              v-if="data.mapEmbed"
              :src="data.mapEmbed"
              class="w-full h-full border-0"
              loading="lazy"
              allowfullscreen
            ></iframe>

            <div
              v-else
              class="w-full h-full flex items-center justify-center text-white/50 text-sm"
            >
              {{ t.footer.mapPlaceholder }}
            </div>
          </div>
        </div>
      </div>

      <!-- ADDRESS -->
      <div
        class="grid grid-cols-[270px_270px_1fr_310px] gap-x-28 pb-5 max-[1100px]:grid-cols-2 max-[1100px]:gap-x-14 max-[700px]:grid-cols-1"
      >
        <div class="max-[1100px]:hidden"></div>

        <div class="col-span-2 max-[1100px]:col-span-2 max-[700px]:col-span-1">
          <div class="flex items-start gap-2 text-[17px] leading-[1.55]">
            <span class="font-bold text-white shrink-0">
              {{ t.footer.addressLabel }}
            </span>

            <span class="text-white/55">
              {{ data.address[lang] }}
            </span>
          </div>

          <div class="flex items-start gap-2 mt-1 text-[17px] leading-[1.55]">
            <span class="font-bold text-white shrink-0">
              {{ t.landmarkLabel }}
            </span>

            <span class="text-white/55">
              {{ data.landmark[lang] }}
            </span>
          </div>
        </div>
      </div>

      <!-- DIVIDER -->
      <div class="border-t border-white/15"></div>

      <!-- BOTTOM -->
      <div
        class="relative flex items-center justify-between min-h-[104px] py-5 text-[15px] text-white/50 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-3"
      >
        <span> &copy; {{ year }} Mendeleyev LLC{{ t.footer.rights }} </span>

        <a href="#" class="hover:text-white transition-colors duration-200">
          {{ t.footer.publicOffer }}
        </a>

        <!-- BOTTOM LEFT TRIANGLES -->
        <svg
          class="pointer-events-none absolute left-[-95px] bottom-[-75px] w-[390px] h-[180px] opacity-25"
          viewBox="0 0 390 180"
          fill="none"
        >
          <path d="M0 180L28 120L56 180H0Z" fill="white" opacity=".18" />
          <path d="M55 180L83 120L111 180H55Z" fill="white" opacity=".12" />
          <path d="M110 180L138 120L166 180H110Z" fill="white" opacity=".18" />
          <path d="M165 180L193 120L221 180H165Z" fill="white" opacity=".12" />
          <path d="M220 180L248 120L276 180H220Z" fill="white" opacity=".18" />
          <path d="M275 180L303 120L331 180H275Z" fill="white" opacity=".12" />

          <path d="M0 120L28 60L56 120H0Z" fill="white" opacity=".1" />
          <path d="M55 120L83 60L111 120H55Z" fill="white" opacity=".16" />
          <path d="M110 120L138 60L166 120H110Z" fill="white" opacity=".1" />
          <path d="M165 120L193 60L221 120H165Z" fill="white" opacity=".16" />
          <path d="M220 120L248 60L276 120H220Z" fill="white" opacity=".1" />
        </svg>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  hexLogoSvg,
  telegramSvg,
  instagramSvg,
  youtubeSvg,
} from "../data/icons";

defineProps({
  t: Object,
  data: Object,
  lang: String,
  year: {
    type: Number,
    default: new Date().getFullYear(),
  },
});

defineEmits(["openContact"]);
</script>
