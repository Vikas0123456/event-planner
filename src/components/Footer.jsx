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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">C</span>
              </div>
              <span className="font-display font-bold text-2xl">Catering</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium catering services for every occasion. Making your special moments 
              unforgettable with exquisite food and impeccable service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <a href="tel:+917067059611" className="text-gray-400 hover:text-red-400 transition-colors">
                  +91 7067059611
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <a href="mailto:info@premiumcatering.com" className="text-gray-400 hover:text-red-400 transition-colors">
                  info@premiumcatering.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Catering Street,<br />
                  Food District, City - 123456
                </span>
              </li>
            </ul>
            
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Premium Catering Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

