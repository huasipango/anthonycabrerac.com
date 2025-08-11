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

// Function to generate URLs that maintain the current language
export function getLocalizedUrl(path: string, currentLang: Language): string {
  // Remove leading slash if present
  const cleanPath = path.replace(/^\//, '')

  if (currentLang === 'en') {
    // For English, add /en/ prefix
    return `/en/${cleanPath}`
  } else {
    // For Spanish, no prefix needed
    return `/${cleanPath}`
  }
}

// Import translations
import { translations } from './translations'

export function t(
  key: string,
  lang: Language = 'es',
  params: Record<string, string> = {}
): string {
  const translation =
    translations[lang]?.[key] || translations[defaultLanguage]?.[key] || key

  // Replace parameters like {{date}}, {{time}}, etc.
  return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
    return params[param] || match
  })
}
