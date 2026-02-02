import { 
  Shield, 
  Users, 
  ChefHat, 
  Clock, 
  Flame, 
  Sparkles 
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useMousePosition } from '../hooks/useMousePosition'

const Facilities = () => {
  const [facilitiesRef, facilitiesVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const mousePos = useMousePosition()

  const facilities = [
    {
      icon: Shield,
      title: 'Hygienic Kitchen',
      description: 'Fully sanitized and certified kitchen facilities following strict hygiene protocols and international standards.',
      number: '01',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=90',
      delay: 0,
    },
    {
      icon: Users,
      title: 'Trained Staff',
      description: 'Professional and courteous staff trained in hospitality and food service excellence. Every detail matters.',
      number: '02',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=90',
      delay: 100,
    },
    {
      icon: ChefHat,
      title: 'Custom Menu',
      description: 'Personalized menu planning to match your taste preferences and dietary requirements. Your vision, our execution.',
      number: '03',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=90',
      delay: 200,
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Punctual service guaranteed. We value your time and ensure timely setup and service. Always on schedule.',
      number: '04',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90',
      delay: 300,
    },
    {
      icon: Flame,
      title: 'Live Cooking',
      description: 'Interactive live cooking stations where our chefs prepare fresh dishes on-site. A culinary experience in itself.',
      number: '05',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=90',
      delay: 400,
    },
    {
      icon: Sparkles,
      title: 'Decoration Support',
      description: 'Complete event decoration services to complement your catering experience. We handle every detail.',
      number: '06',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=90',
      delay: 500,
    },
  ]

  return (
    <section id="facilities" className="section-padding-sm bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)`
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-100/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl animate-float-slow" 
        style={{ animationDelay: '1.5s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header - Premium */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            id="facilities"
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight px-4 transition-all duration-1000 delay-200 cursor-pointer hover:scale-105 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => {
              document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <span className="block text-gray-900">Why Choose</span>
            <span className="block gradient-text-accent mt-1 md:mt-2">Us</span>
          </h2>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8 font-light leading-relaxed px-4 transition-all duration-1000 delay-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            We go beyond just food. Our comprehensive services ensure a seamless and memorable experience for every occasion.
          </p>
        </div>

        <div 
          ref={facilitiesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 transition-all duration-1000 ${
            facilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 p-0 hover:border-gray-900 transition-all duration-500 hover:premium-shadow overflow-hidden ${
                  facilitiesVisible ? 'animate-rotate-3d' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${facility.delay}ms`,
                  animationDelay: `${facility.delay}ms`,
                  transform: facilitiesVisible ? `perspective(1000px) rotateY(${mousePos.x * 0.02}deg) rotateX(${-mousePos.y * 0.02}deg)` : 'perspective(1000px) rotateY(-10deg)',
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-5xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-all duration-500 z-10 group-hover:scale-110 group-hover:rotate-12">
                  {facility.number}
                </div>

                {/* Image with Parallax */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    loading="lazy"
                    style={{
                      transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px) scale(1)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  
                  {/* Icon Overlay with 3D Effect */}
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-sm group-hover:bg-gray-900 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-2xl">
                      <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={24} />
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 text-center">
                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                  
                  {/* Title with Text Reveal */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {facility.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
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
