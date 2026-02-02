import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    }, 5000)
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
    <section id="testimonials" className="section-padding bg-gradient-to-b from-amber-50/50 to-white/50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="glass rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-red-500" size={48} />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-amber-400 text-amber-400"
                    size={24}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-red-500/20"
                />
                <div className="text-left">
                  <div className="font-display font-bold text-lg text-gray-800">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-700" size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-700" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-red-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
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

