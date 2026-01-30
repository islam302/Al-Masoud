import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import LazyBackgroundImage from '../components/LazyBackgroundImage'

function About({ t, lang }) {
  const isRTL = lang === 'ar'
  const sectionRef = useRef(null)

  // Scroll to next section
  const scrollToContent = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    en: {
      pageTitle: 'About Us',
      breadcrumbHome: 'Home',
      breadcrumbAbout: 'About Us',
      scrollDown: 'Scroll Down',
      togetherToExcellence: 'Together Towards Excellence',
      companyLabel: 'Al Masoud Est.',
      mainHeading: 'The Optimal Partner for General Contracting and Integrated Construction Solutions',
      aboutTitle: 'About Us',
      aboutText: 'We are a specialized contracting company providing integrated solutions in construction and building, with expertise in executing projects to the highest quality standards. Our services include general contracting, interior and exterior finishing, decoration and design work, as well as cladding of various types such as wood, stone, marble, and HPL materials. We always strive to deliver professional work that meets our clients\' aspirations and combines precision and beauty in every project.',
      missionTitle: 'Company Mission',
      missionText: 'We aim to build integrated urban projects based on quality and innovation, through adopting the latest engineering technologies and employing the best competencies, ensuring we meet the needs of our clients in both public and private sectors, and contributing to strengthening infrastructure and supporting sustainable development within the Kingdom.',
      viewPortfolio: 'View Portfolio',
      completedProjects: 'Completed Projects',
      distinguishedTeam: 'Distinguished Team',
      yearsExperience: 'Years of Experience',
    },
    ar: {
      pageTitle: 'من نحن',
      breadcrumbHome: 'الرئيسية',
      breadcrumbAbout: 'من نحن',
      scrollDown: 'تمرير للأسفل',
      togetherToExcellence: 'معاً نحو التميز',
      companyLabel: 'مؤسسة المسعود',
      mainHeading: 'الشريك الأمثل للمقاولات العامة والحلول الإنشائية المتكاملة',
      aboutTitle: 'نبذة عنا',
      aboutText: 'نحن مؤسسة مقاولات متخصصة في تقديم حلول متكاملة بمجالات البناء والتشييد، مع خبرة في تنفيذ المشاريع بأعلى معايير الجودة. تشمل خدماتنا المقاولات العامة، التشطيبات الداخلية والخارجية، أعمال الديكور والتصميم، إضافة إلى التكسية بمختلف أنواعها مثل الخشب، الحجر، الرخام، ومواد الـ HPL وغيرها. نسعى دائمًا لتقديم أعمال احترافية تلبّي تطلعات عملائنا وتجمع بين الدقة والجمال في كل مشروع.',
      missionTitle: 'مهمة المؤسسة',
      missionText: 'نسعى إلى بناء مشاريع عمرانية متكاملة ترتكز على الجودة والابتكار، من خلال اعتماد أحدث التقنيات الهندسية وتوظيف أفضل الكفاءات، بما يضمن تلبية احتياجات عملائنا في القطاعين العام والخاص، ويسهم في تعزيز البنية التحتية ودعم التنمية المستدامة داخل المملكة.',
      viewPortfolio: 'شاهد معرض الأعمال',
      completedProjects: 'المشاريع المكتملة',
      distinguishedTeam: 'فريقنا المتميز',
      yearsExperience: 'سنوات الخبرة',
    }
  }

  const c = content[lang]

  return (
    <div className="about-page">
      {/* Hero Section with Background */}
      <section className="page-hero">
        <LazyBackgroundImage src="/optimized/costraction_background.webp" className="page-hero-bg" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="page-hero-label fade-in">{c.togetherToExcellence}</span>
          <h1 className="page-hero-title fade-in" style={{ animationDelay: '0.2s' }}>{c.pageTitle}</h1>
          <div className="breadcrumb fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/">{c.breadcrumbHome}</Link>
            <span className="breadcrumb-separator">—</span>
            <span className="breadcrumb-current">{c.breadcrumbAbout}</span>
          </div>
          <div className="scroll-indicator fade-in" style={{ animationDelay: '0.6s' }} onClick={scrollToContent}>
            <span>{c.scrollDown}</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content" ref={sectionRef}>
        <div className="about-container">
          {/* Images Column - Left Side */}
          <div className="about-images">
            <div className="about-image-top fade-in">
              <img src="/optimized/about.webp" alt="Construction" loading="lazy" />
            </div>
            <div className="about-image-bottom fade-in" style={{ animationDelay: '0.2s' }}>
              <img src="/about-2-1-1.webp" alt="Construction site" loading="lazy" />
            </div>
            <div className="about-image-badge fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="/about-em1-1-1-1.webp" alt="Under construction" loading="lazy" />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="about-text-content">
            <span className="about-label fade-in">{c.companyLabel}</span>
            <h2 className="about-heading fade-in" style={{ animationDelay: '0.2s' }}>{c.mainHeading}</h2>

            <div className="about-section fade-in" style={{ animationDelay: '0.4s' }}>
              <h3>{c.aboutTitle}</h3>
              <p>{c.aboutText}</p>
            </div>

            {/* Stats Cards */}
            <div className="about-stats">
              <div className="stat-card stat-card-gold fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="stat-title">{c.yearsExperience}</span>
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="stat-divider"></div>
                <span className="stat-number">+20</span>
              </div>
              <div className="stat-card stat-card-navy fade-in" style={{ animationDelay: '0.6s' }}>
                <span className="stat-title">{c.distinguishedTeam}</span>
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <div className="stat-divider"></div>
                <span className="stat-number">+100</span>
              </div>
              <div className="stat-card stat-card-gold fade-in" style={{ animationDelay: '0.7s' }}>
                <span className="stat-title">{c.completedProjects}</span>
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                  </svg>
                </div>
                <div className="stat-divider"></div>
                <span className="stat-number">+395</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <LazyBackgroundImage src="/optimized/costraction_background2.webp" className="mission-bg" />
        <div className="mission-overlay"></div>
        <div className="mission-content">
          <h2 className="mission-title fade-in">{c.missionTitle}</h2>
          <p className="mission-text fade-in" style={{ animationDelay: '0.2s' }}>{c.missionText}</p>
          <Link to="/portfolio" className="mission-btn fade-in" style={{ animationDelay: '0.4s' }}>
            <span>{c.viewPortfolio}</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
