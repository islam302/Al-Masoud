function Footer({ lang }) {
  const content = {
    en: {
      companyName: 'Al Masoud',
      companySubtitle: 'General Contracting',
      companyDescription: 'A leading company in construction, executing successful and innovative projects, building the future and establishing quality with a modern and renewed vision.',
      quickLinks: 'Quick Links',
      home: 'Home',
      aboutUs: 'About Us',
      services: 'Our Services',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
      usefulLinks: 'Useful Links',
      news: 'News & Updates',
      tools: 'Construction Tools',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      contactUs: 'Contact Us',
      phone: '+966 59 570 9358',
      whatsapp: 'WhatsApp Direct',
      location: 'Jeddah, Al Samer District, Saudi Arabia',
      copyright: '© 2025 Al Masoud. All Rights Reserved.',
      developedBy: 'Developed with'
    },
    ar: {
      companyName: 'مؤسسة المسعود',
      companySubtitle: 'للمقاولات العامة',
      companyDescription: 'مؤسسة رائدة في التشييد العمراني عبر تنفيذ مشاريع ناجحة ومبتكرة، نبني المستقبل ونرسخ الجودة برؤية عصرية متجددة.',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      aboutUs: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'معرض الأعمال',
      contact: 'تواصل معنا',
      usefulLinks: 'روابط تهمك',
      news: 'الأخبار والتحديثات',
      tools: 'أدوات البناء',
      privacyPolicy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      contactUs: 'تواصل معنا',
      phone: '+966 59 570 9358',
      whatsapp: 'واتساب مباشر',
      location: 'جدة، حي السامر، المملكة العربية السعودية',
      copyright: '© 2025 مؤسسة المسعود. جميع الحقوق محفوظة.',
      developedBy: 'تم التطوير بـ'
    }
  }

  const c = content[lang]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src="/logo.png" alt="Al Masoud Logo" className="footer-logo-img" />
            </a>
            <p className="footer-description">{c.companyDescription}</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">{c.quickLinks}</h3>
            <ul>
              <li><a href="/">{c.home}</a></li>
              <li><a href="/about">{c.aboutUs}</a></li>
              <li><a href="/services">{c.services}</a></li>
              <li><a href="/portfolio">{c.portfolio}</a></li>
              <li><a href="/contact">{c.contact}</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h3 className="footer-title">{c.usefulLinks}</h3>
            <ul>
              <li><a href="/portfolio">{c.portfolio}</a></li>
              <li><a href="/news">{c.news}</a></li>
              <li><a href="/tools">{c.tools}</a></li>
              <li><a href="/contact">{c.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">{c.contactUs}</h3>
            <div className="footer-contact-list">
              <a href="tel:+966595709358" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span dir="ltr">{c.phone}</span>
              </a>
              <a href="https://wa.me/966566462735" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <div className="footer-contact-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{c.whatsapp}</span>
              </a>
              <div className="footer-contact-item">
                <div className="footer-contact-icon location">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span>{c.location}</span>
              </div>
            </div>

            {/* Email Badge */}
            <a href="mailto:info@almasoud.com" className="footer-email-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@almasoud.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <p className="copyright">{c.copyright}</p>
            <p className="developed-by">
              Powered by <a href="https://join-softwave.online/" target="_blank" rel="noopener noreferrer" className="powered-link">Join-Softwave</a>
            </p>
          </div>
          <a href="/" className="footer-bottom-logo">
            <img src="/logo.png" alt="Al Masoud Logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
