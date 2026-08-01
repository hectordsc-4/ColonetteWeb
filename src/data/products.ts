import { img } from './images'
import type { Dictionary } from '../i18n/locales'
import { useI18n } from '../i18n/I18nProvider'

export type ProductCategory =
  | 'todos'
  | 'granizados'
  | 'helados'
  | 'cafes'
  | 'yogurt'

export type ProductHighlight = {
  title: string
  description: string
  icon: 'gauge' | 'leaf' | 'snow' | 'drop' | 'bolt'
}

export type WhyCard = {
  title: string
  description: string
  tone: 'mint' | 'navy' | 'orange' | 'sky' | 'rose'
  icon: 'smile' | 'trend' | 'service' | 'hygiene' | 'design'
  wide?: boolean
}

export type Product = {
  id: string
  title: string
  description: string
  linkLabel: string
  category: Exclude<ProductCategory, 'todos'>
  image: string
  badge?: { label: string; tone: 'orange' | 'teal' }
  featured?: boolean
  detail: {
    title: string
    badge: string
    summary: string
    gallery: string[]
    highlights: ProductHighlight[]
    whyTitle: string
    whySubtitle: string
    whyCards: WhyCard[]
    specs: { label: string; value: string }[]
    ctaTitle: string
    ctaText: string
  }
}

type ProductKey = keyof Dictionary['products']

type ProductDef = {
  id: string
  key: ProductKey
  category: Exclude<ProductCategory, 'todos'>
  image: string
  /** Imágenes extra de galería (sin repetir `image`) */
  gallery: string[]
  featured?: boolean
  badgeTone?: 'orange' | 'teal'
  highlightIcons: ProductHighlight['icon'][]
  whyMeta: { tone: WhyCard['tone']; icon: WhyCard['icon']; wide?: boolean }[]
}

const whyMetaDefault: ProductDef['whyMeta'] = [
  { tone: 'mint', icon: 'smile' },
  { tone: 'navy', icon: 'trend', wide: true },
  { tone: 'orange', icon: 'service' },
  { tone: 'sky', icon: 'hygiene' },
  { tone: 'rose', icon: 'design' },
]

export const productDefs: ProductDef[] = [
  {
    id: 'granizados',
    key: 'granizados',
    category: 'granizados',
    image: img.granizados,
    gallery: [img.granizadosG1, img.granizadosG2],
    featured: true,
    badgeTone: 'orange',
    highlightIcons: ['leaf', 'bolt'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'batidos',
    key: 'batidos',
    category: 'helados',
    image: img.batidos,
    gallery: [img.batidosG1, img.spare1],
    featured: true,
    highlightIcons: ['drop', 'bolt'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'sorbete',
    key: 'sorbete',
    category: 'granizados',
    image: img.sorbete,
    gallery: [img.sorbeteG1, img.spare2],
    featured: true,
    highlightIcons: ['leaf', 'snow'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'horchata',
    key: 'horchata',
    category: 'granizados',
    image: img.horchata,
    gallery: [img.horchataG1, img.spare3],
    highlightIcons: ['leaf', 'bolt'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'cafe',
    key: 'cafe',
    category: 'cafes',
    image: img.cafe,
    gallery: [img.cafeG1],
    highlightIcons: ['drop', 'leaf'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'te',
    key: 'te',
    category: 'cafes',
    image: img.te,
    gallery: [img.teG1],
    highlightIcons: ['leaf', 'bolt'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'soft-ice',
    key: 'softIce',
    category: 'helados',
    image: img.softIce,
    gallery: [img.softIceG1, img.softIceG2],
    featured: true,
    badgeTone: 'teal',
    highlightIcons: ['gauge', 'leaf'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'isotonica',
    key: 'isotonica',
    category: 'granizados',
    image: img.isotonica,
    gallery: [img.isotonicaG1],
    highlightIcons: ['bolt', 'gauge'],
    whyMeta: whyMetaDefault,
  },
  {
    id: 'yogurt',
    key: 'yogurt',
    category: 'yogurt',
    image: img.yogurt,
    gallery: [img.yogurtG1],
    highlightIcons: ['leaf', 'gauge'],
    whyMeta: whyMetaDefault,
  },
]

function buildProduct(def: ProductDef, copy: Dictionary['products'][ProductKey]): Product {
  const badgeLabel = 'badge' in copy ? copy.badge : undefined
  return {
    id: def.id,
    title: copy.title,
    description: copy.description,
    linkLabel: copy.linkLabel,
    category: def.category,
    image: def.image,
    featured: def.featured,
    badge:
      badgeLabel && def.badgeTone
        ? { label: badgeLabel, tone: def.badgeTone }
        : undefined,
    detail: {
      title: copy.detailTitle,
      badge: copy.detailBadge,
      summary: copy.summary,
      gallery: [def.image, ...def.gallery],
      highlights: [
        {
          title: copy.h1Title,
          description: copy.h1Desc,
          icon: def.highlightIcons[0],
        },
        {
          title: copy.h2Title,
          description: copy.h2Desc,
          icon: def.highlightIcons[1],
        },
      ],
      whyTitle: copy.whyTitle,
      whySubtitle: copy.whySubtitle,
      whyCards: copy.whyCards.map((card, i) => ({
        ...card,
        tone: def.whyMeta[i]?.tone ?? 'mint',
        icon: def.whyMeta[i]?.icon ?? 'smile',
        wide: def.whyMeta[i]?.wide,
      })),
      specs: copy.specs,
      ctaTitle: copy.ctaTitle,
      ctaText: copy.ctaText,
    },
  }
}

export function localizeProducts(t: Dictionary): Product[] {
  return productDefs.map((def) => buildProduct(def, t.products[def.key]))
}

export function useProducts(): Product[] {
  const { t } = useI18n()
  return localizeProducts(t)
}

export function useProductById(id: string | undefined): Product | undefined {
  const products = useProducts()
  return products.find((p) => p.id === id)
}

export function useCategories(): { id: ProductCategory; label: string; count: number }[] {
  const { t } = useI18n()
  const products = useProducts()
  const counts = {
    todos: products.length,
    granizados: products.filter((p) => p.category === 'granizados').length,
    helados: products.filter((p) => p.category === 'helados').length,
    cafes: products.filter((p) => p.category === 'cafes').length,
    yogurt: products.filter((p) => p.category === 'yogurt').length,
  }
  return [
    { id: 'todos', label: t.productsPage.categories.todos, count: counts.todos },
    { id: 'granizados', label: t.productsPage.categories.granizados, count: counts.granizados },
    { id: 'helados', label: t.productsPage.categories.helados, count: counts.helados },
    { id: 'cafes', label: t.productsPage.categories.cafes, count: counts.cafes },
    { id: 'yogurt', label: t.productsPage.categories.yogurt, count: counts.yogurt },
  ]
}
