import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexander-finaev.com',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'vn'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
