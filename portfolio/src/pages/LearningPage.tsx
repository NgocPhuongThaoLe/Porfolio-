import PageWindow from '../components/layout/PageWindow'

const reflections = [
  {
    number: '01',
    title: 'What I tried',
    description: 'A challenge, a new tool or an unfamiliar problem.',
  },
  {
    number: '02',
    title: 'What I learned',
    description: 'What worked, what changed and what surprised me.',
  },
  {
    number: '03',
    title: 'My next move',
    description: 'How I will apply the lesson in future work.',
  },
]

export default function LearningPage() {
  return (
    <PageWindow
      filename="learning.exe"
      title="Curiosity in progress."
      description="A space for reflections, industry perspectives, feedback and the next things I want to explore."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {reflections.map((item) => (
          <article
            key={item.number}
            className="border border-[#a88a63] bg-[#f5dfa4] p-6 shadow-[4px_5px_0_#c8ae87]"
          >
            <p className="mb-5 font-mono text-sm text-[#936322]">
              NOTE / {item.number}
            </p>

            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#635044]">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Industry perspectives</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {['Industry conversation 01', 'Industry conversation 02'].map(
            (title) => (
              <article
                key={title}
                className="border-2 border-[#39281d] bg-[#faefdc] p-6"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#635044]">
                  Speaker, key takeaways and how they connect to my work
                  will be added here.
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="mt-10 border border-[#bca383] bg-[#faefdc] p-6">
        <h2 className="text-xl font-bold">Feedback → next move</h2>
        <p className="mt-3 text-sm leading-7 text-[#635044]">
          A place to connect feedback with specific improvements and future
          learning goals.
        </p>
      </section>
    </PageWindow>
  )
}