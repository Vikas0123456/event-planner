import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import SpecialOffers from '../components/SpecialOffers'
import Facilities from '../components/Facilities'
import Contact from '../components/Contact'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // If no hash, scroll to top (for Home link)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash, location.pathname])

  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <SpecialOffers />
      <Facilities />
      <Contact />
    </>
  )
}

export default Home

