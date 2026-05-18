<template>
  <section class="page-section videos-section" id="videos">
    <div class="aurora-orb aurora-purple" style="width:400px;height:400px;top:0;left:50%;transform:translateX(-50%);opacity:0.3;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página V ✦</p>
        <h2 class="section-title reveal-up">Nuestros Videos</h2>
        <p class="section-sub reveal-up">Momentos que no quiero olvidar 🎬</p>
      </div>

      <!-- Video cards grid -->
      <div class="videos-grid">
        <div v-for="(video, i) in videos" :key="i"
             class="video-card book-card reveal-up"
             :ref="el => cardRefs[i] = el">
          <div class="video-inner">
            <!-- Local MP4 video -->
            <div class="video-embed-wrapper">
              <video
                class="video-player"
                :src="video.src"
                :poster="video.poster"
                controls
                preload="metadata"
                playsinline
              ></video>
            </div>

            <div class="video-info">
              <h3 class="video-title">{{ video.title }}</h3>
              <p class="video-desc">{{ video.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const cardRefs = ref([]);

const videos = ref([
  {
    type: 'local',
    title: 'Video principal',
    desc: 'El video más especial de todos, guardado como el recuerdo principal de esta página.',
    icon: '👑',
    placeholder: 'Video principal',
    src: '/videos/gallery/video-4.mp4',
    poster: '',
    loaded: false,
    id: ''
  },
  {
    type: 'local',
    title: 'Momentos especiales',
    desc: 'Cada segundo contigo es un tesoro que guardo con cuidado.',
    icon: '💕',
    placeholder: 'Video especial #2',
    src: '/videos/gallery/video-2.mp4',
    poster: '',
    loaded: false,
    id: ''
  },
  {
    type: 'local',
    title: 'Nuestra aventura',
    desc: 'Contigo cada día se convierte en una aventura mágica.',
    icon: '🌟',
    placeholder: 'Video especial #3',
    src: '/videos/gallery/video-3.mp4',
    poster: '',
    loaded: false,
    id: ''
  },
]);

function loadVideo(index) {
  videos.value[index].loaded = true;
}

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.from(el, {

      y: 40, opacity: 0, duration: 0.8,
      delay: i * 0.15, ease: 'power2.out'
    });
  });
});
</script>

<style scoped>
.videos-section {
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
}

.mb-12 { margin-bottom: 3rem; }

.videos-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 640px) {
  .videos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .videos-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.video-card {
  overflow: hidden;
  transition: all 0.4s ease;
}

.video-card:first-child {
  border: 1px solid rgba(245, 200, 66, 0.45);
  box-shadow: 0 0 30px rgba(245,200,66,0.18), 0 18px 45px rgba(0,0,0,0.35);
}

@media (min-width: 640px) {
  .video-card:first-child {
    grid-column: 1 / -1;
  }
}

.video-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 30px rgba(167,139,250,0.25), 0 20px 50px rgba(0,0,0,0.5);
}

.video-embed-wrapper {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.video-iframe,
.video-player {
  width: 100%;
  height: 100%;
  border: none;
}

.video-player {
  display: block;
  background: #080e1f;
  object-fit: cover;
}

.video-play-btn {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.play-thumbnail {
  width: 100%;
  height: 100%;
  position: relative;
}

.play-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.4);
  transition: background 0.3s;
}

.play-overlay:hover {
  background: rgba(0,0,0,0.2);
}

.play-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(245,200,66,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #080E1F;
  box-shadow: 0 0 30px rgba(245,200,66,0.4);
}

.video-placeholder {
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
    border-bottom: 1px solid rgba(245,200,66,0.1);
}

.placeholder-icon { font-size: 2.5rem; }

.placeholder-text {
  font-family: var(--font-story);
  font-size: 0.9rem;
  color: var(--ink-light);
  font-style: italic;
}

.placeholder-hint {
  font-family: var(--font-body);
  font-size: 0.65rem;
  color: rgba(245,200,66,0.4);
  text-align: center;
  padding: 0 1rem;
}

.placeholder-hint code {
  background: rgba(245,200,66,0.1);
  color: var(--gold-burn);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

.video-info {
  padding: 1.25rem;
}

.video-title {
  font-family: var(--font-story);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-dark);
  margin-bottom: 0.4rem;
}

.video-desc {
  font-family: var(--font-story);
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--ink-light);
  font-style: italic;
}
</style>
