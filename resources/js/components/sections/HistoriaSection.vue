<template>
  <section class="page-section historia-section" id="historia">
    <div class="aurora-orb aurora-purple" style="width:400px;height:400px;top:-100px;left:50%;transform:translateX(-50%);opacity:0.35;"></div>

    <div class="container-magic">
      <div class="text-center mb-12">
        <p class="chapter-label">✦ Página II ✦</p>
        <h2 class="section-title reveal-up">Nuestra Historia</h2>
        <p class="section-sub reveal-up">Esta es una pequeña sección donde menciono un pedacito de nuestra historia y las fechas mas lindas que recuerdo ✨</p>
      </div>

      <!-- Timeline -->
      <div class="timeline" ref="timelineRef">
        <div class="timeline-center-line"></div>

        <div v-for="(event, index) in events" :key="index"
             class="timeline-item"
             :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
             :ref="el => itemRefs[index] = el">
          <!-- Dot -->
          <div class="timeline-dot-wrapper">
            <div class="timeline-dot">
              <span class="dot-icon">{{ event.icon }}</span>
            </div>
            <div class="dot-glow"></div>
          </div>

          <!-- Card -->
          <div class="timeline-card book-card">
            <p class="event-date">{{ event.date }}</p>
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-desc">{{ event.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const timelineRef = ref(null);
const itemRefs = ref([]);

const events = [
  {
    date: 'El comienzo de todo',
    title: 'Nuestros días en el Pehuén',
    desc: 'Nuestros días en el Pehuén cuando éramos chiquitos y no nos imaginábamos lo lejos que llegaríamos y la vida tan linda que estamos construyendo.',
    icon: '🌱'
  },
  {
    date: '12 de mayo, 2024',
    title: 'La reunión del curso',
    desc: 'La reunión del curso donde ninguno de los dos sabía que íbamos a crear tan linda historia.',
    icon: '✨'
  },
  {
    date: '29 de septiembre, 2024',
    title: 'Parcela Peralillo',
    desc: 'Un finde que no imaginábamos que llegaría tan lejos jajaj.',
    icon: '🏡'
  },
  {
    date: '19 de noviembre, 2024',
    title: 'El primer día',
    desc: 'El universo decidió que ese era el día perfecto para que nuestros destinos se cruzaran. Nada volvió a ser igual.',
    icon: '💫'
  },
  {
    date: 'Noviembre, 2024',
    title: 'Los primeros mensajes',
    desc: 'Esas conversaciones que no querías que terminaran, esas horas que volaban sin que te dieras cuenta.',
    icon: '💬'
  },
  {
    date: '9 de diciembre, 2024',
    title: 'Mi presentación de tesis',
    desc: 'Día importante para mí porque, siendo que llevábamos tan poco, estuviste ahí para mí.',
    icon: '🎓'
  },
  {
    date: '1 de enero, 2025',
    title: 'El año nuevo juntos',
    desc: 'Comenzar el año contigo fue la señal de que este sería el año más bonito de nuestras vidas.',
    icon: '🎆'
  },
  {
    date: '23 de marzo, 2025',
    title: 'Conociste a mi hermano',
    desc: 'Día donde conociste por primera vez a mi hermano y te hice partícipe de mi familia.',
    icon: '🤍'
  },
  {
    date: '27 de marzo, 2025',
    title: 'Vacaciones en Pucón',
    desc: 'Las mejores vacaciones de mi vida. Nunca olvidaré todos los momentos que nos dejó Pucón.',
    icon: '🏔️'
  },
  {
    date: '7 de mayo, 2025',
    title: 'Nuestra querida camita',
    desc: 'Un día que marcó un antes y un después: fue el día que montamos nuestro primer mueble juntos, nuestra querida camita.',
    icon: '🛏️'
  },
  {
    date: '16 de junio, 2025',
    title: 'Karting',
    desc: 'El día donde les gané a todos en karting ajajajja, infaltable.',
    icon: '🏎️'
  },
  {
    date: '26 de agosto, 2025',
    title: 'Tu presentación de tesis',
    desc: 'Un día de emoción donde presentaste tu tesis y lo hiciste increíble, porque eres sequísima en todo lo que haces.',
    icon: '🌟'
  },
  {
    date: '21 de febrero, 2026',
    title: 'Nuestro primer camping',
    desc: 'Nuestro primer paseo en camping y mi primera experiencia acampando junto a ti. Unos días que nunca olvidaré.',
    icon: '⛺'
  },
  {
    date: '2 de mayo, 2026',
    title: 'Día de playa juntos',
    desc: 'Día de playa juntos con todos. Qué día más hermoso comiendo esos churritos que estaban espectaculares jjjj.',
    icon: '🌊'
  },
  {
    date: 'Siempre',
    title: 'Cada día contigo',
    desc: 'Cada mañana que te veo es un regalo. Cada momento a tu lado es la mejor versión de mi historia.',
    icon: '💕'
  },
];

onMounted(() => {
  itemRefs.value.forEach((el, i) => {
    if (!el) return;
    const isLeft = i % 2 === 0;
    gsap.from(el, {

      x: isLeft ? -60 : 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.1,
    });
  });
});
</script>

<style scoped>
.historia-section {
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

/* ── Timeline ── */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-center-line {
  position: absolute;
  left: 20px;
  top: 0; bottom: 0;
  width: 2px;
  }

@media (min-width: 640px) {
  .timeline-center-line {
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding-left: 50px;
  position: relative;
}

@media (min-width: 640px) {
  .timeline-left {
    flex-direction: row;
    padding-left: 0;
    padding-right: calc(50% + 1.5rem);
  }
  .timeline-left .timeline-dot-wrapper {
    order: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .timeline-left .timeline-card {
    order: 1;
    text-align: right;
  }
  .timeline-right {
    flex-direction: row;
    padding-left: calc(50% + 1.5rem);
  }
  .timeline-right .timeline-dot-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-dot-wrapper {
  position: absolute;
  left: 10px;
  top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
    border: 1px solid rgba(245,200,66,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 0 20px rgba(245,200,66,0.2);
  flex-shrink: 0;
}

.dot-glow {
  width: 2px;
  background: rgba(245,200,66,0.2);
  flex: 1;
  margin-top: 4px;
}

.timeline-card {
  padding: 1.25rem 1.25rem;
  flex: 1;
}

.event-date {
  font-family: var(--font-title);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold-burn);
  opacity: 0.7;
  margin-bottom: 0.4rem;
}

.event-title {
  font-family: var(--font-story);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink-dark);
  margin-bottom: 0.5rem;
}

.event-desc {
  font-family: var(--font-story);
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--ink-light);
  font-style: italic;
}
</style>
