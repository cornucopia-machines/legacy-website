<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#">
          <img
            class="logo"
            src="/images/cornucopia-logo-no-text.png"
            alt="Cornucopia Machines logo"
            width="28"
            height="28"
          />
          <span class="brand-text">Cornucopia<span>Machines</span></span>
        </a>
        <button class="theme-toggle" @click="toggleDark" :aria-pressed="isDark">
          <span class="icon" aria-hidden="true">{{ isDark ? "☀️" : "🌙" }}</span>
          <span class="label">{{ isDark ? "Light" : "Dark" }}</span>
        </button>
      </div>
    </q-header>

    <q-page-container>
      <q-page class="container">
        <front-page />

        <div class="footer">
          © {{ year }} CornucopiaMachines · Budapest, Hungary ·
          <a href="mailto:info@cornucopiamachines.eu">info@cornucopiamachines.eu</a>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FrontPage from "./FrontPage.vue";

const year = new Date().getFullYear();
const isDark = ref(false);

onMounted(() => {
  const root = document.documentElement;
  const pref = localStorage.getItem("theme");
  if (pref === "dark") root.classList.add("force-dark");
  else root.classList.remove("force-dark");
  isDark.value = root.classList.contains("force-dark");
});

function toggleDark() {
  const root = document.documentElement;
  root.classList.toggle("force-dark");
  isDark.value = root.classList.contains("force-dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<style scoped>
.app-header {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
</style>
