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
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
