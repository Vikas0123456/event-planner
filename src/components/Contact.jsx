import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

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
  const [toastType, setToastType] = useState('success') // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Save contact to localStorage and download JSON
  const saveContactToJSON = (contactData) => {
    try {
      // Get existing contacts from localStorage
      const existingContacts = JSON.parse(
        localStorage.getItem('catering_contacts') || '[]'
      )

      // Create new contact with ID and timestamp
      const newContact = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...contactData,
      }

      // Add new contact to array
      existingContacts.push(newContact)

      // Save back to localStorage
      localStorage.setItem('catering_contacts', JSON.stringify(existingContacts))

      // Download JSON file
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
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        setToastMessage('Please fill in all required fields (Name, Email, Phone).')
        setToastType('error')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 5000)
        setIsSubmitting(false)
        return
      }

      // Save to localStorage and download JSON
      const savedContact = saveContactToJSON({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType || null,
        eventDate: formData.eventDate || null,
        message: formData.message || null,
      })

      // Success
      setToastMessage('Contact saved successfully! JSON file downloaded.')
      setToastType('success')
      setShowToast(true)

      // Reset form
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
      // Error handling
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
    window.open('https://wa.me/917067059612', '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have an event coming up? Let's discuss how we can make it special!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Phone</div>
                    <a href="tel:+917067059612" className="text-gray-600 hover:text-red-600 transition-colors">
                      +91 7067059612
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Email</div>
                    <a href="mailto:info@premiumcatering.com" className="text-gray-600 hover:text-red-600 transition-colors">
                      info@premiumcatering.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Address</div>
                    <p className="text-gray-600">
                      123 Catering Street,<br />
                      Food District, City - 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full glass rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-500/30 hover:border-green-500/50"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold text-gray-800 mb-1">
                    👉 Chat With Us on WhatsApp
                  </div>
                  <div className="text-gray-600 text-sm">
                    Get instant responses and quick quotes
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-display font-bold mb-6 text-gray-800">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your event requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-4 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className={`fixed bottom-4 right-4 ${
            toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-6 py-4 rounded-lg shadow-2xl animate-slide-up z-50 max-w-md`}>
            <div className="flex items-center space-x-2">
              <div className={`w-5 h-5 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-xs">{toastType === 'success' ? '✓' : '✕'}</span>
              </div>
              <span>{toastMessage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

