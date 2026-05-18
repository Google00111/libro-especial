<template>
  <div class="loading-screen">
    <!-- Aurora orbs -->
    <div class="aurora-orb aurora-gold" style="width:400px;height:400px;top:-100px;left:-100px;"></div>
    <div class="aurora-orb aurora-pink" style="width:300px;height:300px;bottom:-50px;right:-50px;"></div>
    <div class="aurora-orb aurora-purple" style="width:350px;height:350px;top:50%;left:50%;transform:translate(-50%,-50%);"></div>

    <!-- Book animation -->
    <div class="loading-book-wrapper">
      <svg class="loading-book" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Book cover -->
        <rect x="5" y="5" width="70" height="50" rx="4" fill="url(#bookGrad)" />
        <rect x="5" y="5" width="70" height="50" rx="4" stroke="rgba(245,200,66,0.6)" stroke-width="1"/>
        <!-- Book spine -->
        <rect x="35" y="5" width="10" height="50" fill="url(#spineGrad)" />
        <!-- Star decorations -->
        <circle cx="20" cy="20" r="3" fill="rgba(245,200,66,0.8)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="20" r="3" fill="rgba(249,168,212,0.8)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="20" cy="40" r="2" fill="rgba(167,139,250,0.8)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="40" r="2" fill="rgba(245,200,66,0.8)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
        </circle>
        <!-- Glow effect -->
        <ellipse cx="40" cy="30" rx="25" ry="18" fill="url(#glowGrad)" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite"/>
        </ellipse>
        <defs>
          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E0933"/>
            <stop offset="100%" stop-color="#0F1B35"/>
          </linearGradient>
          <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(245,200,66,0.3)"/>
            <stop offset="50%" stop-color="rgba(245,200,66,0.6)"/>
            <stop offset="100%" stop-color="rgba(245,200,66,0.3)"/>
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#F5C842"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <!-- Sparkles around book -->
    <div class="sparkles-wrapper">
      <span v-for="i in 6" :key="i" class="sparkle-dot" :style="getSparkleStyle(i)">✦</span>
    </div>

    <!-- Loading text -->
    <div class="loading-content">
      <p class="loading-label">Abriendo el libro mágico</p>
      <div class="loading-dots">
        <span v-for="i in 3" :key="i" class="dot" :style="{ animationDelay: `${i * 0.2}s` }"></span>
      </div>
    </div>

    <!-- Bottom text -->
    <p class="loading-subtitle">✨ Un libro especial para alguien especial ✨</p>
  </div>
</template>

<script setup>
function getSparkleStyle(index) {
  const angles = [0, 60, 120, 180, 240, 300];
  const angle = angles[index - 1];
  const radius = 80;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return {
    position: 'absolute',
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: 'translate(-50%, -50%)',
    animationDelay: `${index * 0.3}s`,
  };
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: var(--gradient-magic);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  overflow: hidden;
}

.loading-book-wrapper {
  position: relative;
  z-index: 2;
}

.loading-book {
  width: 100px;
  height: 75px;
  animation: float-book 3s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(245,200,66,0.5));
}

.sparkles-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
}

.sparkle-dot {
  position: absolute;
  font-size: 1rem;
  color: var(--gold-soft);
  animation: sparkle-rotate 2s ease-in-out infinite;
  opacity: 0.7;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 2;
}

.loading-label {
  font-family: var(--font-title);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-soft);
  animation: pulse-fade 2s ease-in-out infinite;
}

.loading-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold-soft);
  animation: dot-bounce 1.2s ease-in-out infinite;
}

@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0.5); opacity: 0.3; }
  40% { transform: scale(1.2); opacity: 1; }
}

.loading-subtitle {
  font-family: var(--font-script);
  font-size: 1rem;
  color: rgba(249, 168, 212, 0.7);
  position: absolute;
  bottom: 3rem;
  animation: pulse-fade 3s ease-in-out infinite;
}
</style>
