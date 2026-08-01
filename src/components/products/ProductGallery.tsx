import './ProductGallery.css'

type Props = {
  title: string
  images: string[]
  activeIndex: number
  onSelect: (index: number) => void
}

export default function ProductGallery({ title, images, activeIndex, onSelect }: Props) {
  return (
    <div className="gallery">
      <div className="gallery__main">
        <img src={images[activeIndex]} alt={title} />
      </div>
      <div className="gallery__thumbs" role="list">
        {images.map((src, index) => (
          <button
            key={src + index}
            type="button"
            className={index === activeIndex ? 'is-active' : undefined}
            onClick={() => onSelect(index)}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
