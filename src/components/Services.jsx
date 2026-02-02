import { 
  Heart, 
  Briefcase, 
  Cake, 
  Home, 
  UtensilsCrossed, 
  ChefHat
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useMousePosition } from '../hooks/useMousePosition'

const Services = () => {
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const mousePos = useMousePosition()

  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'A menu as memorable as the day itself. From passed canapés to late-night bites, we create thoughtful food moments that celebrate love in style.',
      number: '01',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=90',
      delay: 0,
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for conferences, meetings, and corporate gatherings. Impress your clients with seamless service and memorable food.',
      number: '02',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=90',
      delay: 100,
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate birthdays in style with our festive menus and delightful presentation. Making every moment special and delicious.',
      number: '03',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=90',
      delay: 200,
    },
    {
      icon: Home,
      title: 'House Functions',
      description: 'Intimate gatherings at home deserve the best. We bring restaurant-quality food and impeccable service to your doorstep.',
      number: '04',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90',
      delay: 300,
    },
    {
      icon: UtensilsCrossed,
      title: 'Buffet Service',
      description: 'Extensive buffet spreads with a variety of cuisines. Perfect for large gatherings with thoughtful presentation and variety.',
      number: '05',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=90',
      delay: 400,
    },
    {
      icon: ChefHat,
      title: 'Live Counters',
      description: 'Interactive live cooking stations where our chefs prepare fresh dishes right before your eyes. An experience in itself.',
      number: '06',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=90',
      delay: 500,
    },
  ]

  return (
    <section id="services" className="section-padding-sm bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl animate-float-slow" 
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
            id="services"
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight px-4 transition-all duration-1000 delay-200 cursor-pointer hover:scale-105 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <span className="block text-gray-900">Our</span>
            <span className="block gradient-text-accent mt-1 md:mt-2">Services</span>
          </h2>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8 font-light leading-relaxed px-4 transition-all duration-1000 delay-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            From intimate gatherings to grand celebrations, we offer comprehensive catering solutions for every occasion.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 transition-all duration-1000 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 hover:border-gray-900 transition-all duration-500 hover:premium-shadow overflow-hidden ${
                  servicesVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${service.delay}ms`,
                  animationDelay: `${service.delay}ms`,
                  transform: servicesVisible ? `perspective(1000px) rotateY(${mousePos.x * 0.02}deg)` : 'perspective(1000px) rotateY(10deg)',
                }}
              >
                {/* Number Badge with Glow */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-all duration-500 z-10 group-hover:scale-110">
                  {service.number}
                </div>

                {/* Image with Parallax Effect */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    loading="lazy"
                    style={{
                      transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px) scale(1)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  
                  {/* Icon Overlay with 3D Rotate */}
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-sm group-hover:bg-gray-900 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={24} />
                    </div>
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                  
                  {/* Title with Text Reveal */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4 text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
