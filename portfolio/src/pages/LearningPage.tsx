import './LearningPage.css'

const learningAreas = [
  {
    number: '01',
    title: 'Snowflake',
    description:
      'Learning how Snowflake organises data, separates storage and compute, and supports querying and data transformation.',
  },
  {
    number: '02',
    title: 'Databricks',
    description:
      'Exploring the lakehouse approach and how data can be ingested, transformed and prepared for analysis.',
  },
  {
    number: '03',
    title: 'AWS',
    description:
      'Building my understanding of cloud services and how they can support data storage, processing and pipelines.',
  },
]

const reflectionSections = [
  {
    number: '01',
    title: 'What I tried',
    text:
      'At Miroma Project Factory, I explored more than 100 tables across five data sources to understand how they could support client reporting. I used Power Query to inspect the data and Python to explore key sales tables.',
  },
  {
    number: '02',
    title: 'What I learned',
    text:
      'Before building a dashboard, I needed to understand what each table represented and how the records connected. Missing values, inconsistent text and unclear relationships made this challenging. Documenting my findings and discussing issues with developers helped me make more informed modelling decisions.',
  },
  {
    number: '03',
    title: 'My next move',
    text:
      'For future projects, I want to document data grain, keys and quality issues earlier, then use those findings to guide transformation and validation.',
  },
]

export default function LearningPage() {
  return (
    <div className="page-container learning-page">
      <div className="retro-window">
        <div className="window-bar">
          <span>learning-journal.exe</span>

          <div className="window-controls" aria-hidden="true">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="learning-content">
          <header className="learning-header">
            <p className="learning-eyebrow">LEARNING JOURNAL</p>

            <h1>
              Curiosity
              <br />
              in progress.
            </h1>

            <p className="learning-intro">
              A space for reflections, things I’m learning and the
              next things I want to explore.
            </p>
          </header>

          <section
            className="learning-section"
            aria-labelledby="learning-exploring-heading"
          >
            <div className="learning-section-heading">
              <span>01</span>
              <h2 id="learning-exploring-heading">
                What I’m exploring next
              </h2>
            </div>

            <div className="learning-exploring">
              <span className="learning-status">
                Currently learning
              </span>

              <h3>Looking beyond the dashboard.</h3>

              <p>
                Working with data and building dashboards has made me
                curious about what happens before the data reaches a
                report: how it is collected, transformed and maintained.
                That curiosity is leading me towards data engineering.
              </p>

              <p>
                I’m currently learning more about Snowflake, Databricks
                and AWS as I work towards certifications in these
                platforms. Alongside my studies, I’m developing a data
                engineering project to put what I learn into practice.
              </p>

              <div className="learning-platform-grid">
                {learningAreas.map((area) => (
                  <article
                    className="learning-platform-card"
                    key={area.title}
                  >
                    <span className="learning-card-number">
                      {area.number}
                    </span>

                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>

              <div className="learning-project-note">
                <p className="learning-note-label">
                  PUTTING IT INTO PRACTICE
                </p>

                <h4>A data engineering project in progress</h4>

                <p>
                  My aim is to follow data through a complete workflow,
                  from ingestion and transformation to preparing it
                  for analysis. I want to use the project to practise
                  data quality checks, document my decisions and
                  understand how the different parts connect.
                </p>

                <p>
                  I’ll share the approach, challenges and lessons here
                  as the project develops.
                </p>
              </div>
            </div>
          </section>

          <section
            className="learning-section"
            aria-labelledby="learning-reflections-heading"
          >
            <div className="learning-section-heading">
              <span>02</span>
              <h2 id="learning-reflections-heading">
                Notes from experience
              </h2>
            </div>

            <article className="learning-reflection">
              <div className="learning-reflection-header">
                <p className="learning-eyebrow">INTERNSHIP REFLECTION</p>

                <h3>Making sense of messy data</h3>

                <p className="learning-reflection-preview">
                  What exploring unfamiliar source tables taught me
                  about the work behind a useful dashboard.
                </p>

                <ul
                  className="learning-tags"
                  aria-label="Reflection topics"
                >
                  <li>Data quality</li>
                  <li>Power BI</li>
                  <li>Data modelling</li>
                </ul>
              </div>

              <details className="learning-details">
                <summary>
                  <span className="learning-read-label">
                    Read reflection
                  </span>

                  <span className="learning-close-label">
                    Close reflection
                  </span>

                  <span
                    className="learning-details-icon"
                    aria-hidden="true"
                  />
                </summary>

                <div className="learning-reflection-body">
                  {reflectionSections.map((section) => (
                    <section
                      className="learning-reflection-part"
                      key={section.number}
                    >
                      <p className="learning-note-label">
                        NOTE / {section.number}
                      </p>

                      <h4>{section.title}</h4>
                      <p>{section.text}</p>
                    </section>
                  ))}
                </div>
              </details>
            </article>
          </section>

          <footer className="learning-page-footer">
            <p>
              Still learning, trying things and finding my own path.
            </p>

            <a href="#/" className="learning-back-link">
              ← Back to home
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}