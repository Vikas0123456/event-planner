import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-gray-900 text-white w-12 h-12 flex items-center justify-center border-2 border-white/20 hover:border-white transition-all duration-300 premium-shadow hover:premium-shadow-lg group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-white transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-white transition-colors duration-300" />
      
      <ArrowUp 
        size={20} 
        className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" 
      />
    </button>
  )
}

export default ScrollToTop

