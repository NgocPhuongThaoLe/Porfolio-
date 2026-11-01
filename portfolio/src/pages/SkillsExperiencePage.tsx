import PageWindow from '../components/layout/PageWindow'

const categories = [
  {
    title: 'Data & Databases',
    description: 'Tools for working with data and its structure.',
  },
  {
    title: 'Business Intelligence',
    description: 'Reporting, visualisation and business metrics.',
  },
  {
    title: 'Development & Collaboration',
    description: 'Building interfaces and working with a team.',
  },
]

export default function SkillsExperiencePage() {
  return (
    <PageWindow
      filename="skills-experience.exe"
      title="Tools, practice and experience."
      description="The skills I’m developing and the experiences behind them. Verified details will be added from my CV."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <section
            key={category.title}
            className="border-2 border-[#39281d] bg-[#faefdc] p-6 shadow-[5px_5px_0_#c8ae87]"
          >
            <h2 className="text-lg font-bold">{category.title}</h2>

            <p className="mt-3 text-sm leading-7 text-[#635044]">
              {category.description}
            </p>

            <p className="mt-5 text-xs text-[#936322]">
              Skills and project evidence coming soon
            </p>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Experience & education</h2>

        <div className="space-y-5 border-l-2 border-[#956d3c] pl-6">
          {[
            {
              label: 'Professional experience',
              detail: 'Roles, responsibilities and contributions.',
            },
            {
              label: 'Industry & university projects',
              detail: 'Practical work, collaboration and technical decisions.',
            },
            {
              label: 'Education & recognition',
              detail: 'Academic background, awards and completed certificates.',
            },
          ].map((item) => (
            <article
              key={item.label}
              className="border border-[#bca383] bg-[#faefdc] p-6"
            >
              <h3 className="font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm leading-7 text-[#635044]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageWindow>
  )
}