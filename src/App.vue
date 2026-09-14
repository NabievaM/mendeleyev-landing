<template>
  <div id="app">
    <Header
      :lang="lang"
      :menu-open="menuOpen"
      :t="t"
      :data="site"
      @change-lang="lang = $event"
      @update:menu-open="menuOpen = $event"
      @open-contact="openContactModal"
    />

    <main>
      <HeroSection
        :t="t"
        :hero-loaded="heroLoaded"
        @open-contact="openContactModal"
      />
      <Partnerlogosmarquee :lang="lang"/>
      <ResultsSection :t="t" :lang="lang" :images="resultsImages" />
      <AdvantagesSection :t="t" :lang="lang" :advantages="advantages" />
      <ProblemsSection :t="t" :lang="lang" :problems="problems" />
      <AmenitiesSection :t="t" :lang="lang" :amenities="amenities" />
      <CoursesSection
        :t="t"
        :lang="lang"
        :courses="courses"
        @open-contact="openContactModal"
      />
      <TeamSection :t="t" :lang="lang" :team="team" />
      <ProcessSection :t="t" :lang="lang" :steps="steps" />
      <ContactSection
        :t="t"
        :lang="lang"
        :courses="courses"
        :data="site"
        :submitted="submitted"
        :form-data="formData"
        @submit="onSubmitForm"
        @format-phone="formatPhone"
      />
      <FaqSection
        :t="t"
        :lang="lang"
        :faq="faq"
        :open-faq="openFaq"
        @toggle-faq="openFaq = openFaq === $event ? null : $event"
      />
    </main>

    <Footer :t="t" :data="site" :lang="lang" @open-contact="openContactModal" />

    <ContactModal
      :open="contactModalOpen"
      :t="t"
      :submitted="submitted"
      :form-data="formData"
      @close="closeContactModal"
      @submit="onSubmitForm"
      @format-phone="formatPhone"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import Partnerlogosmarquee from "./components/Partnerlogosmarquee.vue";
import AdvantagesSection from "./components/AdvantagesSection.vue";
import ProblemsSection from "./components/ProblemsSection.vue";
import AmenitiesSection from "./components/AmenitiesSection.vue";
import CoursesSection from "./components/CoursesSection.vue";
import TeamSection from "./components/TeamSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FaqSection from "./components/FaqSection.vue";
import ResultsSection from "./components/ResultsSection.vue";
import Footer from "./components/Footer.vue";
import ContactModal from "./components/ContactModal.vue";

import {
  site,
  dict,
  advantages,
  resultsImages,
  problems,
  amenities,
  courses,
  team,
  steps,
  faq,
} from "./data/landing";

const lang = ref("uz");
const menuOpen = ref(false);
const openFaq = ref(0);
const submitted = ref(false);
const heroLoaded = ref(false);
const contactModalOpen = ref(false);
const formData = reactive({ name: "", phone: "", course: "" });
const t = computed(() => dict[lang.value]);

function openContactModal() {
  menuOpen.value = false;
  contactModalOpen.value = true;
}

function closeContactModal() {
  contactModalOpen.value = false;
}

function formatPhone(event) {
  let digits = event.target.value.replace(/\D/g, "").replace(/^998/, "");
  digits = digits.slice(0, 9);

  let out = "+998";
  if (digits.length > 0) out += " " + digits.slice(0, 2);
  if (digits.length > 2) out += "-" + digits.slice(2, 5);
  if (digits.length > 5) out += "-" + digits.slice(5, 7);
  if (digits.length > 7) out += "-" + digits.slice(7, 9);

  formData.phone = out;
}

async function onSubmitForm() {
  const endpoint = import.meta.env.VITE_LEAD_API_URL;

  if (!endpoint) {
    console.error("VITE_LEAD_API_URL is not configured");
    alert("Server manzili sozlanmagan. .env faylini tekshiring.");
    return;
  }

  if (!formData.name.trim() || !formData.phone.trim()) {
    alert("Iltimos, barcha maydonlarni to‘ldiring.");
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(
        result?.message || "Arizani yuborishda xatolik yuz berdi."
      );
    }

    submitted.value = true;
    formData.name = "";
    formData.phone = "";

    if (contactModalOpen.value) {
      setTimeout(closeContactModal, 3000);
    }
  } catch (error) {
    console.error("Lead request failed:", error);
    alert(
      error?.message ||
        "Arizani yuborib bo‘lmadi. Server ishlayotganini tekshiring."
    );
  }
}

onMounted(() => {
  requestAnimationFrame(() => {
    heroLoaded.value = true;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>
