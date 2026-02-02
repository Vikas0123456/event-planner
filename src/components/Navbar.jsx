import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offers', href: '#offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917067059611', '_blank')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50'
          : 'bg-black/20 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo - Premium */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? 'bg-gray-900' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className={`font-display font-bold text-lg md:text-xl transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>C</span>
            </div>
            <span className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Catering
            </span>
          </a>

          {/* Desktop Navigation - Premium */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } group-hover:w-full`} />
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className={`px-5 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 flex items-center space-x-2 ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/30'
              }`}
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Premium */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden backdrop-blur-xl border-t ${
            isScrolled 
              ? 'bg-white/98 border-gray-200' 
              : 'bg-black/90 border-white/20'
          }`}>
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium py-3 text-xs tracking-wide uppercase transition-colors border-b last:border-0 ${
                    isScrolled
                      ? 'text-gray-900 hover:text-gray-700 border-gray-100'
                      : 'text-white hover:text-white/80 border-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsAppClick()
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full px-6 py-3 text-xs font-medium tracking-wide uppercase transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 mt-4 border-2 ${
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800 border-gray-900'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30'
                }`}
              >
                <Phone size={18} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
