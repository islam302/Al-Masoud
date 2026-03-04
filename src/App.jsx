import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import UnderConstruction from './pages/UnderConstruction'

// Critical images to preload before showing the site
const CRITICAL_IMAGES = [
  '/logo.png',
  '/optimized/costraction_background.webp',
  '/optimized/costraction_background3.webp',
  '/optimized/contact_me.webp',
]

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(src) // Don't block on errors
    img.src = src
  })
}

function Preloader({ onFinished }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let loaded = 0
    const total = CRITICAL_IMAGES.length

    // Start with a small base progress for perceived speed
    setProgress(5)

    const promises = CRITICAL_IMAGES.map((src) =>
      preloadImage(src).then(() => {
        loaded++
        setProgress(Math.round((loaded / total) * 90) + 5)
      })
    )

    Promise.all(promises).then(() => {
      setProgress(100)
      // Small delay to let the bar reach 100%, then fade out
      setTimeout(() => setFadeOut(true), 300)
      setTimeout(() => onFinished(), 900) // Match CSS transition duration
    })
  }, [onFinished])

  return (
    <div className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-content">
        <img src="/logo.png" alt="Al Masoud" className="preloader-logo" />
        <div className="preloader-bar-track">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

const translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    services: 'Our Services',
    portfolio: 'Portfolio',
    news: 'News & Articles',
    tools: 'Construction & Finishing Tools',
    contact: 'Contact Us',
    contactNow: 'Contact Us Now',
    companyName: 'Al Masoud',
    companySubtitle: 'General Contracting',
    tagline: 'Where Vision Becomes Reality',
    description: 'With Committed Hearts Before Hands',
    browseProjects: 'Browse Our Projects Now',
  },
  ar: {
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    services: 'خدماتنا',
    portfolio: 'معرض الأعمال',
    news: 'الأخبار والمقالات',
    tools: 'أدوات البناء والتشطيب',
    contact: 'تواصل معنا',
    contactNow: 'تواصل معنا الآن',
    companyName: 'مؤسسة المسعود',
    companySubtitle: 'للمقاولات العامة',
    tagline: 'حيث تتحول الرؤية إلى واقع',
    description: 'بقلوب ملتزمة قبل الأيدي',
    browseProjects: 'تصفح مشاريعنا الان',
  }
}

// Scroll to top on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Force immediate scroll to top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

function AppContent() {
  const [lang, setLang] = useState('ar') // Arabic as default
  const t = translations[lang]
  const isRTL = lang === 'ar'

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en')
  }

  return (
    <div className={`app ${isRTL ? 'rtl' : 'ltr'}`}>
      <ScrollToTopOnNavigate />
      <Navbar lang={lang} toggleLanguage={toggleLanguage} t={t} />

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} lang={lang} />} />
        <Route path="/services" element={<Services t={t} lang={lang} />} />
        <Route path="/contact" element={<Contact t={t} lang={lang} />} />
        <Route path="/portfolio" element={<UnderConstruction t={t} lang={lang} pageType="portfolio" />} />
        <Route path="/news" element={<UnderConstruction t={t} lang={lang} pageType="news" />} />
        <Route path="/tools" element={<UnderConstruction t={t} lang={lang} pageType="tools" />} />
      </Routes>

      <Footer lang={lang} />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <Router>
      {loading && <Preloader onFinished={() => setLoading(false)} />}
      <AppContent />
    </Router>
  )
}

export default App
