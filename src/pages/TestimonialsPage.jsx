import { useEffect } from 'react'
import Testimonials from '../components/Testimonials'

const TestimonialsPage = () => {
  useEffect(() => {
    // Scroll to testimonials section when page loads
    const element = document.getElementById('testimonials')
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  return (
    <div className="pt-16 md:pt-20 min-h-screen pb-20">
      <Testimonials />
    </div>
  )
}

export default TestimonialsPage

