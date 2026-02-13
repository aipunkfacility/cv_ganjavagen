import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const pathname = base && url.pathname.startsWith(base)
        ? url.pathname.replace(base, "")
        : url.pathname;

    const segments = pathname.split('/').filter(Boolean);
    const lang = segments[0];

    if (lang && lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
