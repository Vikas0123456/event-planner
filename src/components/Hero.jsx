import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Calendar, ArrowDown, Sparkles, ChevronRight } from 'lucide-react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imageRefs = useRef([])

  // High-quality catering images
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90',
      alt: 'Elegant Wedding Catering Setup',
      title: 'Wedding Excellence'
    },
    {
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90',
      alt: 'Gourmet Food Presentation',
      title: 'Culinary Artistry'
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90',
      alt: 'Premium Buffet Service',
      title: 'Premium Service'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90',
      alt: 'Fine Dining Experience',
      title: 'Fine Dining'
    },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Preload images
    const imagePromises = heroImages.map((img, index) => {
      return new Promise((resolve) => {
        const image = new Image()
        image.src = img.url
        image.onload = () => {
          if (imageRefs.current[index]) {
            imageRefs.current[index].style.opacity = '1'
          }
          resolve()
        }
      })
    })
    
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
    })
    
    // Auto-rotate images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917067059611', '_blank')
  }

  const handleBookNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
    >
      {/* Image Gallery - Premium Layout */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              transform: `translate(${index === currentImageIndex ? mousePosition.x * 0.1 : 0}px, ${index === currentImageIndex ? mousePosition.y * 0.1 : 0}px) scale(${index === currentImageIndex ? 1.05 : 1})`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease-in-out',
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="eager"
              style={{
                filter: 'brightness(0.4)',
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content - Premium Layout */}
      <div className="relative z-30 container-custom px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Text Content */}
          <div className="text-white space-y-6 animate-fade-in-slow">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2 animate-slide-up">
              <Sparkles size={12} className="text-amber-400" />
              <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
                Premium Culinary Experiences
              </span>
            </div>

            {/* Main Heading - Premium Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              <span className="block text-white mb-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Premium
              </span>
              <span className="block text-white mb-1 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Catering
              </span>
              <span className="block text-amber-400 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                For Every Occasion
              </span>
            </h1>
            
            {/* Subheading - Elegant */}
            <p 
              className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light text-balance max-w-xl animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              Crafting memorable moments through exquisite cuisine, impeccable service, 
              and attention to every detail.
            </p>

            {/* CTA Buttons - Premium Design */}
            <div 
              className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button
                onClick={handleBookNow}
                className="group relative bg-white text-gray-900 px-6 py-3 font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 premium-shadow hover:premium-shadow-lg transform hover:scale-[1.02] flex items-center space-x-2 uppercase"
              >
                <Calendar size={18} />
                <span>Book Now</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="group bg-transparent text-white px-6 py-3 font-medium text-sm tracking-wide border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 premium-shadow hover:premium-shadow-lg transform hover:scale-[1.02] flex items-center space-x-2 uppercase backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right: Image Showcase */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main Featured Image */}
              <div className="absolute inset-0 rounded-sm overflow-hidden premium-shadow-lg">
                <img
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: `scale(1.1) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
                  }}
                />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-white/20 rounded-sm" />
              <div className="absolute -inset-8 border border-white/10 rounded-sm" />
              
              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-display text-xl font-medium">
                  {heroImages[currentImageIndex].title}
                </p>
              </div>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-white/60 hover:text-white transition-colors group"
          >
            <span className="text-xs mb-2 tracking-widest uppercase font-medium">Explore More</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent group-hover:from-white" />
            <ArrowDown size={18} className="mt-1" />
          </a>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10 z-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10 z-20" />
    </section>
  )
}

export default Hero
