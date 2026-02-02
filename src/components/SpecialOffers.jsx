import { Sparkles, Clock, Gift, Percent } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SpecialOffers = () => {
  const [offersRef, offersVisible] = useScrollAnimation({ threshold: 0.1 })

  const offers = [
    {
      icon: Sparkles,
      title: 'Wedding Season Special',
      discount: '20%',
      description: 'Book your wedding catering now and get 20% off on all packages. Limited time offer for the wedding season.',
      validUntil: 'Valid until March 2024',
      number: '01',
    },
    {
      icon: Gift,
      title: 'Festival Offers',
      discount: '15%',
      description: 'Celebrate festivals with our special packages. Custom menus available for all occasions throughout the year.',
      validUntil: 'Ongoing',
      number: '02',
    },
    {
      icon: Clock,
      title: 'Early Bird Discount',
      discount: '10%',
      description: 'Book your event 30 days in advance and enjoy 10% discount on total billing. Plan ahead and save more.',
      validUntil: 'Always Available',
      number: '03',
    },
  ]

  return (
    <section id="offers" className="section-padding-sm bg-gray-50 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6">
            <Sparkles size={14} className="text-amber-600" />
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Exclusive Deals</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Special</span>
            <span className="block gradient-text-accent mt-2">Offers</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Don't miss out on our exclusive deals and limited-time offers designed to make your celebrations even more special.
          </p>
        </div>

        <div 
          ref={offersRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-all duration-1000 ${
            offersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 p-8 md:p-10 hover:border-gray-900 transition-all duration-500 hover:premium-shadow"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                  {offer.number}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-sm mb-6 group-hover:bg-gray-900 transition-colors duration-500">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                        {offer.discount}
                      </span>
                      <Percent className="text-3xl text-gray-400" size={32} />
                    </div>
                    <span className="text-sm text-gray-500 font-light uppercase tracking-wide">Off</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900 tracking-tight">
                    {offer.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {offer.description}
                  </p>
                  
                  {/* Valid Until */}
                  <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Clock size={16} className="mr-2" />
                    <span className="font-light">{offer.validUntil}</span>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={() => window.open('https://wa.me/917067059611', '_blank')}
                    className="w-full bg-gray-900 text-white px-6 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900 hover:border-gray-800 group/btn"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Claim Offer</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
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
