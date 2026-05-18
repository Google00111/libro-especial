<template>
  <section class="page-section carta-section" id="carta">
    <div class="aurora-orb aurora-pink" style="width:350px;height:350px;top:-80px;right:-80px;opacity:0.4;"></div>
    <div class="aurora-orb aurora-gold" style="width:300px;height:300px;bottom:-80px;left:-80px;opacity:0.3;"></div>

    <div class="container-magic">
      <!-- Section Label -->
      <div class="section-label-wrapper text-center">
        <p class="chapter-label">✦ Página I ✦</p>
        <h2 class="section-title reveal-up">Carta de Amor</h2>
        <div class="section-sub reveal-up">
          <p class="section-sub-paragraph">Unas pequeñas palabras escritas con el corazon para que leas y des inicio a este hermoso cuento</p>
        </div>
      </div>

      <!-- Letter Card -->
      <div class="letter-card book-card reveal-scale" ref="letterCard">
        <!-- Ink decoration top -->
        <div class="letter-deco letter-deco-top">
          <span class="deco-line"></span>
          <span class="deco-heart">✦ 💕 ✦</span>
          <span class="deco-line"></span>
        </div>

        <!-- Salutation -->
        <p class="letter-salutation reveal-up">Mi amor Anto,</p>

        <!-- Letter body — typewriter effect -->
        <div class="letter-body">
          <p v-for="(para, i) in paragraphs" :key="i" class="letter-para">
            {{ para }}
          </p>
        </div>

        <!-- Signature -->
        <div class="letter-signature reveal-up">
          <div class="signature-line"></div>
          <p class="signature-name">Con todo mi amor,</p>
          <p class="signature-from">Diego 💕</p>
          <p class="signature-date">{{ formattedDate }}</p>
        </div>

        <!-- Bottom decoration -->
        <div class="letter-deco letter-deco-bottom">
          <span class="deco-line"></span>
          <span class="deco-heart">✦ ∞ ✦</span>
          <span class="deco-line"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';


const letterCard = ref(null);

const paragraphs = [
    `Hoy te escribo este libro de una manera muy particular con algo que es mi escencia y nada mejor que demostrarlo con algo digital que será eterno, este libro lo llevo pensando mucho tiempo... la diferencia mas grande de este libro es que es uno que no tiene final, al igual que la bonita vida que sueño contigo, hoy 18-05-2026 lo veras por primera vez ya que es un dia muy importante y como tu me dijiste único ya que no hay otras licenciaturas como la primera, primero que nada quiero felicitarte por la gran mujer que te convertiste y lo increíblemente capaz que eres por haber salido de una carrera invicta sin ningún ramo hechado ni malas notas sino saliendo con excelencia y siendo la que da el discurso delante de todos tus compañeros, no sabes lo increíblemente orgulloso de ti y lo afortunado que me siento al tener a alguien como tu a mi lado, con la que pienso compartir todos los momentos de mi vida.`,
    `Estoy sumamente emocionado por ver lo que te depara a futuro en esta nueva etapa que es la etapa de adulto responsable, donde ya entras de lleno en el mundo laboral con tu cartón en mano jajaja, lo que mas me emociona es saber que te acompañare en esta etapa, te deseo de todo corazon y alma lo mejor del mundo para ti en todo lo que se te viene, noches de estrés, días de mucho trabajo , lloros por tus editores o otras razones jajajaj pero lo tengo por seguro que seras una persona sumamente exitosa por que eres una mujer ultramente trabajadora y aperrada que es inevitable al éxito`,
    `Te amo mas de lo que tu piensas, siempre contaras con mi apoyo para todo al fin y al cabo somos compañeros de vida.`,
    `Como sabras no soy un escritor ni nada menos jajaja, no se me da del todo bien escribir inclusive luego de leerlo estoy seguro que encontraras muchas faltas de ortografía por que no lo pasare por ninguna IA para que sea lo mas geniuno posible y sientas mis palabras en tu corazón.`,
    `En fin, no tengo mas palabras de agradecimiento para ti por las hermosas experiencias que me haces pasar, las risas que me sacas siendo tu misma, y sobre todo lo mas importante... por ayudarme a estar en mi mejor momento de salud mental que eh estado en mi vida y todo gracias a ti, te amo eternamente.. nos esperan grandes cosas en la vida.. esto es solo el comienzo de algo hermoso`,
    `Te dejo con unas poesias escritas por este famosisimo escritor`,
  `Anto, desde el primer momento en que entraste en mi vida, algo cambió para siempre. Como si una estrella mágica hubiera decidido iluminar exactamente el camino hacia ti, y yo, sin saberlo, solo estaba esperando ese instante.`,
  `Hay personas que llegan como un cuento que ya conocías de memoria, como si tu corazón las hubiera soñado antes de que existieran. Tú eres eso para mí. Mi cuento favorito. Mi historia más bonita.`,
  `En cada mirada tuya encuentro el castillo donde quiero quedarme, en cada sonrisa tuya descubro la magia que pensé que solo existía en las películas. Pero no, tú la haces real. Tú me la haces sentir cada día.`,
  `Quiero ser el Diego que mereces, el que camina a tu lado en cada capítulo de tu historia, el que aplaude cada uno de tus sueños y el que te abraza en cada tormenta. Quiero construir contigo algo tan nuestro que el mundo entero pueda ver lo que significa el amor verdadero.`,
  `Anto, te amo con una fuerza que no cabe en palabras, pero lo intento, porque mereces saberlo. Hoy, mañana y en cada página que nos quede por escribir juntos.`,
];

const formattedDate = computed(() => {
  return new Date().toLocaleDateString('es-CL', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
});

onMounted(() => {
  // Scroll reveal for letter card
  gsap.from(letterCard.value, {
    y: 50, opacity: 0, duration: 1.2, ease: 'power3.out'
  });

  // Typewriter-style reveal for each paragraph
  gsap.utils.toArray('.letter-para').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0, y: 20, duration: 0.8,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });
});
</script>

<style scoped>
.carta-section {
    padding: 5rem 1.5rem;
}

.section-label-wrapper {
  margin-bottom: 3rem;
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

.section-sub-paragraph {
  margin-bottom: 1.25rem;
}

.section-sub-paragraph:last-child {
  margin-bottom: 0;
}

/* ── Letter Card ── */
.letter-card {
  padding: 2.5rem 2rem;
  background: rgba(255,249,240,0.12);
  border: 1px solid rgba(245,200,66,0.25);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
}

.letter-deco {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1.5rem;
}

.letter-deco-bottom {
  margin: 1.5rem 0 0;
}

.deco-line {
  flex: 1;
  height: 1px;
  }

.deco-heart {
  font-family: var(--font-script);
  color: var(--gold-burn);
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0.8;
}

.letter-salutation {
  font-family: var(--font-script);
  font-size: 1.6rem;
  color: var(--pink-fairy);
  margin-bottom: 1.5rem;
}

.letter-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.letter-para {
  font-family: var(--font-story);
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--white-warm);
  font-style: italic;
  text-align: justify;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
}

.letter-signature {
  margin-top: 2rem;
  text-align: right;
}

.signature-line {
  height: 1px;
    margin-bottom: 1rem;
}

.signature-name {
  font-family: var(--font-story);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-light);
  margin-bottom: 0.3rem;
}

.signature-from {
  font-family: var(--font-script);
  font-size: 1.8rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.3rem;
}

.signature-date {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(245,200,66,0.4);
  text-transform: uppercase;
}
</style>
