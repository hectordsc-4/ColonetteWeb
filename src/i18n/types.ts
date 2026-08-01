export type Locale = 'es' | 'ca' | 'en'

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'ca', label: 'Català', short: 'CA' },
  { code: 'en', label: 'English', short: 'EN' },
]

export const LOCALE_STORAGE_KEY = 'colonette-locale'
