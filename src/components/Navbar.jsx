import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ lang, toggleLanguage, t }) {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsHidden(true)
      } else {
        // Scrolling up
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`navbar ${isHidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo">
          <span className="logo-text">AL MASOUD</span>
          <span className="logo-subtext">GENERAL CONTRACTING</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t.home}</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t.aboutUs}</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t.services}</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>{t.portfolio}</Link></li>
          <li><Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>{t.news}</Link></li>
          <li><Link to="/tools" className={location.pathname === '/tools' ? 'active' : ''}>{t.tools}</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t.contact}</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <Link to="/contact" className="cta-button">{t.contactNow}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
