<template>
  <section id="faq" class="relative py-[100px] max-[640px]:py-16">
    <div class="max-w-[1180px] mx-auto px-8 max-[640px]:px-5">
      <div class="reveal mb-14 text-center">
        <h2
          class="text-[clamp(28px,3.6vw,42px)] font-bold text-[#0F1E33] dark:text-white max-w-160 mx-auto"
        >
          {{ t.faqTitle }}
        </h2>
        <p
          class="text-[17px] text-gray-400 dark:text-white/60 max-w-140 mt-4 leading-[1.6] mx-auto"
        >
          {{ t.faqSub }}
        </p>
      </div>

      <div class="reveal max-w-225 mx-auto flex flex-col gap-2">
        <div
          v-for="(f, i) in faq"
          :key="f.q.uz"
          class="rounded-2xl bg-[#F4F5F7] dark:bg-white/[0.06] transition-colors duration-200"
        >
          <button
            class="w-full flex justify-between items-center gap-5 py-4 px-7 max-[640px]:px-5 max-[640px]:py-5 text-left cursor-pointer bg-transparent border-0"
            @click="$emit('toggleFaq', i)"
          >
            <span
              class="text-[20px] max-[640px]:text-[15.5px] font-bold text-ink dark:text-white leading-[1.4]"
            >
              {{ f.q[lang] }}
            </span>

            <span
              class="relative w-9 h-9 shrink-0 rounded-full bg-red-500 flex items-center justify-center transition-transform duration-300"
            >
              <span
                class="absolute bg-white rounded-[1px] w-3.5 h-[2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></span>
              <span
                class="absolute bg-white rounded-[1px] w-[2px] h-3.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
                :class="openFaq === i ? 'opacity-0' : 'opacity-100'"
              ></span>
            </span>
          </button>

          <div
            class="overflow-hidden transition-[max-height] duration-300 ease"
            :class="openFaq === i ? 'max-h-[260px]' : 'max-h-0'"
          >
            <p
              class="text-[15px] text-ink-soft dark:text-white/60 leading-[1.65] px-7 max-[640px]:px-5 pb-6 max-w-[680px]"
            >
              {{ f.a[lang] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["toggleFaq"]);
const props = defineProps({
  t: Object,
  lang: String,
  faq: Array,
  openFaq: Number,
});
</script>
