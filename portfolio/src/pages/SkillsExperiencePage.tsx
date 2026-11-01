import './SkillsExperiencePage.css'

const experiences = [
  {
    company: 'Miroma Project Factory',
    website: 'https://www.theprojectfactory.com/',
    location: 'Redfern, Sydney',
    role: 'Business Intelligence Developer Intern',
    period: 'Sep 2026 – Present',
    highlights: [
      'Profiled 100+ tables across five data sources — Salesforce, Monday.com, Jobpac, Procore and Procure — using Power Query to understand data structures. Performed exploratory data analysis (EDA) using Python on key sales tables, identifying missing values, inconsistent text and data-type issues. Created a data dictionary documenting table structures and findings to support reporting and Power BI model development.',
      'Cleaned and transformed reporting data using Power Query, addressing missing values, standardising text and correcting data types. Collaborated with developers to resolve underlying data issues in the database.',
      'Mapped client reporting requirements to relevant source tables and fields, and developed star-schema models in Power BI. Defined fact and dimension tables, data grain and relationships to support analysis of sales performance, construction budgets, cost forecasts and defect resolution.',
      'Developed four Power BI dashboards for Sales, Construction Costs, Defects and End of Development reporting, using DAX measures, interactive visuals and filters to help stakeholders monitor project performance. Presented the dashboards at the client showcase, with all four planned for operational use following project completion.',
    ],
    tools: ['Power BI', 'Power Query', 'DAX', 'Python', 'Data Modelling'],
  },
  {
    company: 'MentorME',
    website: 'https://mentor-me.com.au/',
    location: 'Bankstown, Sydney',
    role: 'Software Development Intern',
    period: 'Jun 2026 – Sep 2026',
    highlights: [
      'Implemented user behaviour tracking using Google Analytics 4 (GA4) and Google Tag Manager (GTM), configuring events for button clicks, CV uploads and analysis result views to help the team understand engagement with key website features.',
      'Improved the CV upload and analysis flow with input validation, loading indicators and error messages, helping users identify invalid inputs and track processing progress.',
      'Developed React and TypeScript UI components for the Career Mirror website from Figma designs, with AI assistance in Cursor. Collaborated with developers using Git and GitHub.',
    ],
    tools: ['React', 'TypeScript', 'GA4', 'GTM', 'Figma', 'Git'],
  },
]

const projectHighlights = [
  'Designed a relational database schema in Supabase (PostgreSQL) for products, categories, sizes, inventory and tags to support product browsing, size selection and stock management.',
  'Defined primary and foreign keys, category hierarchies, junction tables and constraints to maintain data integrity. Created ERDs and data dictionaries to guide implementation, maintenance and technical handover.',
  'Collaborated with application developers to align database structures with product search and recommendation requirements, documenting data storage decisions to support application integration.',
  'Supported frontend development by implementing the shopping-cart page using React and Next.js.',
]

const skillGroups = [
  {
    title: 'Data & Databases',
    items: [
      'SQL',
      'PostgreSQL',
      'Python (Pandas, NumPy)',
      'Supabase',
      'MongoDB',
    ],
  },
  {
    title: 'Reporting & Analytics',
    items: [
      'Power BI',
      'Power Query',
      'DAX',
      'Excel',
      'Google Analytics 4 (GA4)',
    ],
  },
  {
    title: 'Data Quality & Modelling',
    items: [
      'Data Profiling',
      'Data Transformation',
      'Data Modelling',
      'Relational Database Design',
      'ERDs',
    ],
  },
  {
    title: 'Development & Tools',
    items: [
      'APIs',
      'Node.js',
      'TypeScript',
      'React',
      'Next.js',
      'Git',
      'GitHub',
      'Figma',
      'Jira',
      'Asana',
    ],
  },
]

const coursework = [
  {
    name: 'Fundamentals of Computer Science',
    grade: '86/100',
  },
  {
    name: 'Discrete Mathematics',
    grade: '96/100',
  },
  {
    name: 'Applications Modelling and Development',
    grade: '93/100',
  },
  {
    name: 'Information Systems and Database Design',
    grade: '',
  },
  {
    name: 'Advanced Web Development',
    grade: '',
  },
]

const awards = [
  {
    title: '2nd Place — MentorME Futura Remix Hackathon',
    url: 'https://drive.google.com/file/d/1tx_877OGfVi5CZliiDgnCVDTOSkT6fyd/view',
  },
  {
    title: 'ASA DataFest 2026 Certificate',
    url: 'https://drive.google.com/file/d/1x3tW4A7oTtm9AX5dE_cGfyKXbwOvMc7t/view',
  },
]

const certifications = [
  {
    title: 'SQL Intermediate — HackerRank',
    url: 'https://www.hackerrank.com/certificates/fc91760da546',
  },
  {
    title: 'IT Audit Fundamental — Udemy',
    url: 'https://drive.google.com/file/d/12OXeZoE2JzelZSlNJHaCs8CP8icbhCfr/view',
  },
]

const pageSections = [
  { id: 'se-experience', label: 'Experience' },
  { id: 'se-project', label: 'Industry project' },
  { id: 'se-education', label: 'Education' },
  { id: 'se-skills', label: 'Skills' },
]

export default function SkillsExperiencePage() {
  return (
    <div className="page-container se-page">
      <div className="retro-window">
        <div className="window-bar">
          <span>skills-experience.exe</span>

          <div className="window-controls" aria-hidden="true">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="se-content">
          <header className="se-header">
            <p className="se-eyebrow">
              TOOLS, LEARNING & EXPERIENCE
            </p>

            <h1>
              Skills &<br />
              Experience.
            </h1>

            <p className="se-intro">
              The tools I use, and the experience that shapes how I work.
            </p>

            <nav className="se-jump-links" aria-label="On this page">
              {pageSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({
                        block: 'start',
                      })
                  }}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </header>

          <section
            id="se-experience"
            className="se-section"
            aria-labelledby="se-experience-heading"
          >
            <div className="se-section-heading">
              <span className="se-section-number">01</span>
              <h2 id="se-experience-heading">Experience</h2>
            </div>

            <div className="se-timeline">
              {experiences.map((experience) => (
                <article
                  className="se-experience-card"
                  key={experience.company}
                >
                  <div className="se-entry-top">
                    <h3>
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.company}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </h3>

                    <p className="se-period">
                      {experience.period}
                    </p>
                  </div>

                  <p className="se-role">{experience.role}</p>
                  <p className="se-meta">{experience.location}</p>

                  <ul className="se-bullets">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <ul className="se-tags" aria-label="Tools used">
                    {experience.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="se-project"
            className="se-section"
            aria-labelledby="se-project-heading"
          >
            <div className="se-section-heading">
              <span className="se-section-number">02</span>
              <h2 id="se-project-heading">Industry project</h2>
            </div>

            <article className="se-project-card">
              <div className="se-entry-top">
                <h3>
                  <a
                    href="https://abcandco.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ABC Fashion Website AI Shopping Stylist
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h3>

                <p className="se-period">Jul 2026 – Present</p>
              </div>

              <p className="se-role">
                Software Developer – Database Design
              </p>

              <p className="se-meta">
                University Industry Project · Salesforce client ·{' '}
                <a
                  href="https://abcandco.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Prototype ↗
                </a>
              </p>

              <ul className="se-bullets">
                {projectHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <ul className="se-tags" aria-label="Project tools">
                <li>Supabase</li>
                <li>PostgreSQL</li>
                <li>Database Design</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </article>
          </section>

          <section
            id="se-education"
            className="se-section"
            aria-labelledby="se-education-heading"
          >
            <div className="se-section-heading">
              <span className="se-section-number">03</span>
              <h2 id="se-education-heading">Education</h2>
            </div>

            <article className="se-education-card">
              <div className="se-entry-top">
                <h3>Macquarie University</h3>
                <p className="se-period">Nov 2026 (Expected)</p>
              </div>

              <p className="se-role">
                Bachelor of Commerce (Business Information Systems)
              </p>

              <p className="se-result">
                WAM: 78.7/100 <span>·</span> Distinction
              </p>

              <h4>Relevant coursework</h4>

              <ul className="se-coursework">
                {coursework.map((course) => (
                  <li key={course.name}>
                    <span>{course.name}</span>

                    {course.grade && (
                      <strong>{course.grade}</strong>
                    )}
                  </li>
                ))}
              </ul>

              <div className="se-recognition-grid">
                <div className="se-recognition">
                  <h4>Awards & recognition</h4>

                  <ul className="se-bullets">
                    {awards.map((award) => (
                      <li key={award.title}>
                        {award.title}{' '}
                        <a
                          href={award.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${award.title}`}
                        >
                          (View ↗)
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="se-recognition">
                  <h4>Certifications</h4>

                  <ul className="se-bullets">
                    {certifications.map((certificate) => (
                      <li key={certificate.title}>
                        {certificate.title}{' '}
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${certificate.title}`}
                        >
                          (View ↗)
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </section>

          <section
            id="se-skills"
            className="se-section"
            aria-labelledby="se-skills-heading"
          >
            <div className="se-section-heading">
              <span className="se-section-number">04</span>
              <h2 id="se-skills-heading">Skills</h2>
            </div>

            <div className="se-skills-grid">
              {skillGroups.map((group) => (
                <article
                  className="se-skill-card"
                  key={group.title}
                >
                  <h3>{group.title}</h3>

                  <ul className="se-tags">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="se-page-footer">
            <a href="#/" className="se-back-link">
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}