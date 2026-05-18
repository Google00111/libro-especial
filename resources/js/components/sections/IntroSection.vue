<template>
  <section class="page-section intro-section" id="intro">
    <!-- Aurora background orbs -->
    <div class="aurora-orb aurora-gold" style="width:500px;height:500px;top:-150px;left:-150px;opacity:0.6;"></div>
    <div class="aurora-orb aurora-pink" style="width:400px;height:400px;bottom:-100px;right:-100px;opacity:0.5;"></div>
    <div class="aurora-orb aurora-purple" style="width:600px;height:600px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.3;"></div>

    <!-- Stars background -->
    <div class="stars-bg" ref="starsBg"></div>

    <div class="container-magic text-center" style="position:relative;z-index:2;">
      <!-- Chapter label -->
      <p class="chapter-label reveal-up"></p>

      <!-- Special Title -->
      <h1 class="special-book-title reveal-up">✦ UN LIBRO ESPECIAL<br/>PARA ALGUIEN ESPECIAL ✦</h1>

      <!-- Floating Book -->
      <div class="book-hero-wrapper reveal-scale" ref="bookEl">
        <div class="book-glow-ring"></div>
        <div class="book-3d">
          <div class="book-cover">
            <div class="book-cover-inner">
              <div class="cover-decoration top-deco">✦ ✦ ✦</div>
              <div class="cover-title-area">
                <p class="cover-subtitle" style="margin-bottom:0.2rem">Escrito por un escritor famoso</p>
                <h2 class="cover-main">con mucho cariño y<br/>con mucho esfuerzo</h2>
              </div>
              <div class="cover-heart">💕</div>
              <div class="cover-decoration bottom-deco">✦ ✦ ✦</div>
            </div>
          </div>
          <div class="book-spine"></div>
          <div class="book-pages">
            <div v-for="i in 5" :key="i" class="book-page" :style="{ right: `${i * 2}px`, opacity: 1 - i * 0.15 }"></div>
          </div>
        </div>
      </div>

      <!-- Subtitle and From -->
      <div class="intro-text" ref="introText">
        <p class="main-subtitle reveal-up">Para mi princesa Disney</p>
        <p class="main-from reveal-up">Con todo el amor del mundo — Diego 💕</p>
      </div>

      <!-- Scroll CTA -->
      <div class="scroll-cta reveal-up">
        <p class="scroll-hint">Desliza la hoja para abrir el libro</p>
        <div class="scroll-arrow">
          <span>←</span>
        </div>
      </div>
    </div>

    <!-- Page Number -->
    <p class="page-number">— Un libro escrito por alguien que te ama mucho, leelo con mucho amor —</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const bookEl = ref(null);
const introText = ref(null);
const starsBg = ref(null);

function createStars() {
  if (!starsBg.value) return;
  const count = 80;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.className = 'star-particle';
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 2 + 1}px;
      height: ${Math.random() * 2 + 1}px;
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${Math.random() * 3 + 2}s;
    `;
    starsBg.value.appendChild(star);
  }
}

onMounted(() => {
  createStars();

  // Book entrance animation
  const tl = gsap.timeline({ delay: 0.3 });
  tl.from(bookEl.value, {
    y: 60, opacity: 0, rotateX: 20, duration: 1.4,
    ease: 'power3.out'
  });

  // Text reveals
  gsap.utils.toArray('.reveal-up').forEach((el, i) => {
    gsap.from(el, {
      y: 30, opacity: 0, duration: 0.8,
      delay: 0.5 + i * 0.15,
      ease: 'power2.out'
    });
  });

  // Continuous floating book
  gsap.to(bookEl.value, {
    y: -18, duration: 3, ease: 'sine.inOut',
    repeat: -1, yoyo: true
  });

  // Scroll CTA pulse
  gsap.to('.scroll-arrow span', {
    y: 8, duration: 1.2, ease: 'sine.inOut',
    repeat: -1, yoyo: true
  });
});
</script>

<style scoped>
.intro-section {
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  max-height: 100%;
  overflow: visible;
  position: relative;
}

.stars-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.chapter-label {
  font-family: var(--font-title);
  font-size: 1.3rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-burn);
  margin-top: 3.5rem;
  margin-bottom: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  opacity: 1;
  font-weight: 700;
}

/* ── Special Book Title ── */
.special-book-title {
  font-family: var(--font-title);
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-burn);
  margin-top: 0;
  margin-bottom: 0.85rem;
  text-shadow: 0 0 22px rgba(194, 143, 0, 0.65), 0 0 45px rgba(194, 143, 0, 0.25);
  font-weight: 800;
  line-height: 1.05;
  z-index: 4;
  width: 100%;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.65rem;
  text-align: center;
}

/* ── Book 3D ── */
.book-hero-wrapper {
  position: relative;
  display: inline-block;
  margin: 0.5rem auto;
  max-width: 220px;
  width: 100%;
}

.book-glow-ring {
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245,200,66,0.15) 0%, transparent 70%);
  animation: glow-pulse 3s ease-in-out infinite;
}

.book-3d {
  position: relative;
  width: 180px;
  height: 240px;
  transform-style: preserve-3d;
  perspective: 800px;
  margin: 0 auto;
}

.book-cover {
  position: absolute;
  inset: 0;
  border-radius: 4px 16px 16px 4px;
  border: 1px solid rgba(245,200,66,0.4);
  background: var(--gradient-magic);
  box-shadow:
    0 0 30px rgba(245,200,66,0.2),
    0 25px 60px rgba(0,0,0,0.7),
    inset 0 0 40px rgba(245,200,66,0.05);
  overflow: hidden;
}

.book-cover::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(245,200,66,0.2);
  border-radius: 2px 12px 12px 2px;
  pointer-events: none;
}

.book-cover::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 12px; height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 100%);
}

.book-cover-inner {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  padding-left: 1.5rem;
}

.cover-decoration {
  font-size: 0.7rem;
  color: rgba(245,200,66,0.6);
  letter-spacing: 0.3em;
}

.cover-title-area {
  text-align: center;
}

.cover-subtitle {
  font-family: var(--font-script);
  font-size: 0.9rem;
  color: var(--gold-soft);
  opacity: 0.95;
  text-shadow: 0 0 8px rgba(245, 200, 66, 0.45);
}

.cover-main {
  font-family: var(--font-title);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white-warm);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  line-height: 1.2;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.12);
}

.cover-heart {
  font-size: 1.5rem;
  animation: float-gentle 2s ease-in-out infinite;
}

.book-spine {
  position: absolute;
  left: 0; top: 0;
  width: 14px; height: 100%;
  border-right: 1px solid rgba(245,200,66,0.3);
  background: linear-gradient(to right, #0F1B35 0%, #1A0A2E 100%);
}

.book-pages {
  position: absolute;
  right: -6px; top: 4px;
  width: 10px;
  height: calc(100% - 8px);
}

.book-page {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 3px 3px 0;
  background: #fdf6e3;
  border-right: 1px solid rgba(139, 69, 19, 0.2);
}

/* ── Title ── */
.intro-text { margin-bottom: 0.3rem; }

.main-subtitle {
  font-family: var(--font-story);
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  font-style: italic;
  color: var(--white-warm);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.18);
}

.main-from {
  font-family: var(--font-script);
  font-size: 0.85rem;
  color: var(--gold-soft);
  text-shadow: 0 0 10px rgba(245, 200, 66, 0.25);
}

/* ── Scroll CTA ── */
.scroll-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.3rem;
}

.scroll-hint {
  font-family: var(--font-title);
  font-size: 0.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,200,66,0.5);
}

.scroll-arrow {
  width: 35px;
  height: 35px;
  border: 1px solid rgba(245,200,66,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-burn);
  font-size: 0.9rem;
}

.page-number {
  position: absolute;
  left: 50%;
  bottom: 8rem;
  transform: translateX(-50%);
  margin-top: 0;
  color: var(--gold-burn);
  opacity: 0.7;
}
</style>
