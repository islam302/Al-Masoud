import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home({ t }) {
  // Fade in animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.hero-fade-in')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('hero-fade-in-visible')
        }, index * 200)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title hero-fade-in">{t.companyName}</h1>
          <p className="hero-subtitle hero-fade-in">{t.companySubtitle}</p>
          <p className="hero-tagline hero-fade-in">{t.tagline}</p>
          <p className="hero-description hero-fade-in">{t.description}</p>
          <Link to="/portfolio" className="hero-cta-btn hero-fade-in">{t.browseProjects}</Link>
        </div>

        {/* Slider Navigation */}
        <button className="slider-nav slider-prev hero-fade-in">
          <span>&#8249;</span>
        </button>
        <button className="slider-nav slider-next hero-fade-in">
          <span>&#8250;</span>
        </button>
      </section>
    </>
  )
}

export default Home
