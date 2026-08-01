export type NewsItem = {
  id: string
  title: string
  excerpt: string
  date: string
  tag: string
  image: string
  featured?: boolean
}

export const newsItems: NewsItem[] = [
  {
    id: 'granizado-almendra-2026',
    title: 'Granizado de almendra: la estrella de la temporada',
    excerpt:
      'Volvemos a poner en el centro nuestra receta artesana de almendra mallorquina. Textura cremosa, sabor intenso y el clásico que define el verano en Baleares.',
    date: '15 jul 2026',
    tag: 'Producto',
    image:
      'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'soft-ice-pro',
    title: 'Nueva línea Soft Ice Pro para hostelería',
    excerpt:
      'Máquinas más compactas, mayor rendimiento y servicio técnico incluido. Ideal para terrazas, heladerías y chiringuitos con alto volumen.',
    date: '2 jul 2026',
    tag: 'Maquinaria',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'catalogo-verano',
    title: 'Catálogo de verano 2026 ya disponible',
    excerpt:
      'Granizados, cafés, sorbets y yogures naturales. Descarga el catálogo o pídelo a tu comercial Colonette en Mallorca, Menorca, Ibiza o Formentera.',
    date: '20 jun 2026',
    tag: 'Catálogo',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'servicio-rapido',
    title: 'Servicio técnico express en temporada alta',
    excerpt:
      'Ampliamos cobertura y tiempos de respuesta para que tu negocio no se detenga en los meses de más demanda.',
    date: '5 jun 2026',
    tag: 'Servicio',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cafe-colonette',
    title: 'Café Colonette: tueste propio para bares y hoteles',
    excerpt:
      'Un blend pensado para hostelería balear: cuerpo, aroma y consistencia taza tras taza. Disponible en grano y molido.',
    date: '18 may 2026',
    tag: 'Producto',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'red-baleares',
    title: 'Más puntos de distribución en las islas',
    excerpt:
      'Reforzamos la red de entregas para llegar antes a tu establecimiento, con stock de temporada y repuestos clave.',
    date: '28 abr 2026',
    tag: 'Empresa',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
]
