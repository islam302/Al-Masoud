import { useState, useEffect, useRef } from 'react'

function LazyBackgroundImage({ src, placeholder, className, children, style = {}, priority = false }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Start true if priority
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false)
  const ref = useRef(null)

  // Generate placeholder path if not provided
  const placeholderSrc = placeholder || src.replace(/\.(jpg|jpeg|png|webp)$/i, '-placeholder.webp')

  useEffect(() => {
    // Skip observer if priority - load immediately
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Increased margin for earlier loading
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [priority])

  // Load placeholder immediately (it's tiny)
  useEffect(() => {
    const img = new Image()
    img.src = placeholderSrc
    img.onload = () => setPlaceholderLoaded(true)
  }, [placeholderSrc])

  // Load full image when in view
  useEffect(() => {
    if (!isInView) return

    const img = new Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
  }, [isInView, src])

  // Determine which image to show
  const getBackgroundImage = () => {
    if (isLoaded) return `url(${src})`
    if (placeholderLoaded) return `url(${placeholderSrc})`
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isLoaded ? 'bg-loaded' : placeholderLoaded ? 'bg-placeholder' : 'bg-loading'}`}
      style={{
        ...style,
        backgroundImage: getBackgroundImage()
      }}
    >
      {children}
    </div>
  )
}

export default LazyBackgroundImage
