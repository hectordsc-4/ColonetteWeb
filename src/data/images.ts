/** Rutas bajo public/images. Cada archivo se usa una sola vez en el sitio. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}

export const img = {
  logo: asset('images/logo-colonette.png'),

  // —— Home ——
  heroBg: asset('images/hero-home.jpg'),
  almond: asset('images/granizado-almendra.png'),
  collectionGranizados: asset('images/granizados-refrescantes.png'),
  collectionCafes: asset('images/cafe.png'),
  collectionMaquinaria: asset('images/maquinas-linea.png'),
  collectionCocteles: asset('images/granizados-tropical.png'),
  machinery: asset('images/img-40.png'),

  // —— Catálogo hero ——
  productsHeroGranizado: asset('images/img-05.png'),
  productsHeroCafe: asset('images/cortado-frio.png'),
  productsHeroBatido: asset('images/batido-oreo.png'),
  productsHeroMaquina: asset('images/img-98.png'),

  // —— Fichas producto ——
  granizados: asset('images/img-06.png'),
  granizadosG1: asset('images/maquina-granizados.png'),
  granizadosG2: asset('images/img-07.png'),

  batidos: asset('images/batidos.png'),
  batidosG1: asset('images/img-08.png'),

  sorbete: asset('images/sorbete.png'),
  sorbeteG1: asset('images/img-10.png'),

  horchata: asset('images/horchata.png'),
  horchataG1: asset('images/carrito-granizados.png'),

  cafe: asset('images/chocolate.png'),
  cafeG1: asset('images/chocolatera.png'),

  te: asset('images/te.png'),
  teG1: asset('images/img-25.png'),

  softIce: asset('images/maquina-sirope.png'),
  softIceG1: asset('images/carrito-frontal.png'),
  softIceG2: asset('images/img-97.png'),

  isotonica: asset('images/isotonica.png'),
  isotonicaG1: asset('images/siropes.png'),

  yogurt: asset('images/yogurt.png'),
  yogurtG1: asset('images/maquina-soft-ice.png'),

  // —— Servicio ——
  serviceHero: asset('images/service-hero-clean.jpg'),
  serviceInstall: asset('images/service-install-clean.jpg'),
  serviceTraining: asset('images/poster-1.png'),

  // —— Contacto ——
  contactHero: asset('images/foto-local-2.jpg'),

  // —— Novedades ——
  newsHero: asset('images/news-granizados-verano.jpg'),
  newsFeatured: asset('images/granizado-almendra.png'),
  newsSoft: asset('images/img-11.png'),
  newsCatalog: asset('images/poster-2.png'),
  newsService: asset('images/img-12.png'),
  newsCafe: asset('images/img-27.png'),
  newsIslands: asset('images/poster-3.png'),

  // —— Extras disponibles para ampliar galerías ——
  spare1: asset('images/img-28.png'),
  spare2: asset('images/img-39.png'),
  spare3: asset('images/producto-polvo.png'),
} as const
