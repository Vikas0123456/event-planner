import { 
  Shield, 
  Users, 
  ChefHat, 
  Clock, 
  Flame, 
  Sparkles 
} from 'lucide-react'

const Facilities = () => {
  const facilities = [
    {
      icon: Shield,
      title: 'Hygienic Kitchen',
      description: 'Fully sanitized and certified kitchen facilities following strict hygiene protocols.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Trained Staff',
      description: 'Professional and courteous staff trained in hospitality and food service excellence.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: ChefHat,
      title: 'Custom Menu',
      description: 'Personalized menu planning to match your taste preferences and dietary requirements.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'On-time Delivery',
      description: 'Punctual service guaranteed. We value your time and ensure timely setup and service.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Flame,
      title: 'Live Cooking',
      description: 'Interactive live cooking stations where chefs prepare fresh dishes on-site.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Decoration Support',
      description: 'Complete event decoration services to complement your catering experience.',
      color: 'from-amber-500 to-yellow-500',
    },
  ]

  return (
    <section id="facilities" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We go beyond just food. Our comprehensive services ensure a seamless and memorable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${facility.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-gray-800">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Facilities

