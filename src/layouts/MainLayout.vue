<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered>
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
          flat
          rounded
          dense
          size="small"
          :icon="isDark ? 'light_mode' : 'dark_mode'"
          class="theme-toggle"
          @click="toggleDark"
          :aria-pressed="isDark"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="container" style="padding-bottom: 100px">
        <router-view />
      </div>
    </q-page-container>

    <q-footer bordered>
      <q-toolbar class="container">
        © {{ year }} Cornucopia Machines · Budapest, Hungary ·&nbsp;<a href="mailto:info@cornucopiamachines.eu">info@cornucopiamachines.eu</a>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

const year = new Date().getFullYear();
const $q = useQuasar();

const isDark = computed(() => $q.dark.isActive);

function toggleDark() {
  $q.dark.set(!isDark.value);
}
</script>

<style scoped>
header {
  background: var(--bg);
  color: var(--fg);
  border-bottom: 1px solid var(--border);
}

footer {
  background: var(--bg);
  color: var(--muted);
}

.q-page-container {
  padding-bottom: 40px;
}

.container {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
