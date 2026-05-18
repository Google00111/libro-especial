<template>
  <div id="libro-especial">
    <!-- Loading Screen -->
    <Transition name="loading-fade">
      <LoadingScreen v-if="isLoading" />
    </Transition>

    <!-- Music Player (Fixed) -->
    <MusicPlayer v-if="!isLoading" />

    <!-- Magic Particle Canvas -->
    <canvas id="magic-canvas" class="fixed inset-0 pointer-events-none z-0" style="z-index:1;"></canvas>

    <!-- Main Router View -->
    <RouterView v-if="!isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import LoadingScreen from './components/LoadingScreen.vue';
import MusicPlayer from './components/MusicPlayer.vue';

// ============================================================
// State
// ============================================================
const isLoading = ref(true);

// ============================================================
// Magic Particle Canvas
// ============================================================
function initMagicCanvas() {
  const canvas = document.getElementById('magic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 40 : 80;

  class MagicParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = -Math.random() * 0.5 - 0.2;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.color = this.getColor();
      this.twinkle = Math.random() * Math.PI * 2;
      this.twinkleSpeed = Math.random() * 0.05 + 0.02;
    }
    getColor() {
      const colors = [
        'rgba(245, 200, 66,',
        'rgba(249, 168, 212,',
        'rgba(167, 139, 250,',
        'rgba(255, 255, 255,',
        'rgba(125, 211, 252,',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.twinkle += this.twinkleSpeed;
      this.opacity = 0.3 + Math.sin(this.twinkle) * 0.3;
      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = `${this.color}${this.opacity})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `${this.color}0.8)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new MagicParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================================
// Lifecycle
// ============================================================
onMounted(async () => {
  // Simulate magical loading
  await new Promise(resolve => setTimeout(resolve, 7000));
  isLoading.value = false;

  // Init after loading
  await new Promise(resolve => setTimeout(resolve, 100));
  initMagicCanvas();
});
</script>

<style scoped>
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
