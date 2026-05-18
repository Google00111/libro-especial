<template>
  <section class="page-section tiempo-section" id="tiempo">
    <div class="aurora-orb aurora-gold" style="width:500px;height:500px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.2;"></div>

    <div class="container-magic text-center">
      <p class="chapter-label">✦ Página VII ✦</p>
      <h2 class="section-title reveal-up">Tiempo Juntos</h2>
      <p class="section-sub reveal-up">Cada segundo contigo es eterno y deseo que este contador nunca deje de contar♾️</p>

      <!-- Start date display -->
      <div class="start-date reveal-up">
        <span class="start-icon">💕</span>
        <p class="start-text">Desde el <strong>19 de noviembre de 2024</strong></p>
      </div>

      <!-- Countdown display -->
      <div class="countdown-wrapper" ref="countdownRef">
        <div class="countdown-grid">
          <div class="countdown-unit" v-for="unit in timeUnits" :key="unit.label">
            <span class="countdown-number">{{ unit.value }}</span>
            <span class="countdown-label">{{ unit.label }}</span>
          </div>
        </div>
      </div>

      <!-- Romantic message -->
      <div class="tiempo-message book-card reveal-up">
        <p class="message-text">
          "{{ currentMessage }}"
        </p>
        <p class="message-sub">— Y siguen contando ✨</p>
      </div>

      <!-- Beating heart -->
      <div class="heart-beat-wrapper reveal-up">
        <div class="heart-beat">💗</div>
        <p class="heart-label">Latiendo por ti</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';


const countdownRef = ref(null);

// Start date: November 19, 2024
const startDate = new Date('2024-11-19T00:00:00');

const timeUnits = ref([
  { label: 'Días', value: '000' },
  { label: 'Horas', value: '00' },
  { label: 'Minutos', value: '00' },
  { label: 'Segundos', value: '00' },
]);

const messages = [
  'Cada día que pasa me enamoré más de ti.',
  'El tiempo a tu lado vuela y se detiene al mismo tiempo.',
  'Cada minuto contigo vale una eternidad.',
  'En estos días aprendí lo que significa el amor verdadero.',
];

const currentMessage = ref(messages[0]);
let messageInterval = null;
let timerInterval = null;

function updateTimer() {
  const now = new Date();
  const diff = Math.max(0, now - startDate);

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  timeUnits.value = [
    { label: 'Días', value: String(days).padStart(3, '0') },
    { label: 'Horas', value: String(hours).padStart(2, '0') },
    { label: 'Minutos', value: String(minutes).padStart(2, '0') },
    { label: 'Segundos', value: String(seconds).padStart(2, '0') },
  ];
}

onMounted(() => {
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);

  // Rotate messages
  let idx = 0;
  messageInterval = setInterval(() => {
    idx = (idx + 1) % messages.length;
    currentMessage.value = messages[idx];
  }, 5000);

  // GSAP reveal
  gsap.from(countdownRef.value, {

    y: 50, opacity: 0, scale: 0.9,
    duration: 1.2, ease: 'power3.out'
  });
});

onUnmounted(() => {
  clearInterval(timerInterval);
  clearInterval(messageInterval);
});
</script>

<style scoped>
.tiempo-section {
    padding: 5rem 1.5rem;
}

.chapter-label {
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-burn);
  margin-bottom: 1rem;
  opacity: 0.8;
}

.section-title {
  font-family: var(--font-title);
  font-size: clamp(1.8rem, 6vw, 2.8rem);
  font-weight: 700;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.section-sub {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--pink-fairy);
  opacity: 0.8;
  margin-bottom: 2rem;
}

.text-center { text-align: center; }

.start-date {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(245,200,66,0.08);
  border: 1px solid rgba(245,200,66,0.2);
  border-radius: 50px;
  margin-bottom: 3rem;
}

.start-icon { font-size: 1rem; }

.start-text {
  font-family: var(--font-story);
  font-size: 0.9rem;
  color: var(--ink-light);
  font-style: italic;
}

.start-text strong {
  color: var(--gold-burn);
  font-style: normal;
}

/* ── Countdown ── */
.countdown-wrapper { margin-bottom: 3rem; }

.countdown-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1.25rem;
  background: #ffffff;
  border: 1px solid rgba(245,200,66,0.35);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  min-width: 80px;
  position: relative;
  overflow: hidden;
}

.countdown-unit::before {
  content: '';
  position: absolute;
  inset: 0;
    pointer-events: none;
}

.countdown-number {
  font-family: var(--font-title);
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 700;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  animation: countdown-glow 2s ease-in-out infinite;
}

.countdown-label {
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,200,66,0.5);
}

/* ── Message ── */
.tiempo-message {
  padding: 2rem 1.5rem;
  margin-bottom: 2.5rem;
  background: rgba(249,168,212,0.04);
}

.message-text {
  font-family: var(--font-story);
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--ink-light);
  font-style: italic;
  margin-bottom: 0.75rem;
  transition: opacity 0.5s ease;
}

.message-sub {
  font-family: var(--font-script);
  font-size: 0.9rem;
  color: rgba(245,200,66,0.6);
}

/* ── Heart ── */
.heart-beat-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.heart-beat {
  font-size: 3rem;
  animation: heartbeat 1.2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.2); }
}

.heart-label {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--pink-fairy);
  opacity: 0.7;
}
</style>
