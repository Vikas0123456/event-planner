import { Award, Users, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Heart, number: '10000+', label: 'Events Catered' },
  ]

  return (
    <section id="about" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are a premium catering service dedicated to making your special occasions 
              unforgettable. With over 15 years of experience, we've perfected the art of 
              creating exquisite culinary experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our team of trained chefs and professional staff ensures that every event, 
              from intimate gatherings to grand celebrations, is executed with precision 
              and elegance. We believe in using only the finest ingredients and maintaining 
              the highest standards of hygiene and quality.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Trusted by thousands of clients, we take pride in delivering exceptional 
              service that exceeds expectations. Your satisfaction is our success.
            </p>
          </div>

          {/* Image Placeholder with Glass Effect */}
          <div className="relative animate-slide-in-right">
            <div className="glass rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-red-400 via-orange-400 to-amber-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-display text-2xl md:text-3xl font-bold">
                  Our Kitchen
                </span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-300/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-300/30 rounded-full blur-2xl -z-10" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

