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

// All site assets to preload before showing the site
const PRELOAD_IMAGES = [
  '/logo.png',
  '/optimized/costraction_background.webp',
  '/optimized/costraction_background2.webp',
  '/optimized/costraction_background3.webp',
  '/optimized/contact_me.webp',
  '/optimized/about.webp',
  '/optimized/loading.webp',
  '/optimized/our_services/1.webp',
  '/optimized/our_services/2.webp',
  '/optimized/our_services/3.webp',
  '/optimized/our_services/4.webp',
  '/optimized/our_services/5.webp',
  '/optimized/our_services/6.webp',
  '/optimized/our_services/8.webp',
]

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(src)
    img.src = src
  })
}

function preloadVideo(src) {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.preload = 'auto'
    video.oncanplaythrough = () => resolve(src)
    video.onerror = () => resolve(src)
    video.src = src
    // Trigger loading
    video.load()
  })
}

function Preloader({ onFinished }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let loaded = 0
    // images + 1 video
    const total = PRELOAD_IMAGES.length + 1

    const tick = () => {
      loaded++
      setProgress(Math.round((loaded / total) * 100))
    }

    const imagePromises = PRELOAD_IMAGES.map((src) =>
      preloadImage(src).then(tick)
    )

    const videoPromise = preloadVideo('/background.mp4').then(tick)

    Promise.all([...imagePromises, videoPromise]).then(() => {
      setTimeout(() => setFadeOut(true), 400)
      setTimeout(() => onFinished(), 1100)
    })
  }, [onFinished])

  return (
    <div className={`preloader ${fadeOut ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Spinning ring around logo */}
        <div className="preloader-ring-wrapper">
          <svg className="preloader-ring" viewBox="0 0 160 160">
            <circle className="preloader-ring-bg" cx="80" cy="80" r="72" />
            <circle
              className="preloader-ring-fill"
              cx="80" cy="80" r="72"
              style={{
                strokeDashoffset: 452 - (452 * progress) / 100
              }}
            />
          </svg>
          <img src="/logo.png" alt="Al Masoud" className="preloader-logo" />
        </div>
        <div className="preloader-percentage">{progress}%</div>
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
        <Route path="/" element={<Home t={t} lang={lang} />} />
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
