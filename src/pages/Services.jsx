import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import LazyBackgroundImage from '../components/LazyBackgroundImage'

function Services({ t, lang }) {
  const isRTL = lang === 'ar'
  const contentRef = useRef(null)

  // Scroll to next section
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
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
      pageTitle: 'Our Integrated Services',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Our Integrated Services',
      scrollDown: 'Scroll Down',
      togetherToExcellence: 'Together Towards Excellence',
      companyLabel: 'Al Masoud Est.',
      sectionTitle: 'Our Integrated Services',
      sectionDescription: 'Our services are not just construction work, but evidence of our commitment to quality and excellence, and these are real examples that express our capabilities.',
      detailedServices: [
        {
          id: 1,
          title: 'General Contracting',
          description: 'We execute contracting projects with an integrated vision that combines precision and creativity, with full commitment to technical specifications and specified timelines. We provide our services in various types of projects: residential, commercial, and industrial, while ensuring the highest standards of safety and quality.',
          features: ['Building Construction', 'Infrastructure Works', 'Industrial Projects', 'Commercial Buildings'],
          image: '/optimized/our_services/1.webp'
        },
        {
          id: 2,
          title: 'Commercial Shop Finishing',
          description: 'We provide commercial shop finishing services with the highest standards of quality and creativity, with modern designs that reflect brand identity and attract customers. We pay attention to every detail from flooring and walls to lighting and facades, ensuring a professional and distinctive commercial environment.',
          features: ['Shop Facade Design', 'Flooring & Walls', 'Lighting Systems', 'Interior Finishing'],
          image: '/optimized/our_services/2.webp'
        },
        {
          id: 3,
          title: 'Interior & Exterior Finishing',
          description: 'We provide interior and exterior finishing services with the highest standards of quality and professionalism. Our services include painting, gypsum, suspended ceilings, various types of flooring, in addition to exterior facade finishing with durable materials and modern designs that give buildings a lasting aesthetic character.',
          features: ['Wall Treatments', 'Flooring Solutions', 'Ceiling Works', 'Facade Finishing'],
          image: '/optimized/our_services/3.webp'
        },
        {
          id: 4,
          title: 'Decoration & Design',
          description: 'In the field of decoration and design, we offer creative solutions that combine beauty and functionality. We work on designing interior spaces that reflect the client\'s taste and achieve optimal use of space, with attention to detail and careful selection of materials and colors to create comfortable and inspiring environments.',
          features: ['Interior Design', 'Space Planning', '3D Visualization', 'Custom Furniture'],
          image: '/optimized/our_services/4.webp'
        },
        {
          id: 5,
          title: 'Integrated Cladding Solutions',
          description: 'We provide integrated cladding solutions with various materials such as: wood, marble, natural stone, HPL, and other high-quality materials. We ensure precise and professional cladding work, whether for interior walls or exterior facades, adding an elegant aesthetic touch that lasts long.',
          features: ['Stone Cladding', 'Wood Cladding', 'Marble Works', 'HPL Installation'],
          image: '/optimized/our_services/5.webp'
        },
        {
          id: 6,
          title: 'Project Management',
          description: 'End-to-end project management ensuring seamless coordination and successful delivery. We oversee every aspect of your project from planning to completion.',
          features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Risk Management'],
          image: '/optimized/our_services/6.webp'
        },
        {
          id: 7,
          title: '3D Design Service',
          description: 'We offer 3D design services with high standards of professionalism and precision, with realistic models that highlight architectural and finishing details accurately. We ensure to translate clients\' vision into 3D images that facilitate decision-making and clarify the project\'s appearance before execution. We also provide interior and exterior designs that reflect the desired identity.',
          features: ['Realistic 3D Models', 'Architectural Visualization', 'Interior Design', 'Exterior Design'],
          image: '/optimized/our_services/8.webp'
        },
        {
          id: 8,
          title: 'Landscaping & Maintenance',
          description: 'We provide landscaping and maintenance services with high quality standards, with solutions that include designing green spaces, planting, and installing irrigation systems. We ensure to provide environments that combine beauty and functionality to suit clients\' needs, with periodic maintenance and attention to detail to ensure a lasting vibrant appearance.',
          features: ['Green Space Design', 'Plant Installation', 'Irrigation Systems', 'Periodic Maintenance'],
          image: '/optimized/our_services/8.webp'
        }
      ]
    },
    ar: {
      pageTitle: 'خدماتنا المتكاملة',
      breadcrumbHome: 'الرئيسية',
      breadcrumbServices: 'خدماتنا المتكاملة',
      scrollDown: 'تمرير للأسفل',
      togetherToExcellence: 'معاً نحو التميز',
      companyLabel: 'مؤسسة المسعود',
      sectionTitle: 'خدماتنا المتكاملة',
      sectionDescription: 'خدماتنا ليست مجرد أعمال بناء، بل شواهد على التزامنا بالجودة والتميز، وهذه نماذج حقيقية تعبّر عن قدراتنا.',
      detailedServices: [
        {
          id: 1,
          title: 'المقاولات العامة',
          description: 'ننفذ مشاريع المقاولات برؤية متكاملة تجمع بين الدقة والإبداع، مع الالتزام التام بالمواصفات الفنية والجداول الزمنية المحددة. نقدم خدماتنا في مختلف أنواع المشاريع: السكنية، التجارية، والصناعية، مع ضمان أعلى معايير السلامة والجودة.',
          features: ['بناء المباني', 'أعمال البنية التحتية', 'المشاريع الصناعية', 'المباني التجارية'],
          image: '/optimized/our_services/1.webp'
        },
        {
          id: 2,
          title: 'تشطيبات المحلات التجارية',
          description: 'نقدّم خدمات تشطيب المحلات التجارية بأعلى معايير الجودة والإبداع، مع تصاميم عصرية تعكس هوية العلامة التجارية وتجذب العملاء. نهتم بكل التفاصيل من الأرضيات والجدران إلى الإضاءة والواجهات، لضمان بيئة تجارية احترافية ومميزة.',
          features: ['تصميم واجهات المحلات', 'الأرضيات والجدران', 'أنظمة الإضاءة', 'التشطيبات الداخلية'],
          image: '/optimized/our_services/2.webp'
        },
        {
          id: 3,
          title: 'التشطيبات الداخلية والخارجية',
          description: 'نقدم خدمات التشطيبات الداخلية والخارجية بأعلى معايير الجودة والاحترافية. تشمل خدماتنا أعمال الدهانات، الجبس، الأسقف المستعارة، الأرضيات بمختلف أنواعها، إضافةً إلى تشطيب الواجهات الخارجية بمواد متينة وتصاميم عصرية تُضفي على المباني طابعًا جماليًا يدوم.',
          features: ['معالجة الجدران', 'حلول الأرضيات', 'أعمال الأسقف', 'تشطيب الواجهات'],
          image: '/optimized/our_services/3.webp'
        },
        {
          id: 4,
          title: 'أعمال الديكور والتصميم',
          description: 'نقدّم في مجال أعمال الديكور والتصميم حلولًا إبداعية تجمع بين الجمال والوظيفية. نعمل على تصميم المساحات الداخلية بما يعكس ذوق العميل ويحقق الاستغلال الأمثل للمساحات، مع اهتمام بالتفاصيل واختيار الخامات والألوان بعناية لخلق بيئات مريحة وملهمة.',
          features: ['التصميم الداخلي', 'تخطيط المساحات', 'التصور ثلاثي الأبعاد', 'الأثاث المخصص'],
          image: '/optimized/our_services/4.webp'
        },
        {
          id: 5,
          title: 'حلول التكسية المتكاملة',
          description: 'نقدّم حلول التكسية المتكاملة بمختلف المواد مثل: الخشب، الرخام، الحجر الطبيعي، HPL، وغيرها من الخامات عالية الجودة. نحرص على تنفيذ أعمال التكسية بدقة واحترافية، سواء للجدران الداخلية أو الواجهات الخارجية، بما يُضفي لمسة جمالية راقية تدوم طويلاً.',
          features: ['تكسية الحجر', 'تكسية الخشب', 'أعمال الرخام', 'تركيب HPL'],
          image: '/optimized/our_services/5.webp'
        },
        {
          id: 6,
          title: 'إدارة المشاريع',
          description: 'إدارة شاملة للمشاريع تضمن التنسيق السلس والتسليم الناجح. نشرف على كل جانب من جوانب مشروعك من التخطيط إلى الإنجاز.',
          features: ['إدارة الجداول الزمنية', 'التحكم في الميزانية', 'ضمان الجودة', 'إدارة المخاطر'],
          image: '/optimized/our_services/6.webp'
        },
        {
          id: 7,
          title: 'خدمة التصميم (3D Design)',
          description: 'نقدّم خدمة التصميم ثلاثي الأبعاد بمعايير عالية من الاحترافية والدقة، مع نماذج واقعية تبرز التفاصيل المعمارية والتشطيبية بدقة. نحرص على ترجمة رؤية العملاء إلى صور مجسمة تُسهّل اتخاذ القرار وتوضح شكل المشروع قبل التنفيذ. كما نوفر تصاميم داخلية وخارجية تعكس الهوية المطلوبة.',
          features: ['نماذج ثلاثية الأبعاد واقعية', 'التصور المعماري', 'التصميم الداخلي', 'التصميم الخارجي'],
          image: '/optimized/our_services/8.webp'
        },
        {
          id: 8,
          title: 'تنسيق الحدائق وصيانتها',
          description: 'نقدّم خدمات تنسيق الحدائق وصيانتها بمعايير عالية من الجودة، مع حلول تشمل تصميم المساحات الخضراء وزراعة النباتات وتركيب أنظمة الري. نحرص على توفير بيئات تجمع بين الجمال والوظيفية وتلائم احتياجات العملاء، مع صيانة دورية وعناية بالتفاصيل لضمان مظهر حيوي يدوم.',
          features: ['تصميم المساحات الخضراء', 'زراعة النباتات', 'أنظمة الري', 'الصيانة الدورية'],
          image: '/optimized/our_services/8.webp'
        }
      ]
    }
  }

  const c = content[lang]

  const getIcon = (index) => {
    const icons = [
      // Building icon
      <svg key="1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>,
      // Paint icon
      <svg key="2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>
      </svg>,
      // Design icon
      <svg key="3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>,
      // Layers icon
      <svg key="4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
      </svg>,
      // Management icon
      <svg key="5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
      </svg>,
      // Consult icon
      <svg key="6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
      </svg>,
      // 3D Design icon
      <svg key="7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>,
      // Garden/Landscape icon
      <svg key="8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 3.12 13.38 2 12 2S9.5 3.12 9.5 4.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>
      </svg>
    ]
    return icons[index] || icons[0]
  }

  return (
    <div className="services-page">
      {/* Hero Section with Background */}
      <section className="page-hero">
        <LazyBackgroundImage src="/optimized/costraction_background3.webp" className="page-hero-bg" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="page-hero-label fade-in">{c.togetherToExcellence}</span>
          <h1 className="page-hero-title fade-in" style={{ animationDelay: '0.2s' }}>{c.pageTitle}</h1>
          <div className="breadcrumb fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/">{c.breadcrumbHome}</Link>
            <span className="breadcrumb-separator">—</span>
            <span className="breadcrumb-current">{c.breadcrumbServices}</span>
          </div>
          <div className="scroll-indicator fade-in" style={{ animationDelay: '0.6s' }} onClick={scrollToContent}>
            <span>{c.scrollDown}</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-content" ref={contentRef}>
        <div className="services-header">
          <span className="services-label fade-in">{c.companyLabel}</span>
          <h2 className="services-title fade-in" style={{ animationDelay: '0.2s' }}>{c.sectionTitle}</h2>
          <p className="services-description fade-in" style={{ animationDelay: '0.4s' }}>{c.sectionDescription}</p>
        </div>

        {/* Detailed Services List */}
        <div className="services-detailed-list">
          {c.detailedServices.map((service, index) => (
            <div
              key={service.id}
              className={`service-detailed-item fade-in ${index % 2 === 1 ? 'reverse' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="service-detailed-image">
                <img src={service.image} alt={service.title} loading="lazy" onError={(e) => {
                  e.target.src = '/optimized/costraction_background.webp'
                }} />
                <div className="service-detailed-number">0{service.id}</div>
              </div>
              <div className="service-detailed-content">
                <div className="service-detailed-icon">
                  {getIcon(index)}
                </div>
                <h3 className="service-detailed-title">{service.title}</h3>
                <p className="service-detailed-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-cta-btn">
                  {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <LazyBackgroundImage src="/optimized/costraction_background2.webp" className="services-cta-bg" />
        <div className="services-cta-overlay"></div>
        <div className="services-cta-content">
          <h2 className="services-cta-title fade-in">
            {lang === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
          </h2>
          <p className="services-cta-text fade-in" style={{ animationDelay: '0.2s' }}>
            {lang === 'ar'
              ? 'نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية.'
              : 'We are here to help you turn your ideas into reality. Contact us today for a free consultation.'
            }
          </p>
          <Link to="/contact" className="services-cta-btn fade-in" style={{ animationDelay: '0.4s' }}>
            {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={isRTL ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"}/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
