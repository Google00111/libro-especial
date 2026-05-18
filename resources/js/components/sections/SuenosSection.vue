<template>
  <section class="page-section suenos-section" id="suenos">
    <div class="aurora-orb aurora-gold" style="width:400px;height:400px;top:-60px;left:-60px;opacity:0.25;"></div>
    <div class="aurora-orb aurora-purple" style="width:350px;height:350px;bottom:-60px;right:-60px;opacity:0.25;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página VIII ✦</p>
        <h2 class="section-title reveal-up">Sueños y Metas</h2>
        <p class="section-sub reveal-up">Una lista de Todo lo que quiero vivir contigo 🌙</p>
        <p class="section-sub section-sub-spaced reveal-up">El futuro no existe todavía, pero contigo ya lo puedo ver claramente. — Diego 💕</p>
      </div>


      <div class="suenos-grid">
        <div v-for="(sueno, i) in suenos" :key="i"
             class="sueno-card book-card"
             :ref="el => cardRefs[i] = el"
             :style="{ '--card-color': sueno.color }">
          <div class="sueno-icon-wrapper">
            <div class="sueno-icon-bg"></div>
            <span class="sueno-icon">{{ sueno.icon }}</span>
          </div>
          <h3 class="sueno-title">{{ sueno.title }}</h3>
          <p class="sueno-desc">{{ sueno.desc }}</p>
          <div class="sueno-stars">
            <span v-for="j in 3" :key="j" class="star-small" :style="{ animationDelay: `${j * 0.3}s` }">✦</span>
          </div>
        </div>
      </div>

      <!-- Closing note -->
      <div class="suenos-note reveal-up">
        <p class="note-text">"El futuro no existe todavía, pero contigo ya lo puedo ver claramente."</p>
        <p class="note-from">— Diego 💕</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const cardRefs = ref([]);

let suenos;
suenos = [
    {
        icon: '✈️',
        title: 'Viajar juntos',
        desc: 'Quiero ver el mundo contigo de la mano. Cada ciudad, cada atardecer, cada aventura nueva.',
        color: '#e3f5ff'
    },
    {
        icon: '🏠',
        title: 'Nuestro hogar',
        desc: 'Construir un lugar donde cada rincón tenga una historia nuestra, lleno de amor y risas.',
        color: '#fff1bd'
    },
    {
        icon: '🌅',
        title: 'Ver amaneceres',
        desc: 'Despertar contigo y ver cómo el sol pinta el cielo de todos los colores que me gustan.',
        color: '#ffe4f1'
    },
    {
        icon: '🎬',
        title: 'Noches de cine',
        desc: 'Maratonear películas  juntos, tapaditos, comiendo cabritas.',
        color: '#eee8ff'
    },
    {
        icon: '🌊',
        title: 'Ir al mar',
        desc: 'Sentarnos en la orilla a ver las olas y recordar cuánto hemos crecido juntos.',
        color: '#e3f5ff'
    },
    {
        icon: '⭐',
        title: 'Crecer juntos',
        desc: 'Ser la mejor versión de mí mismo a tu lado, apoyándonos en cada meta y cada sueño.',
        color: '#fff1bd'
    },
    {
        icon: '💍',
        title: 'Casarnos',
        desc: 'Llegar al día en que podamos prometernos una vida juntos, celebrar nuestro amor y comenzar una nueva etapa de la mano.',
        color: '#ffe4f1'
    },
    {
        icon: '👨‍👩‍👦',
        title: 'Formar una familia',
        desc: 'Construir una familia, llena de amor, ternura, risas y momentos que nos hagan sentir en casa.',
        color: '#eee8ff'
    },
];

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.from(el, {

      y: 40, opacity: 0, scale: 0.9,
      duration: 0.75,
      delay: (i % 3) * 0.12,
      ease: 'back.out(1.1)'
    });
  });
});
</script>

<style scoped>
.suenos-section {
    padding: 5rem 1.5rem;
}

.chapter-label {
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-burn);
  margin-bottom: 0;
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
  margin-bottom: 0.05rem;
}

.section-sub {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--pink-fairy);
  opacity: 0.8;
}

.section-sub-spaced {
  margin-top: 1rem;
}

.text-center { text-align: center; }
.mb-12 { margin-bottom: 3rem; }

.suenos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

@media (min-width: 480px) {
  .suenos-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 768px) {
  .suenos-grid { grid-template-columns: repeat(3, 1fr); }
}

.sueno-card {
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease;
  background: var(--card-color, #fff1bd) !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border: 1px solid rgba(139, 69, 19, 0.35);
  box-shadow: 0 12px 30px rgba(90, 40, 10, 0.24);
  cursor: default;
}

.sueno-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px rgba(245,200,66,0.15), 0 20px 50px rgba(0,0,0,0.4);
}

.sueno-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.25rem;
}

.sueno-icon-bg {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245,200,66,0.1), transparent);
  animation: glow-pulse 3s ease-in-out infinite;
}

.sueno-icon {
  font-size: 2.5rem;
  display: block;
  animation: float-gentle 3s ease-in-out infinite;
}

.sueno-card:nth-child(even) .sueno-icon {
  animation-delay: -1.5s;
}

.sueno-title {
  font-family: var(--font-story);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink-dark);
  margin-bottom: 0.75rem;
}

.sueno-desc {
  font-family: var(--font-story);
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--ink-light);
  font-style: italic;
  margin-bottom: 1rem;
}

.sueno-stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.star-small {
  font-size: 0.6rem;
  color: var(--gold-burn);
  opacity: 0.5;
  animation: twinkle 2s ease-in-out infinite;
}

/* ── Note ── */
.suenos-note {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid rgba(245,200,66,0.1);
}

.note-text {
  font-family: var(--font-story);
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--ink-light);
  font-style: italic;
  margin-bottom: 0.75rem;
}

.note-from {
  font-family: var(--font-script);
  font-size: 1.1rem;
  color: var(--pink-fairy);
  opacity: 0.8;
}
</style>
