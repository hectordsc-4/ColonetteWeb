import { es } from './es'
import { ca } from './ca'
import { en } from './en'
import type { Locale } from '../types'

export type Dictionary = typeof es
export const dictionaries: Record<Locale, Dictionary> = { es, ca, en }
