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

export const categories: { id: ProductCategory; label: string; count: number }[] = [
  { id: 'todos', label: 'Todos los productos', count: 24 },
  { id: 'granizados', label: 'Granizados', count: 12 },
  { id: 'helados', label: 'Helados & Soft Ice', count: 4 },
  { id: 'cafes', label: 'Cafés y Tés', count: 6 },
  { id: 'yogurt', label: 'Yogurt Natural', count: 2 },
]

const softIceGallery = [
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
]

function baseWhy(productName: string): WhyCard[] {
  return [
    {
      title: 'Experiencia de Cliente',
      description: `El producto ${productName} es visualmente atractivo y ofrece una experiencia que tus clientes asocian con calidad premium.`,
      tone: 'mint',
      icon: 'smile',
    },
    {
      title: 'Rentabilidad Garantizada',
      description:
        'Con un coste por ración reducido y un alto valor percibido, se amortiza rápidamente en cualquier terraza o buffet.',
      tone: 'navy',
      icon: 'trend',
      wide: true,
    },
    {
      title: 'Servicio Técnico VIP',
      description:
        'Mantenimiento preventivo y asistencia urgente en toda Baleares. No permita que su servicio se detenga.',
      tone: 'orange',
      icon: 'service',
    },
    {
      title: 'Higiene Superior',
      description:
        'Componentes desmontables de acero inoxidable que facilitan la limpieza diaria según normativas sanitarias.',
      tone: 'sky',
      icon: 'hygiene',
    },
    {
      title: 'Diseño Atractivo',
      description:
        'Estética moderna con branding de Colonette que invita al consumo instantáneo en cualquier punto de venta.',
      tone: 'rose',
      icon: 'design',
    },
  ]
}

export const products: Product[] = [
  {
    id: 'granizados',
    title: 'Granizados',
    description:
      'Sabor auténtico y refrescante. Nuestra especialidad es el granizado de almendra y fruta de temporada.',
    linkLabel: 'Ver variedades >',
    category: 'granizados',
    image:
      'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=80',
    badge: { label: 'TOP VENTAS', tone: 'orange' },
    featured: true,
    detail: {
      title: 'Granizados Artesanos Colonette',
      badge: 'SABOR BALEAR',
      summary:
        'Recetas tradicionales de las islas con fruta seleccionada y almendra mallorquina. Ideal para terrazas, chiringuitos y hostelería de alto volumen.',
      gallery: [
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Receta Tradicional',
          description: 'Elaboración artesana inspirada en el verano mediterráneo.',
          icon: 'leaf',
        },
        {
          title: 'Alta Rotación',
          description: 'Sabores pensados para picos de demanda en temporada alta.',
          icon: 'bolt',
        },
      ],
      whyTitle: '¿Por qué elegir Granizados Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y frescura.',
      whyCards: baseWhy('granizado'),
      specs: [
        { label: 'Gama', value: 'Almendra, Limón, Melocotón, Sandía' },
        { label: 'Formato', value: 'Concentrado / Listo para servir' },
        { label: 'Conservación', value: 'Refrigerado 0–4°C' },
        { label: 'Rendimiento', value: 'Hasta 40 raciones / litro' },
        { label: 'Origen', value: 'Binissalem, Mallorca' },
        { label: 'Uso ideal', value: 'Terrazas, bares y chiringuitos' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'batidos',
    title: 'Batidos',
    description:
      'Cremosos y deliciosos Milkshakes. Preparados con los mejores ingredientes para hostelería.',
    linkLabel: 'Ver variedades >',
    category: 'helados',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    featured: true,
    detail: {
      title: 'Batidos Premium Colonette',
      badge: 'CREMOSO',
      summary:
        'Bases cremosas listas para batir con textura sedosa y sabores intensos. Perfectos para cafeterías, heladerías y menús infantiles.',
      gallery: [
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Textura Premium',
          description: 'Cremosidad constante servicio tras servicio.',
          icon: 'drop',
        },
        {
          title: 'Preparación Rápida',
          description: 'Listo en segundos para no frenar la barra.',
          icon: 'bolt',
        },
      ],
      whyTitle: '¿Por qué elegir Batidos Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('batido'),
      specs: [
        { label: 'Gama', value: 'Vainilla, Chocolate, Fresa, Cookies' },
        { label: 'Base', value: 'Láctea / Vegetal disponible' },
        { label: 'Conservación', value: 'Congelado -18°C' },
        { label: 'Rendimiento', value: 'Hasta 25 batidos / kg' },
        { label: 'Alergenos', value: 'Leche (opción sin lactosa)' },
        { label: 'Uso ideal', value: 'Cafeterías y heladerías' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'sorbete',
    title: 'Sorbete Artesano',
    description:
      'Textura ligera y sabores intensos. Limón, mango y otras frutas para el verano mediterráneo.',
    linkLabel: 'Ver variedades >',
    category: 'granizados',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    featured: true,
    detail: {
      title: 'Sorbete Artesano Colonette',
      badge: 'FRUTA REAL',
      summary:
        'Sorbete ligero con fruta de temporada y textura aireada. Una alternativa elegante y refrescante para carta de postres y terrazas.',
      gallery: [
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Ligero y Fresco',
          description: 'Menos grasa, más sabor a fruta natural.',
          icon: 'leaf',
        },
        {
          title: 'Presentación Premium',
          description: 'Ideal para postres y cócteles de autor.',
          icon: 'snow',
        },
      ],
      whyTitle: '¿Por qué elegir Sorbete Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('sorbete'),
      specs: [
        { label: 'Gama', value: 'Limón, Mango, Frutos Rojos' },
        { label: 'Textura', value: 'Ligera y cristalina' },
        { label: 'Conservación', value: 'Congelado -18°C' },
        { label: 'Origen fruta', value: 'Selección mediterránea' },
        { label: 'Formato', value: 'Tarrinas profesionales' },
        { label: 'Uso ideal', value: 'Restaurantes y terrazas' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'horchata',
    title: 'Horchata',
    description:
      'Tradición en cada trago. Elaborada con chufa de la máxima calidad para un sabor auténtico.',
    linkLabel: 'Ver variedades >',
    category: 'granizados',
    image:
      'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80',
    detail: {
      title: 'Horchata de Chufa Colonette',
      badge: 'TRADICIÓN',
      summary:
        'Horchata cremosa elaborada con chufa seleccionada. Auténtica, refrescante y perfecta para el mediodía mediterráneo.',
      gallery: [
        'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Chufa Premium',
          description: 'Selección rigurosa para un sabor inconfundible.',
          icon: 'leaf',
        },
        {
          title: 'Servicio Rápido',
          description: 'Formato pensado para hostelería de alto ritmo.',
          icon: 'bolt',
        },
      ],
      whyTitle: '¿Por qué elegir Horchata Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('horchata'),
      specs: [
        { label: 'Base', value: 'Chufa seleccionada' },
        { label: 'Formato', value: 'Líquido concentrado / listo' },
        { label: 'Conservación', value: 'Refrigerado 0–4°C' },
        { label: 'Sabor', value: 'Tradicional / Ligera' },
        { label: 'Origen', value: 'Receta mediterránea' },
        { label: 'Uso ideal', value: 'Bares y terrazas' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'cafe',
    title: 'Café',
    description:
      'Selección Colonette. Aromas intensos y cuerpo perfecto para cafeterías y restaurantes.',
    linkLabel: 'Ver variedades >',
    category: 'cafes',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    detail: {
      title: 'Café Colonette Selección',
      badge: 'AROMA INTENSO',
      summary:
        'Blend profesional con cuerpo equilibrado y crema persistente. Pensado para espresso, cappuccino y servicio de hotel.',
      gallery: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Crema Perfecta',
          description: 'Extracción estable taza tras taza.',
          icon: 'drop',
        },
        {
          title: 'Perfil Equilibrado',
          description: 'Aroma intenso con amargor controlado.',
          icon: 'leaf',
        },
      ],
      whyTitle: '¿Por qué elegir Café Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('café'),
      specs: [
        { label: 'Tueste', value: 'Medio-oscuro profesional' },
        { label: 'Origen', value: 'Blend arábica / robusta' },
        { label: 'Formato', value: 'Grano / Molido' },
        { label: 'Envase', value: '1 kg / 5 kg' },
        { label: 'Perfil', value: 'Chocolate, frutos secos' },
        { label: 'Uso ideal', value: 'Hoteles y cafeterías' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'te',
    title: 'Refrescos de té',
    description:
      'Hidratación natural. Una alternativa saludable y refrescante llena de sabor mediterráneo.',
    linkLabel: 'Ver variedades >',
    category: 'cafes',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
    detail: {
      title: 'Refrescos de Té Colonette',
      badge: 'HIDRATACIÓN',
      summary:
        'Tés fríos con hierbas y cítricos mediterráneos. Una alternativa saludable y visualmente atractiva para carta de bebidas.',
      gallery: [
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Natural',
          description: 'Infusiones ligeras sin aditivos innecesarios.',
          icon: 'leaf',
        },
        {
          title: 'Refresco Express',
          description: 'Servicio inmediato en vaso o jarra.',
          icon: 'bolt',
        },
      ],
      whyTitle: '¿Por qué elegir Té Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('té'),
      specs: [
        { label: 'Gama', value: 'Limón, Menta, Frutos Rojos' },
        { label: 'Formato', value: 'Concentrado / listo' },
        { label: 'Servicio', value: 'Frío / con hielo' },
        { label: 'Conservación', value: 'Refrigerado' },
        { label: 'Azúcar', value: 'Versión light disponible' },
        { label: 'Uso ideal', value: 'Terrazas y spas' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'soft-ice',
    title: 'Soft ice',
    description:
      'Helado express de alta calidad. Disponemos de maquinaria profesional y mezclas premium.',
    linkLabel: 'Maquinaria y mezclas >',
    category: 'helados',
    image: softIceGallery[0],
    badge: { label: 'PROFESIONAL', tone: 'teal' },
    detail: {
      title: 'Máquina Soft-ice Profesional',
      badge: 'HELADO EXPRESS',
      summary:
        'Diseñada para hostelería balear de alto ritmo: producción continua, cremosidad constante y fiabilidad día tras día en terraza, buffet o take away.',
      gallery: softIceGallery,
      highlights: [
        {
          title: 'Producción Continua',
          description: 'Sin esperas entre servicios, ideal para picos de demanda.',
          icon: 'gauge',
        },
        {
          title: 'Bajo Consumo',
          description: 'Eficiencia energética Clase A para optimizar sus costes.',
          icon: 'leaf',
        },
      ],
      whyTitle: '¿Por qué elegir Soft-ice Colonette?',
      whySubtitle:
        'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: [
        {
          title: 'Experiencia de Cliente',
          description:
            'El helado soft es visualmente atractivo y ofrece una textura que los clientes asocian con el placer vacacional premium.',
          tone: 'mint',
          icon: 'smile',
        },
        {
          title: 'Rentabilidad Garantizada',
          description:
            'Con un coste por ración reducido y un alto valor percibido, la máquina Soft-ice se amortiza rápidamente en cualquier terraza o buffet.',
          tone: 'navy',
          icon: 'trend',
          wide: true,
        },
        {
          title: 'Servicio Técnico VIP',
          description:
            'Mantenimiento preventivo y asistencia urgente en toda Baleares. No permita que su servicio se detenga.',
          tone: 'orange',
          icon: 'service',
        },
        {
          title: 'Higiene Superior',
          description:
            'Componentes desmontables de acero inoxidable que facilitan la limpieza diaria según normativas sanitarias.',
          tone: 'sky',
          icon: 'hygiene',
        },
        {
          title: 'Diseño Atractivo',
          description:
            'Estética moderna con branding de Colonette que invita al consumo instantáneo en cualquier punto de venta.',
          tone: 'rose',
          icon: 'design',
        },
      ],
      specs: [
        { label: 'Modelo', value: 'Colonette Soft-Ice Turbo 2024' },
        { label: 'Capacidad de Cuba', value: '12 Litros / 3.2 Gallons' },
        { label: 'Sistema de Enfriamiento', value: 'Compresor de Aire Reforzado' },
        { label: 'Voltaje', value: '220-240V / 50Hz' },
        { label: 'Dimensiones', value: '540 x 740 x 1400 mm' },
        { label: 'Material', value: 'Acero Inoxidable Alimentario AISI 304' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText:
        'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'isotonica',
    title: 'Bebida isotónica',
    description:
      'Energía y recuperación. Formuladas para reponer electrolitos con un toque refrescante.',
    linkLabel: 'Ver sabores >',
    category: 'granizados',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80',
    detail: {
      title: 'Bebida Isotónica Colonette',
      badge: 'ENERGÍA',
      summary:
        'Fórmula refrescante para reponer electrolitos con maquinaria dispensadora profesional. Ideal para playas, gyms y eventos deportivos.',
      gallery: [
        'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Recuperación',
          description: 'Electrolitos pensados para actividad intensa.',
          icon: 'bolt',
        },
        {
          title: 'Dispensado Fácil',
          description: 'Compatible con máquinas de doble cuba.',
          icon: 'gauge',
        },
      ],
      whyTitle: '¿Por qué elegir Isotónica Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('isotónica'),
      specs: [
        { label: 'Sabores', value: 'Cítrico, Naranja, Blue' },
        { label: 'Formato', value: 'Concentrado profesional' },
        { label: 'Servicio', value: 'Granizado / frío' },
        { label: 'Conservación', value: 'Ambiente fresco' },
        { label: 'Compatibilidad', value: 'Dispensadores dual tank' },
        { label: 'Uso ideal', value: 'Playas y eventos' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
  {
    id: 'yogurt',
    title: 'Yogurt natural',
    description:
      'Sano y equilibrado. Helado de yogurt con bífidus y textura sedosa, ideal para hostelería.',
    linkLabel: 'Ver opciones >',
    category: 'yogurt',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
    detail: {
      title: 'Yogurt Natural Soft Colonette',
      badge: 'BÍFIDUS',
      summary:
        'Helado de yogurt con textura sedosa y perfil saludable. Combina bienestar y indulgencia para un público cada vez más exigente.',
      gallery: [
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
      ],
      highlights: [
        {
          title: 'Perfil Saludable',
          description: 'Yogurt con bífidus y textura sedosa.',
          icon: 'leaf',
        },
        {
          title: 'Máquina Dedicada',
          description: 'Dispensado profesional para alto volumen.',
          icon: 'gauge',
        },
      ],
      whyTitle: '¿Por qué elegir Yogurt Colonette?',
      whySubtitle: 'El valor añadido para su negocio de hostelería, combinando tradición y tecnología.',
      whyCards: baseWhy('yogurt'),
      specs: [
        { label: 'Base', value: 'Yogurt natural con bífidus' },
        { label: 'Textura', value: 'Soft / sedosa' },
        { label: 'Conservación', value: 'Refrigerado / mezcla' },
        { label: 'Toppings', value: 'Fruta, granola, siropes' },
        { label: 'Máquina', value: 'Compatible Soft Yogurt' },
        { label: 'Uso ideal', value: 'Heladerías y healthy bars' },
      ],
      ctaTitle: '¿Listo para refrescar su negocio?',
      ctaText: 'Ofrecemos facilidades de pago, instalación gratuita en Mallorca y formación para su personal.',
    },
  },
]

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}
