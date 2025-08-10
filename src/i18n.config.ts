import { defineAstroI18nConfig } from 'astro-i18n'

export default defineAstroI18nConfig({
  defaultLang: 'es',
  supportedLanguages: ['es', 'en'],
  showDefaultLang: false,
  trailingSlash: 'never',
  base: '/',
  i18nRouting: {
    prefixDefaultLang: false,
    strategy: 'prefix'
  }
})
