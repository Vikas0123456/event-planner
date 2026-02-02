import { Sparkles, Clock, Gift } from 'lucide-react'

const SpecialOffers = () => {
  const offers = [
    {
      icon: Sparkles,
      title: 'Wedding Season Special',
      discount: '20% OFF',
      description: 'Book your wedding catering now and get 20% off on all packages. Limited time offer!',
      validUntil: 'Valid until March 2024',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Gift,
      title: 'Festival Offers',
      discount: '15% OFF',
      description: 'Celebrate festivals with our special packages. Custom menus available for all occasions.',
      validUntil: 'Ongoing',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Clock,
      title: 'Early Bird Discount',
      discount: '10% OFF',
      description: 'Book your event 30 days in advance and enjoy 10% discount on total billing.',
      validUntil: 'Always Available',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section id="offers" className="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Special Offers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and limited-time offers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div
                key={index}
                className="relative glass rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Decorative Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-full blur-3xl -z-0`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${offer.color} rounded-2xl mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block text-3xl md:text-4xl font-display font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                      {offer.discount}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-gray-800">
                    {offer.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{offer.validUntil}</span>
                  </div>
                  
                  <button
                    onClick={() => window.open('https://wa.me/917067059611', '_blank')}
                    className="mt-6 w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers

