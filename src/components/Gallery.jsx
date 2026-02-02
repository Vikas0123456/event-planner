import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder images - replace with actual image URLs
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', alt: 'Wedding Catering' },
    { id: 2, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', alt: 'Buffet Spread' },
    { id: 3, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800', alt: 'Gourmet Dishes' },
    { id: 4, url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800', alt: 'Live Counter' },
    { id: 5, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', alt: 'Food Presentation' },
    { id: 6, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', alt: 'Restaurant Setup' },
    { id: 7, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', alt: 'Event Setup' },
    { id: 8, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', alt: 'Catering Service' },
    { id: 9, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800', alt: 'Special Occasion' },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }
    setSelectedImage(images[newIndex])
  }

  return (
    <section id="gallery" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Our Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our beautifully crafted events and culinary masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 text-white hover:text-red-500 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 text-white hover:text-red-500 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            <div
              className="max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

