# ============================================================
# Dockerfile — Libro Especial (Laravel 12 + Vue 3)
# Optimized for Render.com free tier
# ============================================================

FROM php:8.2-fpm-alpine AS base

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    supervisor \
    nodejs \
    npm \
    git \
    curl \
    zip \
    unzip \
    sqlite \
    build-base \
    autoconf \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    oniguruma-dev \
    libxml2-dev

# Install PHP extensions
RUN docker-php-ext-install \
    pdo \
    pdo_sqlite \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    opcache

# Clean up build dependencies to reduce image size
RUN apk del --no-cache build-base autoconf

# Install Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# ── Copy dependency files first (layer caching) ──
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-interaction

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

# ── Copy application source ──
COPY . .

# ── Build frontend assets ──
RUN npm run build

# ── Laravel setup ──
RUN cp .env.example .env || true
RUN php artisan key:generate --force
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# ── Permissions ──
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# ── Nginx configuration ──
COPY docker/nginx.conf /etc/nginx/nginx.conf

# ── Supervisor configuration ──
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
