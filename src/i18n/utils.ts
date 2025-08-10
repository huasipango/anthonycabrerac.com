export type Language = 'es' | 'en'

export const languages: Language[] = ['es', 'en']
export const defaultLanguage: Language = 'es'

export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en/')) return 'en'
  return 'es'
}

export function getPathForLanguage(pathname: string, lang: Language): string {
  if (lang === 'es') {
    return pathname.replace('/en/', '/')
  } else {
    if (pathname === '/') return '/en/'
    return pathname.replace(/^\//, '/en/')
  }
}

export function getAlternateLanguages(currentLang: Language): Language[] {
  return languages.filter((lang) => lang !== currentLang)
}
