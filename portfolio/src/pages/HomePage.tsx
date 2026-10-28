const sections = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section
        id="home"
        className="flex min-h-[70vh] scroll-mt-40 flex-col justify-center py-20"
      >
        <p className="mb-4 text-sm tracking-widest text-cyan-400">
          MY PORTFOLIO
        </p>

        <h1 className="text-4xl font-bold sm:text-6xl">
          Building something great.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-400">
          A space for my projects, skills and experience.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-flex w-fit rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          View Projects
        </a>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-80 scroll-mt-40 border-t border-slate-800 py-16"
        >
          <h2 className="text-3xl font-semibold">{section.title}</h2>
          <p className="mt-4 text-slate-400">Content coming soon.</p>
        </section>
      ))}
    </div>
  )
}