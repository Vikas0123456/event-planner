import { 
  Heart, 
  Briefcase, 
  Cake, 
  Home, 
  UtensilsCrossed, 
  ChefHat,
  Sparkles
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 })
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'A menu as memorable as the day itself. From passed canapés to late-night bites, we create thoughtful food moments that celebrate love in style.',
      number: '01',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for conferences, meetings, and corporate gatherings. Impress your clients with seamless service and memorable food.',
      number: '02',
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate birthdays in style with our festive menus and delightful presentation. Making every moment special and delicious.',
      number: '03',
    },
    {
      icon: Home,
      title: 'House Functions',
      description: 'Intimate gatherings at home deserve the best. We bring restaurant-quality food and impeccable service to your doorstep.',
      number: '04',
    },
    {
      icon: UtensilsCrossed,
      title: 'Buffet Service',
      description: 'Extensive buffet spreads with a variety of cuisines. Perfect for large gatherings with thoughtful presentation and variety.',
      number: '05',
    },
    {
      icon: ChefHat,
      title: 'Live Counters',
      description: 'Interactive live cooking stations where our chefs prepare fresh dishes right before your eyes. An experience in itself.',
      number: '06',
    },
  ]

  return (
    <section id="services" className="section-padding-sm bg-gray-50 relative overflow-hidden">
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
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">What We Offer</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Our</span>
            <span className="block gradient-text-accent mt-2">Services</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            From intimate gatherings to grand celebrations, we offer comprehensive catering solutions for every occasion.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-all duration-1000 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-500 hover:premium-shadow"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                  {service.number}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-sm mb-6 group-hover:bg-gray-900 transition-colors duration-500">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900 tracking-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light">
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
