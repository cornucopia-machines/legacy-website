<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered class="site-header">
      <q-toolbar class="container">
        <q-btn flat no-caps href="#" class="brand row items-center no-wrap">
          <q-avatar square size="28px" class="q-mr-sm">
            <img
              src="/images/cornucopia-logo-no-text.png"
              alt="Cornucopia Machines logo"
            />
          </q-avatar>
          <q-toolbar-title shrink class="q-pa-none">
            <span class="brand-text">Cornucopia<span>Machines</span></span>
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn
          outline
          rounded
          dense
          :icon="isDark ? 'light_mode' : 'dark_mode'"
          :label="isDark ? 'Light' : 'Dark'"
          class="theme-toggle"
          @click="toggleDark"
          :aria-pressed="isDark"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="container">
        <front-page />

        <div class="site-footer">
          © {{ year }} CornucopiaMachines · Budapest, Hungary ·
          <a href="mailto:info@cornucopiamachines.eu">info@cornucopiamachines.eu</a>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import FrontPage from "./FrontPage.vue";

const year = new Date().getFullYear();
const $q = useQuasar();
const isDark = ref($q.dark.isActive);

onMounted(() => {
  const pref = localStorage.getItem("theme");
  if (pref === "dark") $q.dark.set(true);
  else if (pref === "light") $q.dark.set(false);
  isDark.value = $q.dark.isActive;
});

function toggleDark() {
  $q.dark.set(!$q.dark.isActive);
  isDark.value = $q.dark.isActive;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<style scoped>
.app-header {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
</style>
