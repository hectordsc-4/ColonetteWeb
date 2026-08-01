import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductsHero from '../components/products/ProductsHero'
import ProductsCatalog from '../components/products/ProductsCatalog'
import DistributorCta from '../components/products/DistributorCta'
import { useProducts, type ProductCategory } from '../data/products'
import { useI18n } from '../i18n/I18nProvider'
import './ProductsPage.css'

export default function ProductsPage() {
  const { locale } = useI18n()
  const products = useProducts()
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState<ProductCategory>('todos')
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [sort, setSort] = useState('destacados')

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === 'todos' || p.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })

    if (sort === 'nombre') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title, locale))
    } else if (sort === 'categoria') {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category, locale))
    } else {
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }

    return list
  }, [products, category, query, sort, locale])

  return (
    <main className="products-page">
      <ProductsHero />
      <ProductsCatalog
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        items={filtered}
      />
      <DistributorCta />
    </main>
  )
}
