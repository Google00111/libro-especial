<template>
  <section class="page-section mensaje-section" id="mensaje">
    <div class="aurora-orb aurora-gold" style="width:500px;height:500px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.2;"></div>
    <div class="aurora-orb aurora-pink" style="width:300px;height:300px;top:10%;right:-60px;opacity:0.3;"></div>

    <div class="container-magic text-center">
      <p class="chapter-label">✦ Página IX ✦</p>
      <h2 class="section-title">Mensaje Final</h2>

      <!-- Main message card -->
      <div class="mensaje-card book-card" ref="cardRef">
        <div class="mensaje-crown">👑</div>
        <div class="mensaje-deco-top">
          <span class="deco-line-full"></span>
        </div>

        <h3 class="mensaje-main-title">Un último mensaje para ti</h3>

        <div class="mensaje-body">
          <p class="mensaje-para">
            Este no es el mejor libro del mundo, ni el mejor escrito ni mucho menos pero si es un libro que encierra todo mi amor por ti y ojala hacertelo llegar de esta bonita manera que creo que encajaba conmigo
          </p>
          <p class="mensaje-para">
            ojala hayas disfrutado leyendo cada parte de este libro, me esforze bastante de por medio ocurrieron muchos errores y me faltaron miles de ideas por incluir pero por algo se empieza.
          </p>
          <p class="mensaje-para">
            Por ultimo solo agradecer, recordar y amar. y nuevamente felicidades por cerrar tan bella etapa que es sacar tu carrera universitaria.
          </p>
          <p class="mensaje-para highlight-para">
            Este no es el final de nuestro libro, es solo el comienzo... quedan muchas historias por contar y me encantaria seguir llenandolo de contenido contigo
          </p>
        </div>

        <div class="mensaje-deco-bottom">
          <span class="deco-line-full"></span>
        </div>

        <!-- Signature -->
        <div class="mensaje-firma">
          <p class="firma-text">Con todo el amor del universo,</p>
          <p class="firma-name">Diego 💕</p>
          <div class="firma-stars">
            <span v-for="i in 5" :key="i" class="firma-star" :style="{ animationDelay: `${i * 0.2}s` }">✦</span>
          </div>
        </div>
      </div>

      <!-- Scroll to gift -->
      <div style="margin-top:2rem;">
        <p class="gift-hint">Hay algo más esperándote... ↓</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const cardRef = ref(null);

onMounted(() => {
  if (!cardRef.value) return;

  gsap.set(cardRef.value, { opacity: 1, scale: 1, y: 0 });
  gsap.set('.mensaje-para', { opacity: 1, y: 0 });

  gsap.from(cardRef.value, {

    y: 60, opacity: 0, scale: 0.92,
    duration: 1.4, ease: 'power3.out'
  });

  // Paragraphs stagger
  gsap.from('.mensaje-para', {

    y: 20, opacity: 0, duration: 0.8,
    stagger: 0.2, ease: 'power2.out',
    delay: 0.4
  });
});
</script>

<style scoped>
.mensaje-section {
  padding: 3rem 1.5rem;
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
  margin-bottom: 2.5rem;
}

.text-center { text-align: center; }

.mensaje-card {
  padding: 2.5rem 2rem;
  text-align: left;
  position: relative;
  z-index: 2;
}

.mensaje-crown {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: float-gentle 3s ease-in-out infinite;
}

.deco-line-full {
  display: block;
  height: 1px;
  }

.mensaje-deco-top { margin-bottom: 1.75rem; }
.mensaje-deco-bottom { margin-top: 1.75rem; }

.mensaje-main-title {
  font-family: var(--font-script);
  font-size: 2rem;
  color: var(--pink-fairy);
  text-align: center;
  margin-bottom: 2rem;
}

.mensaje-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mensaje-para {
  font-family: var(--font-story);
  font-size: 1rem;
  line-height: 1.9;
  color: var(--ink-light);
  text-align: justify;
  font-style: italic;
}

.mensaje-para em {
  color: var(--gold-burn);
  font-style: normal;
  font-weight: 600;
}

.highlight-para {
  color: var(--ink-dark);
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-left: 3px solid var(--gold-burn);
  border-radius: 0 8px 8px 0;
  font-style: normal;
  font-weight: 600;
}

.mensaje-firma {
  text-align: center;
  padding-top: 0.5rem;
}

.firma-text {
  font-family: var(--font-story);
  font-size: 0.9rem;
  color: var(--ink-light);
  font-style: italic;
  margin-bottom: 0.5rem;
}

.firma-name {
  font-family: var(--font-script);
  font-size: 2rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.firma-stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.firma-star {
  font-size: 0.8rem;
  color: var(--gold-burn);
  opacity: 0.6;
  animation: twinkle 2s ease-in-out infinite;
}

.gift-hint {
  font-family: var(--font-script);
  font-size: 1.1rem;
  color: var(--pink-fairy);
  opacity: 0.7;
  animation: pulse-fade 2s ease-in-out infinite;
}
</style>
