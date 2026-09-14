<template>
  <section
    class="bg-white pb-14 transition-colors duration-300 dark:bg-ink max-[640px]:pb-10"
  >
    <div class="logos-marquee__wrap relative w-full overflow-hidden">
      <div
        class="logos-marquee__track flex w-max items-center gap-5 max-[640px]:gap-3"
      >
        <div
          v-for="(logo, i) in [...logos, ...logos]"
          :key="i + '-' + logo.name"
          class="flex min-w-72 flex-col items-center gap-3 rounded-2xl bg-[#F3F5F7] px-5 py-10 shadow-sm transition-colors duration-300 dark:bg-white/5 max-[640px]:min-w-35 max-[640px]:px-3.5 max-[640px]:py-4"
        >
          <div
            class="flex h-16 w-full items-center mb-3 max-[640px]:mb-0 justify-center px-3 max-[640px]:h-12"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              class="h-20 w-auto rounded-full max-w-full object-contain max-[640px]:h-12"
            />
          </div>

          <div class="text-center">
            <p class="text-[15px] font-bold text-ink dark:text-white">
              {{ logo.name }}
            </p>
            <p
              class="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft dark:text-white/60"
            >
              {{ logo.subtitle[props.lang] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: "uz",
  },
});

const logos = [
  {
    name: "Mendeleyev LC",
    subtitle: { uz: "O'quv markazi", ru: "Учебный центр" },
    src: "/public/images/logo/mendeleyev lc.jpg",
  },
  {
    name: "Mendeleyev School",
    subtitle: { uz: "O'rta ta'lim", ru: "Среднее образование" },
    src: "/public/images/logo/mendeleyev school.jpg",
  },
  {
    name: "Kokand IT Academy",
    subtitle: { uz: "IT ta'lim", ru: "IT-образование" },
    src: "/public/images/logo/kokand it academy.jpg",
  },
  {
    name: "Kokand IT School",
    subtitle: { uz: "IT dasturi", ru: "IT-программа" },
    src: "/public/images/logo/kokand it school.jpg",
  },
];
</script>

<style scoped>
.logos-marquee__wrap {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 64px,
    #000 calc(100% - 64px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 64px,
    #000 calc(100% - 64px),
    transparent 100%
  );
}

.logos-marquee__track {
  animation: scroll-logos 22s linear infinite;
}

.logos-marquee__track:hover {
  animation-play-state: paused;
}

@keyframes scroll-logos {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .logos-marquee__track {
    animation: none;
  }
  .logos-marquee__wrap {
    overflow-x: auto;
  }
}
</style>
