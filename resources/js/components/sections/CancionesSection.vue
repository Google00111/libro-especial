<template>
  <section class="page-section canciones-section" id="canciones">
    <div class="aurora-orb aurora-purple" style="width:350px;height:350px;top:-60px;right:-80px;opacity:0.3;"></div>
    <div class="aurora-orb aurora-pink" style="width:300px;height:300px;bottom:-60px;left:-60px;opacity:0.3;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página VI ✦</p>
        <h2 class="section-title reveal-up">Canciones Dedicadas</h2>
        <p class="section-sub reveal-up">La banda sonora de nuestra historia 🎵</p>
      </div>

      <div class="canciones-grid">
        <div v-for="(cancion, i) in canciones" :key="i"
             class="cancion-card book-card"
             :ref="el => cardRefs[i] = el">
          <!-- Card header -->
          <div class="cancion-header">
            <span class="cancion-number">0{{ i + 1 }}</span>
            <div class="cancion-info">
              <h3 class="cancion-title">{{ cancion.title }}</h3>
              <p class="cancion-artist">{{ cancion.artist }}</p>
            </div>
            <span class="cancion-note">{{ cancion.note }}</span>
          </div>

          <!-- Spotify embed -->
          <div class="spotify-wrapper" v-if="cancion.spotifyId">
            <iframe
              :src="`https://open.spotify.com/embed/track/${cancion.spotifyId}?utm_source=generator&theme=0`"
              width="100%"
              height="80"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              class="spotify-iframe"
            ></iframe>
          </div>

          <!-- Placeholder if no Spotify ID -->
          <div v-else class="spotify-placeholder">
            <span class="placeholder-icon">🎵</span>
            <p class="placeholder-text">Agrega el ID de Spotify en <code>CancionesSection.vue</code></p>
          </div>

          <!-- Dedication message -->
          <p class="cancion-dedication">{{ cancion.dedication }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const cardRefs = ref([]);

// Replace spotifyId with actual Spotify track IDs (from share URL)
// Example: https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC → ID = 4uLU6hMCjMI75M1A2tKUQC
const canciones = [
  {
    title: 'Her',
    artist: 'JVKE',
    note: '🌟',
    spotifyId: '2M9ro2krNb5GzqfGRgzgVR', // JVKE - Her
    dedication: 'La canción que me recuerda a ti cada vez que la escucho.',
  },
  {
    title: 'Enchanted',
    artist: 'Taylor Swift',
    note: '✨',
    spotifyId: '79cHDT4PNgJmkE5GtZi0sG', // Taylor Swift - Enchanted
    dedication: 'Porque conocerte fue exactamente así: mágico e inesperado.',
  },
  {
    title: 'A Whole New World',
    artist: 'Disney',
    note: '🌙',
    spotifyId: '2mMZ0CqLM2Y7Y0oe7dYnJN', // A Whole New World
    dedication: 'Contigo cada día es un mundo nuevo y maravilloso.',
  },
  {
    title: 'Can\'t Help Falling in Love',
    artist: 'Elvis Presley',
    note: '💕',
    spotifyId: '4xkOaSrkexMciUUogZKVTS', // Elvis - Can't Help Falling in Love
    dedication: 'No pude evitar enamorarme de ti. Ni quiero.',
  },
];

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.from(el, {

      y: 40, opacity: 0, duration: 0.8,
      delay: i * 0.12, ease: 'power2.out'
    });
  });
});
</script>

<style scoped>
.canciones-section {
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

.canciones-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .canciones-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.cancion-card {
  padding: 1.5rem;
  transition: all 0.4s ease;
}

.cancion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 25px rgba(167,139,250,0.2), 0 15px 40px rgba(0,0,0,0.4);
}

.cancion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cancion-number {
  font-family: var(--font-title);
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  flex-shrink: 0;
}

.cancion-info {
  flex: 1;
}

.cancion-title {
  font-family: var(--font-story);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-dark);
  margin-bottom: 0.2rem;
}

.cancion-artist {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--ink-light);
  letter-spacing: 0.05em;
}

.cancion-note {
  font-size: 1.2rem;
  flex-shrink: 0;
  animation: float-gentle 3s ease-in-out infinite;
}

.spotify-wrapper {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.spotify-iframe {
  display: block;
  border-radius: 12px;
}

.spotify-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(167,139,250,0.05);
  border-radius: 12px;
  border: 1px dashed rgba(167,139,250,0.2);
  margin-bottom: 1rem;
}

.placeholder-icon { font-size: 1.5rem; }

.placeholder-text {
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--ink-light);
  text-align: center;
}

.placeholder-text code {
  background: rgba(167,139,250,0.15);
  color: var(--purple-dream);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}

.cancion-dedication {
  font-family: var(--font-story);
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(249,168,212,0.7);
  font-style: italic;
  border-top: 1px solid rgba(245,200,66,0.1);
  padding-top: 0.75rem;
}
</style>
