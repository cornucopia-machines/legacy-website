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

    <q-card flat>
      <q-card-section>
        <h4>Our Vision</h4>
        <p>
          To create a platform for sustainable family and community food production,
          introducing a new consumer product category. The Instant Pot of food resilience
          &ndash; but with a loyal subscriber base and a strong product pipeline for
          lasting revenue.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <h4>The Problem</h4>
        <p>
          Growing nutrient-dense food is labor-intensive, climate-sensitive, and
          knowledge-dependent — especially when managing multiple crops in raised beds.
          Most solutions are either too simple, too DIY, or too complex.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <h4>Our Solution</h4>
        <img
          src="/images/grow-machine-in-the-field.jpg"
          alt="GrowMachine device in the field"
          class="image-float"
        />
        <p>
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
      <q-card-section>
        <h4>Key Features</h4>
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
      <q-card-section>
        <h4>Market Opportunity</h4>
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
      <q-card-section>
        <h4>Early Traction</h4>
        <ul>
          <li>2 pilot systems deployed in Hungary since 2021</li>
          <li>Lower decision fatigue, improved crop quality, up to 60% water savings</li>
          <li>Modular tech stack ready for expansion</li>
        </ul>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <h4>Who We Are</h4>
        <img
          src="/images/founders.jpg"
          alt="Cornucopia Machines founders"
          class="image-float"
        />
        <p>
          <strong>Melinda</strong> has been interested in growing her own food since
          childhood. She started her first farm fifteen years ago, focusing on organic
          farming practices and high quality produce. As her passion project grew she
          found herself supplying all five of Budapest's Michelin-star restaurants at the
          time with micro-greens and edible flowers. She published a
          <a href="https://www.animuscentral.hu/kertkaland-1">quite popular book</a> on
          getting started with farming in small spaces with detailed instructions on what
          to plant, when to plant it, and how to care for it. She also did workshops
          teaching people how to design their own gardens.
        </p>

        <p>
          <strong>Lóránt</strong> comes from a software developer background. He worked at
          various tech companies, and has experience in many aspects of software product
          development. He has a wide variety of skills as an engineer, but also some in
          product development and design. He worked on traditional web application
          front-ends and back-ends, and he developed a font-rendering engine at Prezi.
          More recently he focused on automation for software developers as a senior
          principal engineer at Gradle Inc., designing and shipping solutions to improve
          developer productivity at the largest organizations on the planet.
        </p>

        <p>
          Together we've been working on our family farm for the past ten years, combining
          our expertise in agriculture and technology to create innovative solutions for
          our own needs. This work led to the prototyping of our automated growing system
          that we hope to turn into the Cornucopia GrowMachine product.
        </p>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <h4>Who We Are Looking For</h4>
        <ul>
          <li>
            <strong>Experts</strong> with hardware production, growth, or ops experience
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
h4 {
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;
}

.form-message {
  margin-top: 6px;
  font-size: 0.9rem;
}
</style>
