import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917067059611', '_blank')
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offers', href: '#offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'House Functions',
    'Buffet Service',
    'Live Counters',
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                <span className="text-gray-900 font-display font-bold text-xl">C</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Catering</span>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed font-light text-sm">
              Premium catering services for every occasion. Making your special moments 
              unforgettable with exquisite food and impeccable service.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <Icon className="text-white/70 group-hover:text-white transition-colors" size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center mt-0.5">
                  <Phone className="text-white/70" size={16} />
                </div>
                <div>
                  <a href="tel:+917067059611" className="text-white/70 hover:text-white transition-colors text-sm font-light block">
                    +91 7067059611
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center mt-0.5">
                  <Mail className="text-white/70" size={16} />
                </div>
                <div>
                  <a href="mailto:info@premiumcatering.com" className="text-white/70 hover:text-white transition-colors text-sm font-light block">
                    info@premiumcatering.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center mt-0.5">
                  <MapPin className="text-white/70" size={16} />
                </div>
                <div>
                  <span className="text-white/70 text-sm font-light leading-relaxed block">
                    123 Catering Street,<br />
                    Food District, City - 123456
                  </span>
                </div>
              </li>
            </ul>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-white text-gray-900 px-4 py-3 text-sm font-medium tracking-wide uppercase hover:bg-white/90 transition-all duration-300 border-2 border-white hover:border-white/90 flex items-center justify-center space-x-2 group"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-xs font-light uppercase tracking-wide">
              © {currentYear} Premium Catering Services. All rights reserved.
            </p>
            <div className="flex space-x-8 text-xs text-white/60 font-light uppercase tracking-wide">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10" />
    </footer>
  )
}

export default Footer
