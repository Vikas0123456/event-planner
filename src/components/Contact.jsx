import { MessageCircle, Phone, Mail, MapPin, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')
  
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Save contact to localStorage and download JSON
  const saveContactToJSON = (contactData) => {
    try {
      const existingContacts = JSON.parse(
        localStorage.getItem('catering_contacts') || '[]'
      )

      const newContact = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...contactData,
      }

      existingContacts.push(newContact)
      localStorage.setItem('catering_contacts', JSON.stringify(existingContacts))

      const dataStr = JSON.stringify(existingContacts, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `contacts_${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      return newContact
    } catch (error) {
      console.error('Error saving contact:', error)
      throw error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.name || !formData.email || !formData.phone) {
        setToastMessage('Please fill in all required fields (Name, Email, Phone).')
        setToastType('error')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 5000)
        setIsSubmitting(false)
        return
      }

      const savedContact = saveContactToJSON({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType || null,
        eventDate: formData.eventDate || null,
        message: formData.message || null,
      })

      setToastMessage('Contact saved successfully! JSON file downloaded.')
      setToastType('success')
      setShowToast(true)

      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      })

      setTimeout(() => setShowToast(false), 5000)
    } catch (error) {
      console.error('Error saving contact:', error)
      setToastMessage('Failed to save contact. Please try again.')
      setToastType('error')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917067059611', '_blank')
  }

  return (
    <section id="contact" className="section-padding-sm bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Premium */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-6">
            <Sparkles size={14} className="text-amber-600" />
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Connect With Us</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Get In</span>
            <span className="block gradient-text-accent mt-2">Touch</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Have an event coming up? Let's discuss how we can make it special and memorable.
          </p>
        </div>

        <div 
          ref={contactRef}
          className={`grid md:grid-cols-2 gap-10 lg:gap-16 transition-all duration-1000 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="relative bg-white border border-gray-200 p-8 md:p-10 premium-shadow">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200" />

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-gray-900 tracking-tight">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <Phone className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">Phone</div>
                    <a href="tel:+917067059611" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                      +91 7067059611
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <Mail className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">Email</div>
                    <a href="mailto:info@premiumcatering.com" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                      info@premiumcatering.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center">
                    <MapPin className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide">Address</div>
                    <p className="text-gray-600 font-light leading-relaxed">
                      123 Catering Street,<br />
                      Food District, City - 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button - Premium */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full relative bg-white border-2 border-gray-900 p-8 hover:bg-gray-900 transition-all duration-300 premium-shadow hover:premium-shadow-lg group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-900 group-hover:border-white transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-900 group-hover:border-white transition-colors duration-300" />

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <MessageCircle className="text-white group-hover:text-gray-900 transition-colors duration-300" size={32} />
                </div>
                <div className="text-left">
                  <div className="text-xl font-display font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-1">
                    Chat With Us on WhatsApp
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300 font-light">
                    Get instant responses and quick quotes
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Contact Form - Premium */}
          <div className="relative bg-white border border-gray-200 p-8 md:p-10 premium-shadow">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200" />

            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-gray-900 tracking-tight">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white font-light"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white font-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white font-light"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventType" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white font-light"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="house-function">House Function</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all bg-white font-light"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all resize-none bg-white font-light"
                  placeholder="Tell us about your event requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-6 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900 hover:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Toast Notification - Premium */}
        {showToast && (
          <div className={`fixed bottom-6 right-6 ${
            toastType === 'success' ? 'bg-gray-900' : 'bg-red-600'
          } text-white px-6 py-4 premium-shadow-lg z-50 animate-slide-up max-w-md`}>
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center flex-shrink-0`}>
                <span className="text-xs font-bold">{toastType === 'success' ? '✓' : '✕'}</span>
              </div>
              <span className="text-sm font-light">{toastMessage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
