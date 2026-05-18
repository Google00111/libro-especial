# 💕 Libro Especial — Disney Fairytale Experience

> Una experiencia interactiva cinematográfica premium estilo cuento de hadas Disney, construida con amor por Diego para Anto.

---

## ✨ Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Backend | Laravel 12 (PHP 8.2) |
| Frontend | Vue 3 (Composition API) |
| Build Tool | Vite 6 |
| Estilos | TailwindCSS v4 |
| Animaciones | GSAP + ScrollTrigger |
| Scroll | Lenis Smooth Scroll |
| Router | Vue Router 4 |
| Deploy | Render.com (Docker) |

---

## 📁 Estructura del Proyecto

```
libro-especial/
├── docker/
│   ├── nginx.conf
│   └── supervisord.conf
├── resources/
│   ├── css/app.css              # Estilos globales Disney theme
│   └── js/
│       ├── App.vue              # Root (Lenis + GSAP + partículas)
│       ├── app.js               # Entry point + Vue Router
│       ├── views/HomeView.vue
│       └── components/
│           ├── LoadingScreen.vue
│           ├── MusicPlayer.vue
│           └── sections/
│               ├── IntroSection.vue
│               ├── CartaSection.vue
│               ├── HistoriaSection.vue
│               ├── FrasesSection.vue
│               ├── GaleriaSection.vue
│               ├── VideosSection.vue
│               ├── CancionesSection.vue
│               ├── TiempoSection.vue
│               ├── SuenosSection.vue
│               ├── MensajeFinalSection.vue
│               └── RegaloSection.vue
├── public/
│   ├── audio/her-jvke.mp3      # ← AGREGA TU MÚSICA AQUÍ
│   └── images/gallery/         # ← AGREGA FOTOS photo-1.jpg ... photo-10.jpg
├── Dockerfile
├── render.yaml
└── .env.example
```

---

## 🚀 Instalación Local

```bash
# 1. Dependencias PHP
composer install

# 2. Variables de entorno
cp .env.example .env
php artisan key:generate

# 3. Base de datos
php artisan migrate

# 4. Node dependencies
npm install

# 5. Desarrollo
php artisan serve    # Terminal 1 → localhost:8000
npm run dev          # Terminal 2 → Vite HMR
```

---

## 🎵 Música

Coloca `her-jvke.mp3` en `public/audio/`. En iPhone la música inicia al primer toque.

## 📸 Fotos

Coloca `photo-1.jpg` hasta `photo-10.jpg` en `public/images/gallery/`.  
Luego actualiza los `src` en `GaleriaSection.vue`.

## 🎬 Videos YouTube

En `VideosSection.vue` cambia `type: 'youtube'` e `id: 'TU_VIDEO_ID'`.

## 🎵 Spotify

Los IDs de Spotify están en la URL del track:  
`https://open.spotify.com/track/`**ID_AQUI**

## 🎁 Gift Card

En `RegaloSection.vue` actualiza el monto y código de RainDoor.

---

## 🌐 Deploy en Render.com

### 1 — Subir a GitHub
```bash
git init && git add . && git commit -m "✨ Libro Especial"
git remote add origin https://github.com/TU_USUARIO/libro-especial.git
git push -u origin main
```

### 2 — Crear Web Service
1. [render.com](https://render.com) → **New Web Service**
2. Conecta el repo → Render detecta `render.yaml`
3. Deploy → espera ~5 min

### 3 — URL y QR
URL: `https://libro-especial.onrender.com`  
Crea el QR en [qr-code-generator.com](https://www.qr-code-generator.com)

> **Nota:** El plan gratuito tiene cold start de ~30s. Para eliminar esto usa el plan Starter ($7/mes).

---

## 📖 Páginas del Libro

| # | Sección | Descripción |
|---|---------|-------------|
| I | Intro | Libro 3D flotante + entrada GSAP |
| II | Carta | Carta romántica para Anto |
| III | Historia | Timeline desde 19/11/2024 |
| IV | Frases | Cards con frases Disney |
| V | Galería | Polaroids con tilt 3D |
| VI | Videos | YouTube embeds lazy |
| VII | Canciones | Spotify embeds |
| VIII | Tiempo | Contador días/horas/min/seg en vivo |
| IX | Sueños | Cards de metas juntos |
| X | Mensaje | Carta final emocional |
| XI | Regalo | Sobre animado + Gift Card RainDoor |

---

*💕 Diego & Anto — Para siempre — 19 de noviembre de 2024 → ∞*
