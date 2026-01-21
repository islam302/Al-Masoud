import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ lang, toggleLanguage, t }) {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 100)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className={`navbar ${isHidden ? 'navbar-hidden' : ''} ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Al Masoud Logo" className="navbar-logo-img" />
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
            <Link to="/contact" className="cta-button desktop-only">{t.contactNow}</Link>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t.home}</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t.aboutUs}</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t.services}</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>{t.portfolio}</Link></li>
          <li><Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>{t.news}</Link></li>
          <li><Link to="/tools" className={location.pathname === '/tools' ? 'active' : ''}>{t.tools}</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t.contact}</Link></li>
        </ul>
        <Link to="/contact" className="mobile-cta-button">{t.contactNow}</Link>
      </div>
    </>
  )
}

export default Navbar
