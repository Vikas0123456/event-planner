import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'

const AboutPage = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to about section when page loads
    const element = document.getElementById('about')
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <About />
    </div>
  )
}

export default AboutPage

