import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Contact({ t, lang }) {
  const isRTL = lang === 'ar'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

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
      pageTitle: 'Contact Us',
      breadcrumbHome: 'Home',
      breadcrumbContact: 'Contact Us',
      scrollDown: 'Scroll Down',
      togetherToExcellence: 'Together Towards Excellence',
      sectionTitle: 'Contact Information',
      sectionDescription: 'Connect with us through your preferred channels and get a free consultation from our experts',
      formTitle: 'Send Us a Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Full Name',
      emailLabel: 'Email',
      emailPlaceholder: 'Email',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'Phone Number',
      subjectLabel: 'Consultation',
      subjectPlaceholder: 'Consultation',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message or special requirements here.',
      submitBtn: 'Send Now',
      phoneTitle: 'Phone Number',
      phoneText: '+966 59 570 9358',
      whatsappTitle: 'WhatsApp',
      whatsappText: '+966 56 646 2735',
      emailTitle: 'Email',
      emailText: 'info@almasoud.com'
    },
    ar: {
      pageTitle: 'تواصل معنا',
      breadcrumbHome: 'الرئيسية',
      breadcrumbContact: 'تواصل معنا',
      scrollDown: 'تمرير للأسفل',
      togetherToExcellence: 'معاً نحو التميز',
      sectionTitle: 'معلومات التواصل',
      sectionDescription: 'تواصل معنا عبر القنوات المفضلة لديك واحصل على استشارة مجانية من خبرائنا',
      formTitle: 'أرسل لنا رسالة',
      nameLabel: 'الأسم رباعي',
      namePlaceholder: 'الأسم رباعي',
      emailLabel: 'الإيميل',
      emailPlaceholder: 'الإيميل',
      phoneLabel: 'رقم الجوال',
      phonePlaceholder: 'رقم الجوال',
      subjectLabel: 'استشارة',
      subjectPlaceholder: 'استشارة',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'اكتب رسالتك او متطلباتك الخاصة هنا.',
      submitBtn: 'ارسل الآن',
      phoneTitle: 'رقم الجوال',
      phoneText: '+966 59 570 9358',
      whatsappTitle: 'واتساب',
      whatsappText: '+966 56 646 2735',
      emailTitle: 'البريد الإلكتروني',
      emailText: 'info@almasoud.com'
    }
  }

  const c = content[lang]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-page">
      {/* Hero Section with Background */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/contact_me.jpg)' }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="page-hero-label fade-in">{c.togetherToExcellence}</span>
          <h1 className="page-hero-title fade-in" style={{ animationDelay: '0.2s' }}>{c.pageTitle}</h1>
          <div className="breadcrumb fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/">{c.breadcrumbHome}</Link>
            <span className="breadcrumb-separator">—</span>
            <span className="breadcrumb-current">{c.breadcrumbContact}</span>
          </div>
          <div className="scroll-indicator fade-in" style={{ animationDelay: '0.6s' }}>
            <span>{c.scrollDown}</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Contact Content Section - New Design */}
      <section className="contact-section-new">
        <div className="contact-wrapper">
          {/* Contact Form Side */}
          <div className="contact-form-side fade-in">
            <form onSubmit={handleSubmit} className="modern-contact-form">
              <div className="form-grid">
                <div className="form-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={c.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={c.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={c.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={c.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-field full-width">
                <textarea
                  id="message"
                  name="message"
                  placeholder={c.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="modern-submit-btn">
                {c.submitBtn}
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="contact-info-side fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="contact-info-heading">{c.sectionTitle}</h2>
            <p className="contact-info-description">{c.sectionDescription}</p>

            <div className="contact-cards-list">
              {/* Phone Card */}
              <a href="tel:+966595709358" className="contact-card-item">
                <div className="contact-card-content">
                  <h3>{c.phoneTitle}</h3>
                  <p dir="ltr">{c.phoneText}</p>
                </div>
                <div className="contact-card-icon phone-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a href="https://wa.me/966566462735" target="_blank" rel="noopener noreferrer" className="contact-card-item">
                <div className="contact-card-content">
                  <h3>{c.whatsappTitle}</h3>
                  <p dir="ltr">{c.whatsappText}</p>
                </div>
                <div className="contact-card-icon whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:info@almasoud.com" className="contact-card-item">
                <div className="contact-card-content">
                  <h3>{c.emailTitle}</h3>
                  <p>{c.emailText}</p>
                </div>
                <div className="contact-card-icon email-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
