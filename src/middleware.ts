import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);

    // Применяем логику только для главной страницы корня
    if (url.pathname === '/') {
        const preferredLocale = context.preferredLocale;
        const locales = ['ru', 'en', 'vn'];

        // Если язык определен и это не RU
        if (preferredLocale && preferredLocale !== 'ru') {
            if (preferredLocale === 'vi' || preferredLocale === 'vn') {
                return context.redirect('/vn/');
            }
            // Для всех остальных (включая EN и неизвестные) - редирект на EN
            return context.redirect('/en/');
        }
    }

    return next();
});
