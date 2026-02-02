import { Award, Users, Heart, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.1 })
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience', sublabel: 'of Excellence' },
    { icon: Users, number: '5000+', label: 'Happy Clients', sublabel: 'Trusted Partners' },
    { icon: Heart, number: '10000+', label: 'Events Catered', sublabel: 'Memorable Moments' },
  ]

  return (
    <section id="about" className="section-padding-sm bg-white relative overflow-hidden">
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
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Our Story</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">About</span>
            <span className="block gradient-text-accent mt-2">Our Journey</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Text Content - Premium Typography */}
          <div 
            ref={textRef}
            className={`space-y-8 transition-all duration-1000 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                We are a <span className="font-medium text-gray-900">boutique catering company</span> that serves up thoughtful menus and moments. Known for personalizing our catering, we craft creative, tasteful, and intuitive culinary experiences.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                Our team of trained chefs and professional staff ensures that every event, from intimate gatherings to grand celebrations, is executed with precision and elegance. We believe in using only the finest ingredients and maintaining the highest standards of hygiene and quality.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                Food should be as <span className="font-medium text-gray-900">comforting as it is beautiful</span>. And events should be as simple as they are stunning.
              </p>
            </div>
          </div>

          {/* Image Placeholder - Premium Design */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-200 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden premium-shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="text-gray-400" size={48} />
                  </div>
                  <span className="text-gray-500 font-display text-xl md:text-2xl font-medium">
                    Our Kitchen
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-gray-200 rounded-sm -z-10" />
          </div>
        </div>

        {/* Stats - Premium Cards */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-1000 delay-300 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 p-8 md:p-10 hover:border-gray-300 transition-all duration-500 hover:premium-shadow"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-sm mb-6 group-hover:bg-gray-900 transition-colors duration-500">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={32} />
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-medium text-lg md:text-xl mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 text-sm font-light">
                    {stat.sublabel}
                  </div>
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
