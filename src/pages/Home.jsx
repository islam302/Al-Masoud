import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LazyBackgroundImage from '../components/LazyBackgroundImage'
import useScrollReveal from '../hooks/useScrollReveal'

function Home({ t, lang }) {
  const isRTL = lang === 'ar'
  const sectionsRef = useRef(null)

  const content = {
    en: {
      aboutLabel: 'Who We Are',
      aboutHeading: 'The Optimal Partner for General Contracting and Integrated Construction Solutions',
      aboutText: 'We are a specialized contracting company providing integrated solutions in construction and building, with expertise in executing projects to the highest quality standards.',
      learnMore: 'Learn More',
      servicesLabel: 'What We Do',
      servicesHeading: 'Our Integrated Services',
      servicesText: 'Our services are not just construction work, but evidence of our commitment to quality and excellence.',
      viewServices: 'View All Services',
      ctaHeading: 'Have a Project in Mind?',
      ctaText: 'We are here to help you turn your ideas into reality. Contact us today for a free consultation.',
      contactUs: 'Contact Us Now',
      yearsExperience: 'Years of Experience',
      completedProjects: 'Completed Projects',
      teamMembers: 'Distinguished Team',
      servicesList: [
        { title: 'General Contracting', icon: 'building' },
        { title: 'Interior & Exterior Finishing', icon: 'paint' },
        { title: 'Decoration & Design', icon: 'design' },
        { title: 'Integrated Cladding Solutions', icon: 'layers' },
        { title: 'Project Management', icon: 'chart' },
        { title: '3D Design Service', icon: '3d' },
      ]
    },
    ar: {
      aboutLabel: 'من نحن',
      aboutHeading: 'الشريك الأمثل للمقاولات العامة والحلول الإنشائية المتكاملة',
      aboutText: 'نحن مؤسسة مقاولات متخصصة في تقديم حلول متكاملة بمجالات البناء والتشييد، مع خبرة في تنفيذ المشاريع بأعلى معايير الجودة.',
      learnMore: 'اعرف المزيد',
      servicesLabel: 'ماذا نفعل',
      servicesHeading: 'خدماتنا المتكاملة',
      servicesText: 'خدماتنا ليست مجرد أعمال بناء، بل شواهد على التزامنا بالجودة والتميز.',
      viewServices: 'عرض جميع الخدمات',
      ctaHeading: 'هل لديك مشروع في ذهنك؟',
      ctaText: 'نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية.',
      contactUs: 'تواصل معنا الآن',
      yearsExperience: 'سنوات الخبرة',
      completedProjects: 'المشاريع المكتملة',
      teamMembers: 'فريقنا المتميز',
      servicesList: [
        { title: 'المقاولات العامة', icon: 'building' },
        { title: 'التشطيبات الداخلية والخارجية', icon: 'paint' },
        { title: 'أعمال الديكور والتصميم', icon: 'design' },
        { title: 'حلول التكسية المتكاملة', icon: 'layers' },
        { title: 'إدارة المشاريع', icon: 'chart' },
        { title: 'خدمة التصميم ثلاثي الأبعاد', icon: '3d' },
      ]
    }
  }

  const c = content[lang]

  // Scroll fade-in observer for sections below hero
  useScrollReveal()

  // Hero animations on load
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

  const scrollToSections = () => {
    if (sectionsRef.current) {
      sectionsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getServiceIcon = (icon) => {
    const icons = {
      building: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>,
      paint: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/></svg>,
      design: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
      layers: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>,
      chart: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>,
      '3d': <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    }
    return icons[icon] || icons.building
  }

  return (
    <>
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source src="https://res.cloudinary.com/dn70azl7v/video/upload/v1772638895/background_nkobaz.mp4" type="video/mp4" />
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
        <div className="hero-scroll-indicator hero-fade-in" onClick={scrollToSections}>
          <div className="hero-scroll-arrow"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="home-about fade-in section-reveal" ref={sectionsRef}>
        <div className="home-about-container">
          <div className="home-about-image fade-in">
            <img src="/optimized/about.webp" alt="Al Masoud" />
            <div className="home-about-badge fade-in">
              <span className="home-about-badge-number">+20</span>
              <span className="home-about-badge-text">{c.yearsExperience}</span>
            </div>
          </div>
          <div className="home-about-text">
            <span className="home-section-label fade-in">{c.aboutLabel}</span>
            <h2 className="home-section-heading fade-in">{c.aboutHeading}</h2>
            <p className="home-about-description fade-in">{c.aboutText}</p>
            <div className="home-stats fade-in">
              <div className="home-stat">
                <span className="home-stat-number">+395</span>
                <span className="home-stat-label">{c.completedProjects}</span>
              </div>
              <div className="home-stat">
                <span className="home-stat-number">+100</span>
                <span className="home-stat-label">{c.teamMembers}</span>
              </div>
            </div>
            <Link to="/about" className="home-link-btn fade-in">
              {c.learnMore}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="home-services fade-in section-reveal">
        <div className="home-services-inner">
          <span className="home-section-label fade-in">{c.servicesLabel}</span>
          <h2 className="home-section-heading fade-in">{c.servicesHeading}</h2>
          <p className="home-services-description fade-in">{c.servicesText}</p>
          <div className="home-services-grid">
            {c.servicesList.map((service, index) => (
              <div key={index} className="home-service-card fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="home-service-icon">
                  {getServiceIcon(service.icon)}
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          <Link to="/services" className="home-link-btn fade-in">
            {c.viewServices}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta fade-in section-reveal">
        <LazyBackgroundImage src="/optimized/costraction_background2.webp" className="home-cta-bg" />
        <div className="home-cta-overlay"></div>
        <div className="home-cta-content">
          <h2 className="fade-in">{c.ctaHeading}</h2>
          <p className="fade-in">{c.ctaText}</p>
          <Link to="/contact" className="home-cta-btn fade-in">
            {c.contactUs}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
