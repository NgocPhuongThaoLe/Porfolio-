import Hero from '../sections/Hero'

const folders = [
  {
    number: '01',
    title: 'Projects',
    description:
      'A collection of things I’ve built, explored and am working on.',
    href: '#/projects',
  },
  {
    number: '02',
    title: 'Skills & Experience',
    description:
      'The tools I use, and the experience that shapes how I work.',
    href: '#/skills-experience',
  },
  {
    number: '03',
    title: 'Learning journal',
    description: 'Notes, ideas and what I’m exploring next.',
    href: '#/learning',
  },
]

export default function HomePage() {
  return (
    <div className="page-container">
      <Hero />

      <section id="about" className="story-preview">
        <h2>Behind the scramble.</h2>
        
        <div className="home-intro">
          <p>
            Hi, I’m Thao Le (Taylor). I’m currently studying Business Information
            Systems at Macquarie University in Sydney and will graduate in
            November 2026.
          </p>

          <p>
            I’m interested in how data and technology can help us understand things
            better. Through my studies and internships, I’ve enjoyed working with
            data, creating dashboards, and turning ideas into working applications.
            I’m now exploring a career in data, with a growing interest in data
            engineering.
          </p>

          <p>My story starts with a Rubik’s Cube.</p>

          <p>
            It has been part of my life since childhood: a hobby that reflects my
            curiosity and love of logical challenges. A scrambled cube gives me
            something to explore. I turn it, look for patterns, try different moves,
            and gradually understand how the pieces connect.
          </p>

          <p>
            That same curiosity draws me to data. With data, I enjoy looking beyond
            individual numbers to discover patterns and the stories behind them.
            SCRAMBLE is also a way of describing where I am now. Through university,
            internships, and projects, I’m discovering what I enjoy and the kind of
            work I want to do. Some experiences have given me direction. Others
            have surprised me or changed my mind.
          </p>

          <p>
            Unlike a Rubik’s Cube, my life has no single finished arrangement to
            reach. I’m finding my own path through the things I try and the
            choices I make.
          </p>
        </div>
      </section>

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
    </div>
  )
}
