import { Award, Users, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useParallax } from '../hooks/useParallax'
import { useMousePosition } from '../hooks/useMousePosition'

const About = () => {
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 })
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const parallaxOffset = useParallax(0.3)
  const mousePos = useMousePosition()

  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience', sublabel: 'of Excellence', delay: 0 },
    { icon: Users, number: '5000+', label: 'Happy Clients', sublabel: 'Trusted Partners', delay: 100 },
    { icon: Heart, number: '10000+', label: 'Events Catered', sublabel: 'Memorable Moments', delay: 200 },
  ]

  // High-quality images
  const aboutImages = [
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90',
  ]

  return (
    <section id="about" className="section-padding-sm bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl animate-float-slow" 
        style={{ transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)` }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl animate-float" 
        style={{ transform: `translate(${-mousePos.x * 0.15}px, ${-mousePos.y * 0.15}px)`, animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header - Premium with Text Reveal */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            id="about"
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight px-4 transition-all duration-1000 delay-200 cursor-pointer hover:scale-105 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            <span className="block text-gray-900">About</span>
            <span className="block gradient-text-accent mt-1 md:mt-2">Our Journey</span>
          </h2>
          <div className={`w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto transition-all duration-1000 delay-500 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Text Content - Premium Typography with Slide Rotate */}
          <div 
            ref={textRef}
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              textVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-20 rotate-[-5deg]'
            }`}
          >
            <div className="space-y-4 md:space-y-6">
              <p className={`text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light transition-all duration-1000 delay-100 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                We are a <span className="font-medium text-gray-900 relative inline-block">
                  <span className="absolute inset-0 bg-amber-200/20 transform -skew-x-12 -z-10" />
                  boutique catering company
                </span> that serves up thoughtful menus and moments. Known for personalizing our catering, we craft creative, tasteful, and intuitive culinary experiences.
              </p>
              <p className={`text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light transition-all duration-1000 delay-200 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Our team of trained chefs and professional staff ensures that every event, from intimate gatherings to grand celebrations, is executed with precision and elegance. We believe in using only the finest ingredients and maintaining the highest standards of hygiene and quality.
              </p>
              <p className={`text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed font-light transition-all duration-1000 delay-300 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Food should be as <span className="font-medium text-gray-900">comforting as it is beautiful</span>. And events should be as simple as they are stunning.
              </p>
            </div>
          </div>

          {/* Image Gallery - Premium Design with 3D Rotate */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-200 ${
              imageVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-[5deg]'
            }`}
            style={{
              transform: imageVisible ? `perspective(1000px) rotateY(${mousePos.x * 0.05}deg) rotateX(${-mousePos.y * 0.05}deg)` : 'perspective(1000px) rotateY(10deg)',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className={`relative aspect-square rounded-sm overflow-hidden premium-shadow-lg transition-all duration-1000 delay-300 ${
                imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <img
                  src={aboutImages[0]}
                  alt="Our Kitchen"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className={`relative aspect-square rounded-sm overflow-hidden premium-shadow-lg mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
                imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <img
                  src={aboutImages[1]}
                  alt="Our Team"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            {/* Decorative Frame with Animation */}
            <div className={`absolute -inset-3 md:-inset-4 border-2 border-gray-200 rounded-sm -z-10 transition-all duration-1000 delay-700 ${
              imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} />
          </div>
        </div>

        {/* Stats - Premium Cards with Bounce In */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 p-6 md:p-8 lg:p-10 hover:border-gray-900 transition-all duration-500 hover:premium-shadow hover:scale-105 ${
                  statsVisible ? 'animate-bounce-in' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${stat.delay}ms`,
                  animationDelay: `${stat.delay}ms`
                }}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-200 group-hover:border-gray-900 transition-colors duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-20 bg-gray-100 rounded-sm mb-4 md:mb-6 group-hover:bg-gray-900 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-medium text-base md:text-lg lg:text-xl mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm font-light">
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
