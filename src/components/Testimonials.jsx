import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialRef, testimonialVisible] = useScrollAnimation({ threshold: 0.2 })

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Client',
      rating: 5,
      text: 'Absolutely amazing service! The food was delicious and the presentation was outstanding. Our guests couldn\'t stop praising the catering. Highly recommended!',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Corporate Event Organizer',
      rating: 5,
      text: 'Professional, punctual, and perfect! They handled our corporate event flawlessly. The live counters were a huge hit. Will definitely work with them again.',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Anita Mehta',
      role: 'Birthday Party Host',
      rating: 5,
      text: 'Made my daughter\'s birthday party extra special! The kids loved the food and the staff was so friendly. Thank you for making it memorable!',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Vikram Singh',
      role: 'House Function Host',
      rating: 5,
      text: 'Best catering service in town! The custom menu they created was exactly what we wanted. Clean, hygienic, and absolutely delicious food.',
      image: 'https://i.pravatar.cc/150?img=8',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding-sm bg-gray-50 relative overflow-hidden">
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
            <span className="text-xs font-medium text-gray-600 tracking-wide uppercase">Client Stories</span>
          </div>
          <h2 className="text-display font-display font-bold mb-6 tracking-tight">
            <span className="text-gray-900">What Our Clients</span>
            <span className="block gradient-text-accent mt-2">Say</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div 
          ref={testimonialRef}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Testimonial Card - Premium */}
          <div className="relative bg-white border border-gray-200 p-10 md:p-16 premium-shadow-lg">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-200" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-200" />

            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="text-gray-300" size={56} />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-amber-400 text-amber-400"
                    size={20}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-light max-w-3xl">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-5">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-gray-900/10" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-lg md:text-xl text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-500 text-sm font-light">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Premium */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-50 rounded-sm p-4 premium-shadow hover:premium-shadow-lg transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-600 group-hover:text-gray-900 transition-colors" size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-50 rounded-sm p-4 premium-shadow hover:premium-shadow-lg transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-600 group-hover:text-gray-900 transition-colors" size={24} />
          </button>

          {/* Dots Indicator - Premium */}
          <div className="flex justify-center space-x-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 bg-gray-900'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
