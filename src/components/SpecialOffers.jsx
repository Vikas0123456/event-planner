import { Sparkles, Clock, Gift } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useMousePosition } from '../hooks/useMousePosition'

const SpecialOffers = () => {
  const [offersRef, offersVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const mousePos = useMousePosition()

  const offers = [
    {
      icon: Sparkles,
      title: 'Wedding Season Special',
      discount: '20%',
      description: 'Book your wedding catering now and get 20% off on all packages. Limited time offer for the wedding season.',
      validUntil: 'Valid until March 2024',
      number: '01',
      delay: 0,
    },
    {
      icon: Gift,
      title: 'Festival Offers',
      discount: '15%',
      description: 'Celebrate festivals with our special packages. Custom menus available for all occasions throughout the year.',
      validUntil: 'Ongoing',
      number: '02',
      delay: 150,
    },
    {
      icon: Clock,
      title: 'Early Bird Discount',
      discount: '10%',
      description: 'Book your event 30 days in advance and enjoy 10% discount on total billing. Plan ahead and save more.',
      validUntil: 'Always Available',
      number: '03',
      delay: 300,
    },
  ]

  return (
    <section id="offers" className="section-padding-sm bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl animate-float-slow" 
        style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header - Premium */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            id="offers"
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight px-4 transition-all duration-1000 delay-200 cursor-pointer hover:scale-105 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => {
              document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <span className="block text-gray-900">Special</span>
            <span className="block gradient-text-accent mt-1 md:mt-2">Offers</span>
          </h2>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8 font-light leading-relaxed px-4 transition-all duration-1000 delay-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Don't miss out on our exclusive deals and limited-time offers designed to make your celebrations even more special.
          </p>
        </div>

        <div 
          ref={offersRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 transition-all duration-1000 ${
            offersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 p-8 md:p-10 hover:border-gray-900 transition-all duration-500 hover:premium-shadow hover:scale-105 ${
                  offersVisible ? 'animate-bounce-in' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${offer.delay}ms`,
                  animationDelay: `${offer.delay}ms`,
                  transform: offersVisible ? `perspective(1000px) rotateY(${mousePos.x * 0.02}deg)` : 'perspective(1000px) rotateY(-10deg)',
                }}
              >
                {/* Number Badge with Glow */}
                <div className="absolute top-6 right-6 text-6xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-glow-pulse">
                  {offer.number}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500 group-hover:scale-150" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  {/* Icon with 3D Rotate */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-sm mb-6 group-hover:bg-gray-900 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-2xl">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                  
                  {/* Discount Badge with Zoom */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-display font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        {offer.discount}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 font-light uppercase tracking-wide">Off</span>
                  </div>
                  
                  {/* Title with Text Reveal */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {offer.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                    {offer.description}
                  </p>
                  
                  {/* Valid Until */}
                  <div className="flex items-center text-sm text-gray-500 mb-8 group-hover:text-gray-600 transition-colors duration-300">
                    <Clock size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-light">{offer.validUntil}</span>
                  </div>
                  
                  {/* CTA Button with Shimmer */}
                  <button
                    onClick={() => window.open('https://wa.me/917067059612', '_blank')}
                    className="relative w-full bg-gray-900 text-white px-6 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900 hover:border-gray-800 group/btn overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Claim Offer</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
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
