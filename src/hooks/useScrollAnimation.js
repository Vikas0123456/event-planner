import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay for smoother animation
          setTimeout(() => {
            setIsVisible(true)
          }, options.delay || 0)
          
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (!options.once) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    )

    // Track scroll progress for parallax effects
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
        setScrollProgress(progress)
      }
    }

    if (elementRef.current) {
      observer.observe(elementRef.current)
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [options.threshold, options.rootMargin, options.once, options.delay])

  return [elementRef, isVisible, scrollProgress]
}

