<template>
  <main class="book-viewport">
    <div class="container-book">
      <!-- We add click-to-flip hints -->
      <div v-if="currentPage > 0" class="flip-hint flip-hint-prev" @click="pageFlipObj?.flipPrev()">
        <span>◄</span>
      </div>
      <div v-if="currentPage < 11" class="flip-hint flip-hint-next" @click="pageFlipObj?.flipNext()">
        <span>►</span>
      </div>

      <div id="flipbook" ref="bookRef">
        <!-- Tapa Frontal (0) -->
        <div class="page page-cover page-cover-top" data-density="hard">
          <div class="page-content cover-content">
            <IntroSection />
          </div>
        </div>

        <!-- Páginas (1-10) -->
        <div class="page"><div class="page-content"><CartaSection /></div></div>
        <div class="page"><div class="page-content"><HistoriaSection /></div></div>
        <div class="page"><div class="page-content"><FrasesSection /></div></div>
        <div class="page"><div class="page-content"><GaleriaSection /></div></div>
        <div class="page"><div class="page-content"><VideosSection /></div></div>
        <div class="page"><div class="page-content"><CancionesSection /></div></div>
        <div class="page"><div class="page-content"><TiempoSection /></div></div>
        <div class="page"><div class="page-content"><SuenosSection /></div></div>
        <div class="page"><div class="page-content"><MensajeFinalSection /></div></div>
        <div class="page"><div class="page-content"><RegaloSection /></div></div>

        <!-- Tapa Trasera (11) -->
        <div class="page page-cover page-cover-bottom" data-density="hard">
          <div class="page-content back-cover">
            <div class="end-ornament">✦ Fin del Libro ✦</div>
            <p class="end-text">Diego & Anto — Para siempre 💕</p>
            <p class="end-date">19 de noviembre de 2024 → ∞</p>
            <button class="btn-ghost" style="margin-top: 2rem;" @click="pageFlipObj?.flip(0)">Volver al inicio</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';
import { PageFlip } from 'page-flip';

import IntroSection from '../components/sections/IntroSection.vue';
import CartaSection from '../components/sections/CartaSection.vue';
import HistoriaSection from '../components/sections/HistoriaSection.vue';
import FrasesSection from '../components/sections/FrasesSection.vue';
import GaleriaSection from '../components/sections/GaleriaSection.vue';
import VideosSection from '../components/sections/VideosSection.vue';
import CancionesSection from '../components/sections/CancionesSection.vue';
import TiempoSection from '../components/sections/TiempoSection.vue';
import SuenosSection from '../components/sections/SuenosSection.vue';
import MensajeFinalSection from '../components/sections/MensajeFinalSection.vue';
import RegaloSection from '../components/sections/RegaloSection.vue';

const bookRef = ref(null);
const pageFlipObj = shallowRef(null);
const currentPage = ref(0);

onMounted(() => {
  if (bookRef.value) {
    pageFlipObj.value = new PageFlip(bookRef.value, {
      width: 450,
      height: 700,
      size: 'stretch',
      minWidth: 320,
      maxWidth: 500,
      minHeight: 480,
      maxHeight: 850,
      maxShadowOpacity: 0.5,
      showCover: true,
      mobileScrollSupport: true,
      usePortrait: true, // Una página a la vez en móviles
      flippingTime: 1200, // Transición más mágica
      useMouseEvents: false, // Deshabilita el click-para-voltear que interfiere con el scroll
      clickEventForward: true,
    });

    pageFlipObj.value.loadFromHTML(document.querySelectorAll('.page'));

    pageFlipObj.value.on('flip', (e) => {
      currentPage.value = e.data;
    });

    // Manual Swipe Detection para Móviles
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    const bookEl = bookRef.value;
    bookEl.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    bookEl.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const xDiff = touchEndX - touchStartX;
      const yDiff = touchEndY - touchStartY;
      
      // El movimiento horizontal debe ser al menos el doble que el vertical y mayor a 80px
      if (Math.abs(xDiff) > Math.abs(yDiff) * 2 && Math.abs(xDiff) > 80) {
        if (xDiff > 0) {
          pageFlipObj.value.flipPrev(); // Swipe a la derecha -> anterior
        } else {
          pageFlipObj.value.flipNext(); // Swipe a la izquierda -> siguiente
        }
      }
    }
  }
});

onUnmounted(() => {
  if (pageFlipObj.value) {
    pageFlipObj.value.destroy();
  }
});
</script>

<style scoped>
.book-viewport {
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 2;
  padding: 1rem;
  padding-top: 4rem; /* Para no chocar con el reproductor de música */
}

.container-book {
  width: 100%;
  max-width: 1000px;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Flechas para dar hint de que se puede girar la página */
.flip-hint {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(139, 69, 19, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-burn);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.flip-hint:hover {
  background: rgba(139, 69, 19, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.flip-hint-prev { left: -5px; }
.flip-hint-next { right: -5px; }

@media (min-width: 768px) {
  .flip-hint-prev { left: -50px; }
  .flip-hint-next { right: -50px; }
}

/* Páginas del libro - Estilo Antiguo/Cuento de Hadas con Bordes Irregulares */
.page {
  background-color: #e8dcc8; /* Papel vintage más cálido */
  background-image: 
    url('https://www.transparenttextures.com/patterns/parchment.png'),
    linear-gradient(135deg, rgba(255, 250, 240, 0.6) 0%, transparent 30%, rgba(139, 69, 19, 0.2) 100%),
    radial-gradient(ellipse at 20% 50%, rgba(200, 143, 0, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(200, 143, 0, 0.05) 0%, transparent 50%);
  background-size: auto, auto, auto, auto;
  border: none;
  /* Sombras interiores para bordes quemados más sutiles */
  box-shadow: 
    inset 0 0 25px rgba(60, 20, 0, 0.6), 
    inset 0 0 60px rgba(100, 40, 10, 0.4), 
    inset 0 0 120px rgba(139, 69, 19, 0.2),
    0 15px 40px rgba(0, 0, 0, 0.7),
    inset 2px 2px 5px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  border-radius: 2px 4px 4px 2px;
  color: var(--ink-dark);
  /* Bordes irregulares tipo cuento de hadas */
  clip-path: polygon(
    0 2%, 0.5% 1%, 1% 1.5%, 1.5% 0.8%, 2% 1.2%, 2.5% 0.5%, 3% 1%, 3.5% 0.3%, 4% 1.5%, 4.5% 0.8%,
    5% 1.2%, 95% 0.9%, 95.5% 1.5%, 96% 0.7%, 96.5% 1.3%, 97% 0.5%, 97.5% 1.4%, 98% 0.8%, 98.5% 1.2%, 99% 0.6%, 99.5% 1.3%, 100% 1%,
    100% 3%, 99.8% 4%, 99.7% 5%, 99.9% 6%, 99.6% 7%, 99.8% 8%, 99.7% 9%, 99.9% 10%,
    99.8% 95%, 99.7% 96%, 99.9% 97%, 99.6% 98%, 99.8% 99%, 99.7% 99.5%, 100% 99.8%,
    99% 99.4%, 98.5% 99.8%, 98% 99.2%, 97.5% 99.6%, 97% 99.5%, 96.5% 99.7%, 96% 99.3%, 95.5% 99.8%, 95% 99.1%,
    5% 99.5%, 4.5% 99.2%, 4% 99.7%, 3.5% 99.1%, 3% 99.5%, 2.5% 99.2%, 2% 99.8%, 1.5% 99%, 1% 99.6%, 0.5% 99.2%, 0% 99%,
    0% 10%, 0.2% 9%, 0.3% 8%, 0.1% 7%, 0.4% 6%, 0.2% 5%, 0.3% 4%, 0.1% 3%
  );
}

/* Efecto de marco quemado sucio */
.page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(60, 20, 0, 0.7) 100%);
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 10;
}

/* Forzar que cualquier texto rosado dentro de las páginas claras sea negro */
.page:not(.page-cover) {
  --pink-fairy: #000000;
}

.page.--left {
  border-radius: 4px 0 0 4px; /* Bordes en el lomo */
  border-right: none;
}

.page.--right {
  border-radius: 0 4px 4px 0;
  border-left: none;
}

/* Efecto de sombra interior cerca del lomo */
.page.--left::after {
  content: "";
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 40px;
  background: linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 100%);
  pointer-events: none;
}

.page.--right::after {
  content: "";
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 40px;
  background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 100%);
  pointer-events: none;
}

.page-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  /* Scrollbar estético */
}

.page-content::-webkit-scrollbar { width: 4px; }
.page-content::-webkit-scrollbar-track { background: transparent; }
.page-content::-webkit-scrollbar-thumb { background: rgba(245,200,66,0.3); border-radius: 2px; }

/* Tapa y contratapa (Hard covers) - Diseño Cuento de Hadas */
.page-cover {
  background: linear-gradient(135deg, #3d2817 0%, #5c3d2e 25%, #4a2c1a 50%, #5c3d2e 75%, #3d2817 100%);
  border: 3px solid rgba(200, 143, 0, 0.6);
  box-shadow: 
    inset 0 0 80px rgba(0,0,0,0.9), 
    inset 0 0 40px rgba(200, 143, 0, 0.2),
    inset -2px -2px 10px rgba(0,0,0,0.7),
    inset 2px 2px 10px rgba(255, 255, 255, 0.1),
    0 30px 60px rgba(0, 0, 0, 0.9);
  position: relative;
  overflow: hidden;
  /* Textura de cuero */
  background-image: 
    linear-gradient(135deg, #3d2817 0%, #5c3d2e 25%, #4a2c1a 50%, #5c3d2e 75%, #3d2817 100%),
    url('https://www.transparenttextures.com/patterns/leather.png');
}

.page-cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(200, 143, 0, 0.2) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(200, 143, 0, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}

.page-cover::after {
  content: '';
  position: absolute;
  inset: 20px;
  border: 2px solid rgba(200, 143, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 2;
}

.page-cover.--left {
  border-radius: 12px 2px 2px 12px;
  box-shadow: 
    inset 0 0 80px rgba(0,0,0,0.9), 
    inset 0 0 40px rgba(200, 143, 0, 0.2),
    inset -2px -2px 10px rgba(0,0,0,0.7),
    inset 2px 2px 10px rgba(255, 255, 255, 0.1),
    8px 0 30px rgba(0, 0, 0, 0.6),
    0 30px 60px rgba(0, 0, 0, 0.9);
}

.page-cover.--right {
  border-radius: 2px 12px 12px 2px;
  box-shadow: 
    inset 0 0 80px rgba(0,0,0,0.9), 
    inset 0 0 40px rgba(200, 143, 0, 0.2),
    inset -2px -2px 10px rgba(0,0,0,0.7),
    inset 2px 2px 10px rgba(255, 255, 255, 0.1),
    -8px 0 30px rgba(0, 0, 0, 0.6),
    0 30px 60px rgba(0, 0, 0, 0.9);
}

.cover-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2rem 1.5rem;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 3;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  overflow: visible;
}

.back-cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.end-ornament {
  font-family: var(--font-title);
  font-size: 0.9rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-burn);
  opacity: 0.7;
  margin-bottom: 1.5rem;
}

.end-text {
  font-family: var(--font-script);
  font-size: 2rem;
  color: var(--ink-dark);
  margin-bottom: 0.5rem;
}

.end-date {
  font-family: var(--font-title);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  color: var(--ink-light);
  text-transform: uppercase;
}
</style>
