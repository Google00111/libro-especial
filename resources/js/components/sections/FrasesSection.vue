<template>
  <section class="page-section frases-section" id="frases">
    <div class="aurora-orb aurora-gold" style="width:350px;height:350px;top:-80px;right:-80px;opacity:0.3;"></div>
    <div class="aurora-orb aurora-pink" style="width:300px;height:300px;bottom:-60px;left:-60px;opacity:0.3;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página III ✦</p>
        <h2 class="section-title reveal-up">Frases de Cuento</h2>
        <p class="section-sub reveal-up">Porque disney no es una etapa, frases que me encantan y siento que te representan ✨</p>
      </div>

      <div class="frases-grid">
        <div v-for="(frase, i) in frases" :key="i"
             class="frase-card disney-card book-card"
             :ref="el => cardRefs[i] = el"
             :style="{ '--accent': frase.color }">
          <div class="frase-icon">{{ frase.icon }}</div>
          <blockquote class="frase-text">"{{ frase.text }}"</blockquote>
          <cite class="frase-movie">— {{ frase.movie }}</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const cardRefs = ref([]);

const frases = [
  {
    text: 'El amor es un regalo que cada persona merece recibir.',
    movie: 'Cenicienta',
    icon: '👑',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'El amor verdadero te hace más tú mismo, no menos.',
    movie: 'La Bella y la Bestia',
    icon: '🌹',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'Algunos dicen que el destino es algo que simplemente sucede. Yo creo que lo construimos juntos.',
    movie: 'Valiente',
    icon: '🏹',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'El amor significa que siempre volverás. Siempre.',
    movie: 'Toy Story 4',
    icon: '🌟',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'Cuando te encuentras con alguien que te hace sentir magia, no lo dejes ir.',
    movie: 'Encanto',
    icon: '🦋',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'No se trata de cuánto tiempo estás junto a alguien, sino de lo que sientes cuando están juntos.',
    movie: 'Coco',
    icon: '🎵',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'Tú eres mi mayor aventura.',
    movie: 'Los Increíbles',
    icon: '🦸',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Algunas personas valen la pena derretirse.',
    movie: 'Frozen',
    icon: '⛄',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'El amor es poner las necesidades de otra persona antes que las tuyas.',
    movie: 'Frozen',
    icon: '❄️',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'Prefiero morir mañana que vivir cien años sin haberte conocido.',
    movie: 'Pocahontas',
    icon: '🍃',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: '¿Quieres quedarte conmigo para siempre?',
    movie: 'Lilo & Stitch',
    icon: '🌺',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'Cuando te miro, puedo sentirlo. Te miro y estoy en casa.',
    movie: 'Buscando a Nemo',
    icon: '🐠',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'Mi sueño no estaría completo sin ti en él.',
    movie: 'La Princesa y el Sapo',
    icon: '🌙',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Eres la mejor cosa que nunca supe que necesitaba.',
    movie: 'La Princesa y el Sapo',
    icon: '💫',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'Nuestro destino vive dentro de nosotros.',
    movie: 'Valiente',
    icon: '🏹',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'El amor encuentra la forma.',
    movie: 'La Princesa y el Sapo',
    icon: '💚',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Can you feel the love tonight? / ¿Puedes sentir el amor esta noche?',
    movie: 'El Rey León',
    icon: '🦁',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Tú iluminas mi vida como el sol ilumina el día.',
    movie: 'Enredados',
    icon: '☀️',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Por primera vez veo el mundo tal como debe ser... porque estoy contigo.',
    movie: 'Frozen',
    icon: '❄️',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'La gente hace locuras cuando está enamorada.',
    movie: 'Hércules',
    icon: '⚡',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'No importa dónde estés, siempre estarás en mi corazón.',
    movie: 'Tarzán',
    icon: '🌿',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'Eres mi nuevo sueño.',
    movie: 'Enredados',
    icon: '✨',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Y al final... el amor verdadero puede transformar cualquier cosa.',
    movie: 'La Bella y la Bestia',
    icon: '🌹',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'La flor que florece en la adversidad es la más rara y hermosa de todas.',
    movie: 'Mulán',
    icon: '🌸',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'Siempre serás mi persona favorita.',
    movie: 'Big Hero 6',
    icon: '🤍',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'Amar es aceptar incluso las partes que nadie más entiende.',
    movie: 'Inspirada en La Bella y la Bestia',
    icon: '🌹',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'No necesito un príncipe para salvarme... pero sí alguien con quien compartir el viaje.',
    movie: 'Inspirada en varias princesas Disney',
    icon: '👑',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Eres parte de mí, aunque estemos lejos.',
    movie: 'Coco',
    icon: '🎵',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'Recuérdame, aunque tenga que viajar lejos.',
    movie: 'Coco',
    icon: '🎶',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'A tu lado, cada día es magia.',
    movie: 'Inspirada en Encanto',
    icon: '🦋',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'Nunca había sentido esto por nadie.',
    movie: 'Aladdín',
    icon: '🪔',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Un mundo ideal... contigo.',
    movie: 'Aladdín',
    icon: '🪄',
    color: 'rgba(125, 211, 252, 0.15)'
  },
  {
    text: 'Si el mundo se pone en tu contra, yo voy contigo.',
    movie: 'Ralph el Demoledor',
    icon: '🎮',
    color: 'rgba(167, 139, 250, 0.15)'
  },
  {
    text: 'Te elegiría en cualquier vida.',
    movie: 'Inspirada en Disney/Pixar',
    icon: '💞',
    color: 'rgba(249, 168, 212, 0.15)'
  },
  {
    text: 'El hogar no es un lugar... eres tú.',
    movie: 'Inspirada en Up',
    icon: '🎈',
    color: 'rgba(245, 200, 66, 0.15)'
  },
  {
    text: 'Eres mi aventura favorita.',
    movie: 'Inspirada en Up',
    icon: '🏠',
    color: 'rgba(125, 211, 252, 0.15)'
  },
];

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return;
    gsap.from(el, {

      y: 40, opacity: 0, scale: 0.92,
      duration: 0.7,
      delay: (i % 2) * 0.15,
      ease: 'power2.out'
    });
  });
});
</script>

<style scoped>
.frases-section {
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

.frases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 480px) {
  .frases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .frases-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.frase-card {
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: default;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: var(--accent, rgba(139, 69, 19, 0.05));
}

.frase-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px rgba(245,200,66,0.2), 0 20px 50px rgba(0,0,0,0.4);
}

.frase-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
  animation: float-gentle 4s ease-in-out infinite;
}

.frase-card:nth-child(even) .frase-icon {
  animation-delay: -2s;
}

.frase-text {
  font-family: var(--font-story);
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--ink-light);
  font-style: italic;
  margin-bottom: 1rem;
}

.frase-movie {
  font-family: var(--font-title);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold-burn);
  opacity: 0.6;
  font-style: normal;
}
</style>
