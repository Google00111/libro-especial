<template>
  <section class="page-section regalo-section" id="regalo">
    <div class="aurora-orb aurora-gold" style="width:600px;height:600px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.15;"></div>
    <div class="aurora-orb aurora-pink" style="width:350px;height:350px;top:-60px;right:-60px;opacity:0.3;"></div>
    <div class="aurora-orb aurora-purple" style="width:300px;height:300px;bottom:-60px;left:-60px;opacity:0.3;"></div>

    <div class="container-magic text-center">
      <p class="chapter-label">✦ Página Final ✦</p>
      <h2 class="section-title reveal-up">Un Regalo Especial</h2>
      <p class="section-sub reveal-up">Algo pensado solo para ti, con mucho cariño esperando que te guste 🎁</p>

      <!-- Envelope / Gift reveal -->
      <div class="gift-wrapper" ref="giftRef">

        <!-- CLOSED STATE: Envelope -->
        <Transition name="envelope-open">
          <div v-if="!isOpen" class="envelope-scene" @click="openGift">
            <div class="envelope-outer">
              <!-- Sparkles around envelope -->
              <div v-for="i in 8" :key="i" class="env-sparkle" :style="getSparklePos(i)">✦</div>

              <!-- Envelope body -->
              <div class="envelope-body">
                <div class="envelope-flap"></div>
                <div class="envelope-face">
                  <div class="env-heart">💌</div>
                  <div class="env-seal">
                    <span class="seal-text">Para Anto</span>
                    <span class="seal-heart">💕</span>
                  </div>
                </div>
              </div>

              <p class="envelope-cta">Toca para abrir tu regalo ✨</p>
            </div>
          </div>
        </Transition>

        <!-- OPEN STATE: Gift Card -->
        <Transition name="gift-reveal">
          <div v-if="isOpen" class="gift-card-wrapper">
            <!-- Burst particles -->
            <div class="burst-particles">
              <span v-for="i in 12" :key="i" class="burst-star" :style="getBurstStyle(i)">✦</span>
            </div>

            <!-- Gift Card content -->
            <div class="gift-card book-card">
              <div class="gift-card-header">
                <div class="gift-logo-area">
                  <span class="gift-logo-icon">🌧️</span>
                  <h3 class="gift-brand">RainDoor</h3>
                </div>
                <p class="gift-tag">Gift Card Digital</p>
              </div>

              <div class="gift-divider"><span class="deco-line-full" style="height:1px;background:linear-gradient(90deg,transparent,rgba(245,200,66,0.4),transparent);display:block;"></span></div>

              <div class="gift-amount-area">
                <p class="gift-label-sm">Monto</p>
                <p class="gift-amount">$100000</p>
                <p class="gift-amount-note">CLP — Sin vencimiento</p>
              </div>

              <div class="gift-message-area">
                <p class="gift-message">"Para ti, mi amor, porque se que te encanta verte linda y para iniciar tu mundo laboral con nuevo oufit . Con amor, Diego 💕"</p>
              </div>

              <div class="gift-code-area">
                <p class="gift-code-label">Código</p>
                <div class="gift-code-box">
                  <span class="gift-code">Por seguridad lo tengo en el correo</span>
                  <button class="copy-btn" @click="copyCode" :class="{ copied: isCopied }">
                    {{ isCopied ? '✓ Copiado' : 'Copiar' }}
                  </button>
                </div>
              </div>

              <div class="gift-footer">
                <p class="gift-footer-text">Válido en <strong>raindoor.cl</strong> ✨</p>
              </div>
            </div>

            <!-- Reset button -->
            <button class="btn-ghost" style="margin-top:2rem;" @click="closeGift">
              ← Ver de nuevo
            </button>
          </div>
        </Transition>
      </div>

      <!-- Final footer -->
      <div class="book-end reveal-up" style="margin-top:4rem;">
        <div class="end-ornament">✦ Fin del Libro ✦</div>
        <p class="end-text">Diego & Anto — Para siempre 💕</p>
        <p class="end-date">19 de noviembre de 2024 → ∞</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const giftRef = ref(null);
const isOpen = ref(false);
const isCopied = ref(false);

function openGift() {
  isOpen.value = true;
}

function closeGift() {
  isOpen.value = false;
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText('ANTO-MAGIC-2024');
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 2500);
  } catch {
    // Fallback
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 2500);
  }
}

function getSparklePos(i) {
  const angle = (i / 8) * 360;
  const r = 160;
  const x = Math.cos((angle * Math.PI) / 180) * r;
  const y = Math.sin((angle * Math.PI) / 180) * r;
  return {
    position: 'absolute',
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: 'translate(-50%,-50%)',
    animationDelay: `${i * 0.25}s`,
  };
}

function getBurstStyle(i) {
  const angle = (i / 12) * 360;
  const r = 120;
  const x = Math.cos((angle * Math.PI) / 180) * r;
  const y = Math.sin((angle * Math.PI) / 180) * r;
  return {
    position: 'absolute',
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: 'translate(-50%,-50%)',
    animationDelay: `${i * 0.1}s`,
  };
}

onMounted(() => {
  gsap.from(giftRef.value, {

    y: 60, opacity: 0, duration: 1.2, ease: 'power3.out'
  });
});
</script>

<style scoped>
.regalo-section {
    padding: 5rem 1.5rem 4rem;
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
  margin-bottom: 3rem;
}

.text-center { text-align: center; }

/* ── Gift wrapper ── */
.gift-wrapper {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Envelope ── */
.envelope-scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.envelope-outer {
  position: relative;
  display: inline-block;
}

.env-sparkle {
  position: absolute;
  font-size: 0.8rem;
  color: var(--gold-burn);
  opacity: 0.6;
  animation: sparkle-rotate 3s ease-in-out infinite;
}

.envelope-body {
  width: 280px;
  height: 180px;
  position: relative;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  animation: float-gentle 3s ease-in-out infinite;
}

.envelope-body:hover {
  transform: scale(1.05);
}

.envelope-flap {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 0;
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-top: 90px solid #f9f9f9;
  z-index: 2;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

.envelope-face {
  position: absolute;
  inset: 0;
  background: #ffffff;
  border: 2px solid var(--gold-burn);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 0 40px rgba(245,200,66,0.2), 0 20px 60px rgba(0,0,0,0.6);
}

.env-heart { font-size: 2.5rem; }

.env-seal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.seal-text {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--gold-burn);
}

.seal-heart { font-size: 0.8rem; }

.envelope-cta {
  font-family: var(--font-script);
  font-size: 1rem;
  color: var(--pink-fairy);
  opacity: 0.8;
  animation: pulse-fade 2s ease-in-out infinite;
}

/* ── Gift Card ── */
.gift-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 340px;
  position: relative;
}

.burst-particles {
  position: absolute;
  top: 0; left: 50%;
  width: 0; height: 0;
  pointer-events: none;
}

.burst-star {
  position: absolute;
  font-size: 0.8rem;
  color: var(--gold-burn);
  animation: burst-out 1s ease-out forwards;
  opacity: 0;
}

@keyframes burst-out {
  0% { transform: translate(-50%,-50%) scale(0); opacity: 1; }
  100% { transform: translate(calc(-50% + var(--bx, 0px)), calc(-50% + var(--by, 0px))) scale(1.5); opacity: 0; }
}

.gift-card {
  width: 100%;
  padding: 0;
  overflow: hidden;
  background: #ffffff !important;
  border: 2px solid var(--gold-burn) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(184, 134, 11, 0.1);
}

.gift-card-header {
  padding: 1.5rem;
    display: flex;
  justify-content: space-between;
  align-items: center;
}

.gift-logo-area {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.gift-logo-icon { font-size: 1.5rem; }

.gift-brand {
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 700;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gift-tag {
  font-family: var(--font-body);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold-burn);
}

.gift-divider { padding: 0 1.5rem; }

.gift-amount-area {
  padding: 1.5rem;
  text-align: center;
}

.gift-label-sm {
  font-family: var(--font-title);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,200,66,0.4);
  margin-bottom: 0.4rem;
}

.gift-amount {
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 700;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: countdown-glow 2s ease-in-out infinite;
}

.gift-amount-note {
  font-family: var(--font-body);
  font-size: 0.65rem;
  color: rgba(245,200,66,0.4);
  margin-top: 0.2rem;
}

.gift-message-area {
  padding: 1rem 1.5rem;
  background: rgba(249,168,212,0.03);
  border-top: 1px solid rgba(245,200,66,0.08);
  border-bottom: 1px solid rgba(245,200,66,0.08);
}

.gift-message {
  font-family: var(--font-story);
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--ink-light);
  font-style: italic;
  text-align: center;
}

.gift-code-area {
  padding: 1.25rem 1.5rem;
}

.gift-code-label {
  font-family: var(--font-title);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,200,66,0.5);
  margin-bottom: 0.5rem;
}

.gift-code-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(245,200,66,0.06);
  border: 1px solid rgba(245,200,66,0.2);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
}

.gift-code {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: var(--gold-burn);
  letter-spacing: 0.1em;
  flex: 1;
}

.copy-btn {
  padding: 0.3rem 0.75rem;
  background: var(--gradient-gold);
  color: var(--blue-midnight);
  border: none;
  border-radius: 6px;
  font-family: var(--font-title);
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.copy-btn:hover { transform: scale(1.05); }
.copy-btn.copied { background: linear-gradient(135deg, #10B981, #059669); color: white; }

.gift-footer {
  padding: 0.75rem 1.5rem;
  text-align: center;
  background: rgba(245,200,66,0.03);
}

.gift-footer-text {
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: rgba(245,200,66,0.4);
}

.gift-footer-text strong { color: rgba(245,200,66,0.7); }

/* ── Transitions ── */
.envelope-open-leave-active {
  transition: all 0.6s ease;
}
.envelope-open-leave-to {
  opacity: 0;
  transform: scale(0.8) rotateX(20deg);
}

.gift-reveal-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.gift-reveal-enter-from {
  opacity: 0;
  transform: scale(0.6) translateY(40px);
}

/* ── Book end ── */
.book-end {
  border-top: 1px solid rgba(245,200,66,0.15);
  padding-top: 2.5rem;
}

.end-ornament {
  font-family: var(--font-title);
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold-burn);
  opacity: 0.5;
  margin-bottom: 1rem;
}

.end-text {
  font-family: var(--font-script);
  font-size: 1.4rem;
  color: var(--pink-fairy);
  margin-bottom: 0.5rem;
}

.end-date {
  font-family: var(--font-title);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(245,200,66,0.4);
  text-transform: uppercase;
}
</style>
