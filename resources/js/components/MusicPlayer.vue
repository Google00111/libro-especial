<template>
  <div class="music-player" :class="{ 'playing': isPlaying }">
    <!-- Play/Pause Button -->
    <button class="music-btn" @click="togglePlay" :title="isPlaying ? 'Pausar música' : 'Reproducir música'">
      <span v-if="!isPlaying">♪</span>
      <span v-else>❚❚</span>
    </button>

    <!-- Song Info -->
    <div class="music-info" v-if="isPlaying">
      <span class="music-title">Her — JVKE</span>
      <div class="music-bars">
        <span class="music-bar" v-for="i in 4" :key="i" :style="{ height: getBarHeight(i) }"></span>
      </div>
    </div>

    <!-- Volume Control -->
    <input
      v-if="isPlaying"
      type="range"
      min="0"
      max="1"
      step="0.05"
      v-model="volume"
      @input="updateVolume"
      class="volume-slider"
      title="Volumen"
    />

    <!-- Hidden Audio Element -->
    <audio ref="audioRef" loop preload="none">
      <!-- JVKE - Her: Use your own hosted audio file -->
      <source src="/audio/JVKE - her (official lyric video).mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const audioRef = ref(null);
const isPlaying = ref(false);
const volume = ref(0.35);
const barHeights = ref([4, 8, 12, 6]);

let barInterval = null;

function togglePlay() {
  if (!audioRef.value) return;

  if (isPlaying.value) {
    audioRef.value.pause();
    isPlaying.value = false;
    clearInterval(barInterval);
  } else {
    audioRef.value.volume = volume.value;
    audioRef.value.play().catch(() => {
      // Autoplay blocked — user needs to interact first
      console.log('Autoplay prevented. User interaction required.');
    });
    isPlaying.value = true;
    animateBars();
  }
}

function updateVolume() {
  if (audioRef.value) {
    audioRef.value.volume = volume.value;
  }
}

function animateBars() {
  barInterval = setInterval(() => {
    barHeights.value = barHeights.value.map(() =>
      Math.floor(Math.random() * 12) + 3
    );
  }, 300);
}

function getBarHeight(index) {
  return `${barHeights.value[index - 1]}px`;
}

// Auto-play attempt after user interaction
function handleFirstInteraction() {
  if (!isPlaying.value && audioRef.value) {
    audioRef.value.volume = volume.value;
    audioRef.value.play().then(() => {
      isPlaying.value = true;
      animateBars();
    }).catch(() => {});
    document.removeEventListener('touchstart', handleFirstInteraction);
    document.removeEventListener('click', handleFirstInteraction);
  }
}

onMounted(() => {
  // Attempt auto-play on first user interaction (required for mobile)
  document.addEventListener('touchstart', handleFirstInteraction, { once: true });
  document.addEventListener('click', handleFirstInteraction, { once: true });
});

onUnmounted(() => {
  clearInterval(barInterval);
  document.removeEventListener('touchstart', handleFirstInteraction);
  document.removeEventListener('click', handleFirstInteraction);
});
</script>

<style scoped>
.music-player {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  background: rgba(8, 14, 31, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 200, 66, 0.3);
  border-radius: 50px;
  box-shadow: 0 0 20px rgba(245, 200, 66, 0.15);
  transition: all 0.3s ease;
}

.music-player.playing {
  box-shadow: 0 0 30px rgba(245, 200, 66, 0.25);
}

.music-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F5C842, #E8A020);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #080E1F;
  font-size: 0.9rem;
  font-weight: bold;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 0 15px rgba(245, 200, 66, 0.3);
}

.music-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(245, 200, 66, 0.6);
}

.music-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 110px;
}

.music-title {
  font-family: var(--font-title);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  color: var(--gold-soft);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-bars {
  display: flex;
  gap: 2px;
  align-items: flex-end;
  height: 14px;
}

.music-bar {
  width: 2px;
  background: var(--gold-soft);
  border-radius: 1px;
  transition: height 0.2s ease;
  min-height: 3px;
}

.volume-slider {
  width: 60px;
  height: 3px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(245, 200, 66, 0.2);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gold-soft);
  cursor: pointer;
  box-shadow: 0 0 8px rgba(245, 200, 66, 0.5);
}

/* Mobile: hide info and volume on small screens */
@media (max-width: 380px) {
  .music-info,
  .volume-slider {
    display: none;
  }
}
</style>
