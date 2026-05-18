/**
 * app.js — Punto de entrada principal
 * Libro Especial — Disney Fairytale Experience
 */
import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import root component
import App from './App.vue';

// Import Views
import HomeView from './views/HomeView.vue';

// ============================================================
// Router Configuration
// ============================================================
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: 'Un Libro Especial Para Alguien Especial 💕' }
        },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'instant' };
    }
});

// Update page title on navigation
router.afterEach((to) => {
    document.title = to.meta.title || 'Libro Especial 💕';
});

// ============================================================
// Create & Mount App
// ============================================================
const app = createApp(App);
app.use(router);
app.mount('#app');
