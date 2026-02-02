import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useMousePosition } from '../hooks/useMousePosition'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const mousePos = useMousePosition()

  // High-quality images - more images added
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90', alt: 'Elegant Wedding Catering Setup' },
    { id: 2, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=90', alt: 'Premium Buffet Spread' },
    { id: 3, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=90', alt: 'Gourmet Food Presentation' },
    { id: 4, url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90', alt: 'Live Cooking Counter' },
    { id: 5, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90', alt: 'Fine Dining Experience' },
    { id: 6, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90', alt: 'Restaurant Setup' },
    { id: 7, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90', alt: 'Corporate Event Catering' },
    { id: 8, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=90', alt: 'Birthday Party Service' },
    { id: 9, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=90', alt: 'Special Occasion Catering' },
    { id: 10, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90', alt: 'House Function Setup' },
    { id: 11, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90', alt: 'Festive Celebration' },
    { id: 12, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90', alt: 'Luxury Event Catering' },
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
    <section id="gallery" className="section-padding-sm bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-100/10 rounded-full blur-3xl animate-float-slow" 
        style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header - Premium */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            id="gallery"
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight px-4 transition-all duration-1000 delay-200 cursor-pointer hover:scale-105 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <span className="block text-gray-900">Our</span>
            <span className="block gradient-text-accent mt-1 md:mt-2">Work</span>
          </h2>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8 font-light leading-relaxed px-4 transition-all duration-1000 delay-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            A glimpse into our beautifully crafted events and culinary masterpieces.
          </p>
        </div>

        <div 
          ref={galleryRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 transition-all duration-1000 ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square overflow-hidden cursor-pointer premium-shadow hover:premium-shadow-lg transition-all duration-500 ${
                galleryVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
              onClick={() => openLightbox(image)}
              style={{
                transitionDelay: `${index * 30}ms`,
                animationDelay: `${index * 30}ms`,
                transform: galleryVisible ? `perspective(1000px) rotateX(${mousePos.y * 0.01}deg) rotateY(${mousePos.x * 0.01}deg)` : 'perspective(1000px) rotateX(5deg)',
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-3 md:p-4 font-medium text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
              {/* Decorative Corner on Hover */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/0 group-hover:border-white/50 transition-all duration-300" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* Lightbox - Premium with 3D Effect */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-sm p-2 hover:bg-black/70 hover:rotate-90"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 md:left-6 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-sm p-2 hover:bg-black/70 hover:-translate-x-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 md:right-6 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-sm p-2 hover:bg-black/70 hover:translate-x-2"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <div
              className="max-w-6xl max-h-[90vh] animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
