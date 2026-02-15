import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://aipunkfacility.github.io',
  base: '/cv_ganjavagen',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'vn'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
