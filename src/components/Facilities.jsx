import { 
  Shield, 
  Users, 
  ChefHat, 
  Clock, 
  Flame, 
  Sparkles 
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Facilities = () => {
  const [facilitiesRef, facilitiesVisible] = useScrollAnimation({ threshold: 0.1 })

  const facilities = [
    {
      icon: Shield,
      title: 'Hygienic Kitchen',
      description: 'Fully sanitized and certified kitchen facilities following strict hygiene protocols and international standards.',
      number: '01',
    },
    {
      icon: Users,
      title: 'Trained Staff',
      description: 'Professional and courteous staff trained in hospitality and food service excellence. Every detail matters.',
      number: '02',
    },
    {
      icon: ChefHat,
      title: 'Custom Menu',
      description: 'Personalized menu planning to match your taste preferences and dietary requirements. Your vision, our execution.',
      number: '03',
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Punctual service guaranteed. We value your time and ensure timely setup and service. Always on schedule.',
      number: '04',
    },
    {
      icon: Flame,
      title: 'Live Cooking',
      description: 'Interactive live cooking stations where our chefs prepare fresh dishes on-site. A culinary experience in itself.',
      number: '05',
    },
    {
      icon: Sparkles,
      title: 'Decoration Support',
      description: 'Complete event decoration services to complement your catering experience. We handle every detail.',
      number: '06',
    },
  ]

  return (
    <section id="facilities" className="section-padding-sm bg-white relative overflow-hidden">
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
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Our Promise</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Why Choose</span>
            <span className="block gradient-text-accent mt-2">Us</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            We go beyond just food. Our comprehensive services ensure a seamless and memorable experience for every occasion.
          </p>
        </div>

        <div 
          ref={facilitiesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-all duration-1000 ${
            facilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 p-8 md:p-10 text-center hover:border-gray-900 transition-all duration-500 hover:premium-shadow"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-5xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                  {facility.number}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-sm mb-6 group-hover:bg-gray-900 transition-colors duration-500">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={40} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-gray-900 tracking-tight">
                    {facility.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light">
                    {facility.description}
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

export default Facilities
