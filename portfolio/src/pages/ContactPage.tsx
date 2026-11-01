import './ContactPage.css'

const contactLinks = [
  {
    number: '01',
    title: 'Email',
    value: 'thaole18082005@gmail.com',
    href: 'mailto:thaole18082005@gmail.com',
    external: false,
  },
  {
    number: '02',
    title: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/thao-le-964682308/',
    external: true,
  },
  {
    number: '03',
    title: 'GitHub',
    value: 'Explore my repositories',
    href: 'https://github.com/ngocphuongthaole-hub',
    external: true,
  },
  {
    number: '04',
    title: 'Phone',
    value: '+61 411 618 771',
    href: 'tel:+61411618771',
    external: false,
  },
]

const resumeUrl = '/files/Thao-Le-Resume.pdf'

export default function ContactPage() {
  return (
    <div className="page-container contact-page">
      <div className="retro-window">
        <div className="window-bar">
          <span>contact.exe</span>

          <div className="window-controls" aria-hidden="true">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="contact-content">
          <header className="contact-header">
            <p className="contact-eyebrow">LET’S CONNECT</p>

            <h1>Contact & CV.</h1>

            <p className="contact-intro">
              Have an opportunity, a project idea, or something you’d
              like to chat about? I’d love to hear from you.
            </p>

            <p className="contact-location">
              <span className="contact-location-dot" aria-hidden="true" />
              Based in Sydney · Open to relocation
            </p>
          </header>

          <div className="contact-main-grid">
            <section
              className="contact-links-section"
              aria-labelledby="contact-links-heading"
            >
              <div className="contact-section-heading">
                <span>01</span>
                <h2 id="contact-links-heading">Get in touch</h2>
              </div>

              <div className="contact-links-grid">
                {contactLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="contact-card"
                    target={link.external ? '_blank' : undefined}
                    rel={
                      link.external
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <div className="contact-card-top">
                      <span className="contact-card-number">
                        {link.number}
                      </span>

                      <span
                        className="contact-card-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <h3>{link.title}</h3>
                    <p>{link.value}</p>
                  </a>
                ))}
              </div>
            </section>

            <section
              className="contact-cv-section"
              aria-labelledby="contact-cv-heading"
            >
              <div className="contact-section-heading">
                <span>02</span>
                <h2 id="contact-cv-heading">My CV</h2>
              </div>

              <div className="contact-cv-card">
                <div className="contact-document" aria-hidden="true">
                  <span className="contact-document-label">CV</span>

                  <div className="contact-document-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <p className="contact-cv-eyebrow">
                  A LITTLE MORE ABOUT MY WORK
                </p>

                <h3>Thao Le (Taylor)</h3>

                <p className="contact-cv-description">
                  My experience, education and skills, together in
                  one document.
                </p>

                <div className="contact-cv-actions">
                  <a
                    href={resumeUrl}
                    className="contact-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={resumeUrl}
                    className="contact-button contact-button-secondary"
                    download="Thao-Le-Resume.pdf"
                  >
                    Download CV <span aria-hidden="true">↓</span>
                  </a>
                </div>

                <p className="contact-file-note">PDF document</p>
              </div>
            </section>
          </div>

          <footer className="contact-page-footer">
            <p>Thanks for stopping by my little corner of the web.</p>

            <a href="#/" className="contact-back-link">
              ← Back to home
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}