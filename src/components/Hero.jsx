import { useState, useEffect } from 'react'
import { MessageCircle, Calendar, ArrowDown } from 'lucide-react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917067059611', '_blank')
  }

  const handleBookNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-amber-500/20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 py-20 md:py-32">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">Premium Catering Services</span>
            <br />
            <span className="text-gray-800">For Every Occasion</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience luxury dining with our exquisite menus, trained chefs, and impeccable service. 
            Making your special moments unforgettable, one dish at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
            <button
              onClick={handleBookNow}
              className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Calendar size={24} />
              <span>Book Now</span>
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="group glass px-8 py-4 rounded-full font-semibold text-lg text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center border-2 border-green-500/20 hover:border-green-500/40"
            >
              <MessageCircle size={24} className="text-green-600" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

