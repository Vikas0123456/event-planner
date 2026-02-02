import { 
  Heart, 
  Briefcase, 
  Cake, 
  Home, 
  UtensilsCrossed, 
  ChefHat 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services. Custom menus tailored to your preferences.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for conferences, meetings, and corporate gatherings. Impress your clients and colleagues.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate birthdays in style with our festive menus and delightful presentation. Fun for all ages!',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Home,
      title: 'House Functions',
      description: 'Intimate gatherings at home deserve the best. We bring restaurant-quality food to your doorstep.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: UtensilsCrossed,
      title: 'Buffet Service',
      description: 'Extensive buffet spreads with a variety of cuisines. Perfect for large gatherings and celebrations.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ChefHat,
      title: 'Live Counters',
      description: 'Interactive live cooking stations where our chefs prepare fresh dishes right before your eyes.',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white/50 to-amber-50/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive catering solutions for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

