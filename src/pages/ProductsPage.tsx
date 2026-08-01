import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductsHero from '../components/products/ProductsHero'
import ProductsCatalog from '../components/products/ProductsCatalog'
import DistributorCta from '../components/products/DistributorCta'
import { type ProductCategory, products } from '../data/products'
import './ProductsPage.css'

export default function ProductsPage() {
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
      list = [...list].sort((a, b) => a.title.localeCompare(b.title, 'es'))
    } else if (sort === 'categoria') {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category, 'es'))
    } else {
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }

    return list
  }, [category, query, sort])

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
