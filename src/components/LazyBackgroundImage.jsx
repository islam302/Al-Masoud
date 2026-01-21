import { useState, useEffect, useRef } from 'react'

function LazyBackgroundImage({ src, className, children, style = {} }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const img = new Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
  }, [isInView, src])

  return (
    <div
      ref={ref}
      className={`${className} ${isLoaded ? 'bg-loaded' : 'bg-loading'}`}
      style={{
        ...style,
        backgroundImage: isLoaded ? `url(${src})` : 'none'
      }}
    >
      {children}
    </div>
  )
}

export default LazyBackgroundImage
