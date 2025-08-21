<template>
  <q-page class="container">
    <section class="hero">
      <div>
        <h1>Cornucopia GrowMachine</h1>
        <p class="subtitle">
          Your Raised Bed Just Got a Brain. / AI Meets Soil. You Get Tomatoes.
        </p>
        <div class="cta">
          <q-btn
            href="mailto:info@cornucopiamachines.eu"
            class="button"
            label="GET IN TOUCH"
          />
          <q-form class="subscribe" @submit.prevent="onSubmit">
            <q-input
              v-model="email"
              type="email"
              dense
              standout="bg"
              placeholder="Enter your email"
              aria-label="Email"
              :disable="submitting"
            />
            <q-btn
              type="submit"
              class="button secondary q-ml-sm"
              :loading="submitting"
              label="NOTIFY ME"
              data-umami-event="notify-me"
            />
            <div class="form-message" role="status" aria-live="polite">
              <span v-if="success">Thanks — we'll be in touch.</span>
              <span v-else-if="error">Something went wrong. Please try again.</span>
            </div>
          </q-form>
        </div>
      </div>
    </section>

    <q-card flat class="q-mt-lg">
      <q-card-section class="q-pt-md q-pb-sm">
        <img
          src="/images/grow-machine-in-the-field.jpg"
          alt="GrowMachine device in the field"
          class="image-float"
        />
        <h4 class="q-mt-none q-mb-xs">Our Vision</h4>
        <p class="q-mt-none">
          To create a platform for sustainable family and community food production,
          introducing a new consumer product category. The Instant Pot of food resilience
          &ndash; but with a loyal subscriber base and a strong product pipeline for
          lasting revenue.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">The Problem</h4>
        <p class="q-mt-none">
          Growing nutrient-dense food is labor-intensive, climate-sensitive, and
          knowledge-dependent — especially when managing multiple crops in raised beds.
          Most solutions are either too simple, too DIY, or too complex.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">Our Solution</h4>
        <p class="q-mt-none">
          The Cornucopia GrowMachine turns raised beds into smart, semi-autonomous food
          production units. It automates irrigation, fertigation, pest alerts, and crop
          scheduling using hyperlocal sensor data and a proprietary crop-intelligence
          engine.
        </p>
        <p>
          Our freemium software model serves hobby growers with a single bed and pro users
          managing multiple crop-dedicated beds.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">Key Features</h4>
        <ul>
          <li>
            Sensor-Based Irrigation &ndash; Adjusts to crop needs, mulch, and soil data
            &mdash; not timers.
          </li>
          <li>
            Environmental Alerts &ndash; Warns of conditions linked to crop stress or
            disease.
          </li>
          <li>
            Built-In Crop Intelligence &ndash; 50+ vegetables with root depth, fertility,
            and harvest logic.
          </li>
          <li>
            Automates Task &amp; Fertigation Scheduling from bed map, weather data, and
            live sensors.
          </li>
          <li>
            Plug-and-Play Hardware &ndash; Solar-powered, connected, purpose-built for
            food growing.
          </li>
          <li>
            Scalable Architecture &ndash; From single beds to orchards, livestock, and
            season extension.
          </li>
          <li>
            Beginner Support &ndash; Ready to use bed plans and guided growing content
          </li>
        </ul>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">Market Opportunity</h4>
        <ul>
          <li>100M+ home gardens in EU + US</li>
          <li>5M+ raised beds sold annually</li>
          <li>
            Climate volatility and the home food movement create a perfect market
            inflection point
          </li>
        </ul>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">Early Traction</h4>
        <ul>
          <li>2 pilot systems deployed in Hungary since 2021</li>
          <li>Lower decision fatigue, improved crop quality, up to 60% water savings</li>
          <li>Modular tech stack ready for expansion</li>
        </ul>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-md q-pb-sm">
        <h4 class="q-mt-none q-mb-xs">Who We’re Looking For</h4>
        <ul>
          <li>
            <strong>Co-founders</strong> with hardware production, growth, or ops
            experience
          </li>
          <li>
            <strong>Pre-seed investors</strong> to support hardware manufacturing,
            software rollout, and pilot
          </li>
          <li>
            <strong>Pilot partners</strong> (urban farms, schools, homesteaders) for Q1
            2026 deployment
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const submitting = ref(false);
const success = ref(false);
const error = ref(false);

async function onSubmit() {
  error.value = false;
  success.value = false;
  if (!email.value || !/.+@.+\..+/.test(email.value)) return;
  submitting.value = true;
  try {
    const endpoint =
      (window as any).SUBSCRIBE_ENDPOINT || "https://formspree.io/f/xwpqapdd";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email.value }),
    });
    if (res.ok) {
      success.value = true;
      (window as any).umami?.track?.("notify-me");
      email.value = "";
    } else error.value = true;
  } catch (e) {
    error.value = true;
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.form-message {
  margin-top: 6px;
  font-size: 0.9rem;
}

.image-float {
  float: right;
  width: min(40%, 320px);
  margin: 4px 0 8px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--card);
}

@media (max-width: 600px) {
  .image-float {
    float: none;
    display: block;
    width: 100%;
    margin: 8px 0 12px;
  }

  .hero::after {
    background-size: min(70vmin, 520px);
    opacity: 0.22;
  }
}
</style>
