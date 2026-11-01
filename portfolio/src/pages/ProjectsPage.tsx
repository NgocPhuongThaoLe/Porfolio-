import PageWindow from '../components/layout/PageWindow'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <PageWindow
      filename="projects.exe"
      title="Things I’ve worked on."
      description="A collection of projects, experiments and ideas. Project details and evidence will be added next."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col border-2 border-[#39281d] bg-[#faefdc] p-6 shadow-[5px_5px_0_#c8ae87]"
          >
            <div className="mb-6 flex h-36 items-center justify-center border border-[#bca383] bg-[#e5d0ae]">
              <span className="font-mono text-5xl text-[#80532d]">
                {project.number}
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-[#936322]">
              {project.category}
            </p>

            <h2 className="mt-3 text-xl leading-snug font-bold">
              {project.title}
            </h2>

            <p className="mt-4 flex-1 text-sm leading-7 text-[#635044]">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="border border-[#bca383] px-2 py-1 text-xs"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-[#cbb698] pt-4 text-xs text-[#635044]">
              Case study coming soon
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12 border-t border-[#bca383] pt-8">
        <h2 className="text-xl font-bold">Inside each case study</h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            '01 / Business problem',
            '02 / Data & context',
            '03 / My contribution',
            '04 / Process',
            '05 / Results',
            '06 / Evidence & links',
          ].map((item) => (
            <div
              key={item}
              className="border border-[#bca383] bg-[#faefdc] p-4 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageWindow>
  )
}