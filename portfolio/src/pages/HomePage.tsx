import Hero from '../sections/Hero'

const folders = [
  {
    number: '01',
    title: 'Projects',
    description:
      'A collection of things I’ve built, explored and am working on.',
    href: './projects',
  },
  {
    number: '02',
    title: 'Skills & Experience',
    description:
      'The tools I use, and the experience that shapes how I work.',
    href: './skills-experience',
  },
  {
    number: '03',
    title: 'Learning journal',
    description: 'Notes, ideas and what I’m exploring next.',
    href: './learning',
  },
]

export default function HomePage() {
  return (
    <div className="page-container">
      <Hero />

      <div className="folder-grid">
        {folders.map((folder) => (
          <a
            key={folder.number}
            href={folder.href}
            className="folder-card"
          >
            <div className="folder-heading">
              <span className="folder-icon" aria-hidden="true" />
              <h2>{folder.title}</h2>
              <span className="folder-number">{folder.number}</span>
            </div>

            <p className="folder-description">{folder.description}</p>
            <span className="folder-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>

      <section id="about" className="story-preview">
        <h2>Behind the scramble.</h2>
        <p>My story, background and next moves — coming soon.</p>
      </section>
    </div>
  )
}