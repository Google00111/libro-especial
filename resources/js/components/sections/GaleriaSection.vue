<template>
  <section class="page-section galeria-section" id="galeria">
    <div class="aurora-orb aurora-pink" style="width:400px;height:400px;top:10%;left:-100px;opacity:0.25;"></div>
    <div class="aurora-orb aurora-gold" style="width:300px;height:300px;bottom:10%;right:-80px;opacity:0.25;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página IV ✦</p>
        <h2 class="section-title reveal-up">Nuestra Galería</h2>
        <p class="section-sub reveal-up">Momentos que guardaré y atesorare para siempre 📸</p>
      </div>

      <!-- Photo Grid -->
      <div class="gallery-grid">
        <div v-for="(photo, i) in photos" :key="i"
             class="polaroid-wrapper"
             :ref="el => photoRefs[i] = el"
             :style="{ '--rotate': photo.rotate }">
          <div class="gallery-polaroid" @mousemove="handleTilt($event, i)" @mouseleave="resetTilt(i)" :ref="el => polaroidRefs[i] = el">
            <!-- Photo placeholder / real image -->
            <div class="photo-frame">
              <img
                v-if="photo.src"
                :src="photo.src"
                :alt="`Foto ${i + 1}`"
                class="photo-img"
                loading="lazy"
              />
              <div v-else class="photo-placeholder">
                <span class="placeholder-icon">{{ photo.icon }}</span>
                <span class="placeholder-label">Foto {{ i + 1 }}</span>
              </div>
            </div>
            <!-- Caption -->
            <p class="polaroid-caption">{{ photo.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const photoRefs = ref([]);
const polaroidRefs = ref([]);

const photos = [
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (1).jpeg', caption: 'Un recuerdo de los dos', icon: '💫', rotate: '-3deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (10).jpeg', caption: 'Momentos que brillan', icon: '✨', rotate: '2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (11).jpeg', caption: 'Nuestra magia favorita', icon: '🌟', rotate: '-1.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (12).jpeg', caption: 'Un pedacito de felicidad', icon: '💕', rotate: '3deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (13).jpeg', caption: 'Días para guardar', icon: '📸', rotate: '-2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (14).jpeg', caption: 'Siempre tú y yo', icon: '💖', rotate: '1.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (2).jpeg', caption: 'Risas que se quedan', icon: '😊', rotate: '-3.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (3).jpeg', caption: 'Mi lugar bonito', icon: '🌹', rotate: '2.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (4).jpeg', caption: 'Aventuras contigo', icon: '🌙', rotate: '-1deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (5).jpeg', caption: 'Un instante eterno', icon: '♾️', rotate: '3.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (6).jpeg', caption: 'Nuestra historia', icon: '📖', rotate: '-2.5deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (7).jpeg', caption: 'Amor en una foto', icon: '💌', rotate: '1deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (8).jpeg', caption: 'Recuerdos dorados', icon: '✨', rotate: '-1.8deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM (9).jpeg', caption: 'Mi sonrisa favorita', icon: '🌷', rotate: '2.8deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.24 PM.jpeg', caption: 'Un día especial', icon: '🎆', rotate: '-3.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (1).jpeg', caption: 'Juntos es mejor', icon: '💫', rotate: '2.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (10).jpeg', caption: 'Pequeña gran felicidad', icon: '💕', rotate: '-2.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (11).jpeg', caption: 'Lo bonito de nosotros', icon: '🌟', rotate: '1.8deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (12).jpeg', caption: 'Para volver a mirar', icon: '📸', rotate: '-1.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (13).jpeg', caption: 'Memorias con amor', icon: '💖', rotate: '3.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (14).jpeg', caption: 'Nuestro mundo', icon: '🌎', rotate: '-2.8deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (15).jpeg', caption: 'Un capítulo feliz', icon: '📖', rotate: '1.2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (16).jpeg', caption: 'Donde nace la magia', icon: '✨', rotate: '-3deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (17).jpeg', caption: 'Siempre en mi corazón', icon: '💗', rotate: '2.6deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (18).jpeg', caption: 'Momentos nuestros', icon: '🌙', rotate: '-1.6deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (19).jpeg', caption: 'Un recuerdo hermoso', icon: '🌹', rotate: '3deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (2).jpeg', caption: 'Miradas que hablan', icon: '💫', rotate: '-2.4deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (3).jpeg', caption: 'Nuestro rincón feliz', icon: '🏡', rotate: '1.4deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (4).jpeg', caption: 'Días de amor', icon: '💕', rotate: '-3.4deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (5).jpeg', caption: 'La vida contigo', icon: '🌟', rotate: '2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (6).jpeg', caption: 'Un pedacito de nosotros', icon: '💌', rotate: '-1.4deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (7).jpeg', caption: 'Recuerdo favorito', icon: '📸', rotate: '3.4deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (8).jpeg', caption: 'Tú, yo y la magia', icon: '✨', rotate: '-2deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM (9).jpeg', caption: 'Lo que vale guardar', icon: '💖', rotate: '1.6deg' },
  { src: '/images/gallery/WhatsApp Image 2026-05-18 at 3.18.25 PM.jpeg', caption: 'Para siempre en fotos', icon: '♾️', rotate: '-2.6deg' },
];

function handleTilt(e, index) {
  const el = polaroidRefs.value[index];
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  gsap.to(el, {
    rotateY: x * 15, rotateX: -y * 15,
    duration: 0.4, ease: 'power2.out',
    transformPerspective: 800,
  });
}

function resetTilt(index) {
  const el = polaroidRefs.value[index];
  if (!el) return;
  gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
}

onMounted(() => {
  photoRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.from(el, {

      y: 50, opacity: 0, scale: 0.8,
      duration: 0.8,
      delay: (i % 3) * 0.12,
      ease: 'back.out(1.2)'
    });
  });
});
</script>

<style scoped>
.galeria-section {
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

/* ── Upload Hint ── */
.upload-hint {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
  background: rgba(245,200,66,0.05);
}

.hint-icon { font-size: 1.5rem; flex-shrink: 0; }

.hint-text {
  font-family: var(--font-body);
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--ink-light);
}

.hint-text code {
  background: rgba(245,200,66,0.15);
  color: var(--gold-burn);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* ── Gallery Grid ── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.polaroid-wrapper {
  transform: rotate(var(--rotate, 0deg));
  transition: transform 0.3s ease;
}

.polaroid-wrapper:hover {
  transform: rotate(0deg) scale(1.05) translateY(-8px);
  z-index: 10;
}

.gallery-polaroid {
  background: #FFFEF8;
  padding: 0.6rem 0.6rem 2.2rem;
  border-radius: 3px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
  transform-style: preserve-3d;
}

.gallery-polaroid:hover {
  box-shadow: 0 20px 50px rgba(245,200,66,0.2), 0 10px 30px rgba(0,0,0,0.5);
}

.photo-frame {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f0e8e0;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  }

.placeholder-icon {
  font-size: 2rem;
  animation: float-gentle 3s ease-in-out infinite;
}

.placeholder-label {
  font-family: var(--font-title);
  font-size: 0.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245,200,66,0.5);
}

.polaroid-caption {
  font-family: 'Dancing Script', cursive;
  font-size: 0.7rem;
  color: #555;
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.3;
}
</style>
