import SectionHeading from '../components/ui/SectionHeading'

const skillGroups = [
  {
    title: 'Data & Databases',
    items: ['SQL', 'Python', 'PostgreSQL', 'Data Modelling'],
  },
  {
    title: 'BI & Analytics',
    items: ['Power BI', 'Power Query', 'DAX', 'Excel'],
  },
  {
    title: 'Development',
    items: ['React', 'TypeScript', 'Git', 'GitHub'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800 py-20">
      <SectionHeading
        eyebrow="Toolkit"
        title="Tools behind the work."
        description="Example skill groups for the layout. The final list will be checked against my experience."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}