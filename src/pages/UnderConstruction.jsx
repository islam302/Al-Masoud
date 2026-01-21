import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function UnderConstruction({ t, lang, pageType }) {
  const isRTL = lang === 'ar'

  // Fade in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const content = {
    portfolio: {
      en: {
        pageTitle: 'Portfolio',
        breadcrumbPage: 'Portfolio',
        underConstruction: 'Under Construction',
        message: 'We are preparing our portfolio to showcase our best projects. Coming soon!',
        backHome: 'Back to Home'
      },
      ar: {
        pageTitle: 'معرض الأعمال',
        breadcrumbPage: 'معرض الأعمال',
        underConstruction: 'تحت الإنشاء',
        message: 'نحضّر معرض أعمالنا لعرض أفضل مشاريعنا. قريباً!',
        backHome: 'العودة للرئيسية'
      }
    },
    news: {
      en: {
        pageTitle: 'News & Articles',
        breadcrumbPage: 'News & Articles',
        underConstruction: 'Under Construction',
        message: 'We are working hard to bring you the latest news and articles. Stay tuned!',
        backHome: 'Back to Home'
      },
      ar: {
        pageTitle: 'الأخبار والمقالات',
        breadcrumbPage: 'الأخبار والمقالات',
        underConstruction: 'تحت الإنشاء',
        message: 'نعمل بجد لنقدم لكم آخر الأخبار والمقالات. ترقبونا!',
        backHome: 'العودة للرئيسية'
      }
    },
    tools: {
      en: {
        pageTitle: 'Construction & Finishing Tools',
        breadcrumbPage: 'Construction & Finishing Tools',
        underConstruction: 'Under Construction',
        message: 'We are preparing a comprehensive catalog of construction and finishing tools. Coming soon!',
        backHome: 'Back to Home'
      },
      ar: {
        pageTitle: 'أدوات البناء والتشطيب',
        breadcrumbPage: 'أدوات البناء والتشطيب',
        underConstruction: 'تحت الإنشاء',
        message: 'نحضّر لكم كتالوج شامل لأدوات البناء والتشطيب. قريباً!',
        backHome: 'العودة للرئيسية'
      }
    }
  }

  const c = content[pageType][lang]

  return (
    <div className="under-construction-page">
      {/* Full Page Section */}
      <section className="under-construction-hero">
        <div className="under-construction-bg" style={{ backgroundImage: 'url(/loading.jpg)' }}></div>
        <div className="under-construction-overlay"></div>
        <div className="under-construction-content">
          <div className="breadcrumb fade-in">
            <Link to="/">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
            <span className="breadcrumb-separator">—</span>
            <span className="breadcrumb-current">{c.breadcrumbPage}</span>
          </div>

          <h1 className="under-construction-title fade-in" style={{ animationDelay: '0.2s' }}>{c.pageTitle}</h1>

          <div className="under-construction-icon fade-in" style={{ animationDelay: '0.4s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <h2 className="under-construction-status fade-in" style={{ animationDelay: '0.6s' }}>{c.underConstruction}</h2>

          <p className="under-construction-message fade-in" style={{ animationDelay: '0.8s' }}>{c.message}</p>

          {/* Loading Animation */}
          <div className="loading-dots fade-in" style={{ animationDelay: '1s' }}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Link to="/" className="back-home-btn fade-in" style={{ animationDelay: '1.2s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={isRTL ? "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" : "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}/>
            </svg>
            <span>{c.backHome}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default UnderConstruction
