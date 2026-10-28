import SectionHeading from '../components/ui/SectionHeading'

const entries = [
  {
    period: 'Experience',
    title: 'Professional experience',
    description:
      'Role details, responsibilities and contributions will be added from my CV.',
  },
  {
    period: 'Education',
    title: 'Academic background',
    description:
      'Degree details, relevant coursework and recognition will be added here.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 py-20">
      <SectionHeading
        eyebrow="Background"
        title="Learning through doing."
      />

      <div className="space-y-6">
        {entries.map((entry) => (
          <div
            key={entry.period}
            className="grid gap-4 rounded-xl border border-slate-800 p-6 sm:grid-cols-[160px_1fr] sm:p-8"
          >
            <p className="text-sm font-medium text-cyan-400">
              {entry.period}
            </p>

            <div>
              <h3 className="text-xl font-semibold">{entry.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}