import SectionHeading from '../components/ui/SectionHeading'

const interests = [
  {
    title: 'Understand',
    description: 'Start with the business question and what people need.',
  },
  {
    title: 'Structure',
    description: 'Organise data into models that are clear and useful.',
  },
  {
    title: 'Communicate',
    description: 'Present findings through accessible visual experiences.',
  },
]

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800 py-20">
      <SectionHeading
        eyebrow="About"
        title="Curiosity meets practical thinking."
        description="This space will introduce my background, approach and the problems I enjoy working on."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {interests.map((item, index) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 p-6"
          >
            <p className="mb-5 font-mono text-sm text-cyan-400">
              0{index + 1}
            </p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}