import { useState } from 'react'
import PageWindow from '../components/layout/PageWindow'

const projects = [
  {
    id: 'e-wallet',
    number: '01',
    title: 'E-wallet Transaction Analytics',
    category: 'Data Analytics',
    image: '/images/e-wallet.png',
    technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
    description:
      'Exploring payment and transaction data to understand product performance, transaction behaviour and data quality.',
    role: 'Independent project · Data analysis & wrangling',
    highlight: '6 transaction categories · Product performance analysis',
    sections: [
      {
        title: 'Project overview',
        text: 'Analysed three datasets containing monthly payment volumes, product information and transaction records. The goal was to turn raw data into useful insights for business performance monitoring.',
      },
      {
        title: 'My contribution',
        text: 'Merged payment and product data, investigated missing values and duplicates, corrected data types and validated business rules. Used Python and Pandas to summarise product performance, team contributions and transaction activity.',
      },
      {
        title: 'Key findings',
        text: 'Product 1976 generated the highest total volume. Top-up transactions contributed the largest transaction volume, while payment transactions had the highest transaction count. Source 38 accounted for 59.11% of refund volume.',
      },
      {
        title: 'What I learned',
        text: 'This project strengthened my ability to clean and validate data before analysis, translate business rules into transaction categories and communicate findings through clear summaries.',
      },
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/ngocphuongthaole-hub/E-wallet-transaction-analytics',
      },
    ],
  },
  {
    id: 'datafest',
    number: '02',
    title: 'DataFest Patient Journey Analysis',
    category: 'Business Intelligence',
    image: '/images/datafest.png',
    technologies: ['Power BI', 'Python', 'Data Visualisation'],
    description:
      'Investigating follow-up patterns for chronic conditions and exploring how age and transport barriers relate to access to care.',
    role: 'Team leader · Power BI dashboard & recommendations',
    highlight: '7.67M encounter records · 3 dashboard pages',
    sections: [
      {
        title: 'Project overview',
        text: 'Completed by a two-person team during the two-day DataFest 2026 competition. We explored Stormont Vail Health records from 2022–2025, focusing on hypertension, cholesterol disease and type 2 diabetes.',
      },
      {
        title: 'My contribution',
        text: 'Led the team, planned the analysis and helped define the analytical scope. Designed Power BI dashboards and developed recommendations. My teammate handled data cleaning and transformation using Python.',
      },
      {
        title: 'Dashboard design',
        text: 'Built three analytical pages: Overview, Factors Analysis and Transport Barriers. Combined KPI cards, demographic breakdowns, a decomposition tree and geographic analysis with year filters and page navigation.',
      },
      {
        title: 'Insights & recommendations',
        text: 'Recorded follow-up gaps appeared across all three conditions. Patients aged 65+ represented a large share of those flagged in the selected breakdown, while the over-30-km group had the largest recorded transport-issue count. We recommended reviewed outreach lists, practical appointment support and a transport-assistance pilot.',
      },
      {
        title: 'Interpreting the results',
        text: 'The findings describe patterns rather than causes. Encounter records are not unique visits, and differences in group sizes or care received elsewhere should be considered when interpreting follow-up gaps.',
      },
    ],
    links: [
      {
        label: 'View project report',
        href: 'https://docs.google.com/document/d/1YJ93Tub2oRKBQMzs9lltPMMDSDEsCUE10N-qYVTxwYk/edit?tab=t.0',
      },
    ],
  },
  {
    id: 'abc-fashion',
    number: '03',
    title: 'ABC Fashion AI Shopping Stylist',
    category: 'Data Modelling & Development',
    image: '/images/abc-fashion.png',
    technologies: ['PostgreSQL', 'Supabase', 'React', 'Next.js'],
    description:
      'Designing a relational product database and building the shopping-cart experience for an AI-assisted fashion storefront.',
    role: 'Software developer · Database design & shopping cart',
    highlight: 'University industry project · Salesforce client',
    sections: [
      {
        title: 'Project overview',
        text: 'A team-built Next.js storefront combining product browsing, a shopping cart and an AI stylist grounded in a Supabase product catalogue.',
      },
      {
        title: 'Database design',
        text: 'Designed a relational schema for products, categories, sizes, inventory and tags. Defined primary and foreign keys, category hierarchies, junction tables and constraints to support reliable product data and stock management.',
      },
      {
        title: 'Documentation & integration',
        text: 'Created ERDs and data dictionaries to guide implementation and technical handover. Collaborated with developers to align database structures with product search and recommendation requirements.',
      },
      {
        title: 'Frontend contribution',
        text: 'Implemented the shopping-cart page using React and Next.js, supporting the customer journey from selecting products to reviewing the shopping bag.',
      },
      {
        title: 'Outcome',
        text: 'Contributed the database structure and shopping-cart interface to a working team prototype, connecting database design with a practical customer-facing application.',
      },
    ],
    links: [
      {
        label: 'Live prototype',
        href: 'https://abcandco.vercel.app/',
      },
      {
        label: 'View GitHub',
        href: 'https://github.com/trixielimm/abc-fashion-ai-assistant',
      },
    ],
  },
]

type Project = (typeof projects)[number]

function ProjectImage({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#bca383] bg-[#e5d0ae]">
      {imageError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-[#80532d]">
          <span className="font-['Home_Video',monospace] text-6xl">
            {project.number}
          </span>

          <span className="text-xs uppercase tracking-widest">
            {project.category}
          </span>

          <span className="text-xs">
            Project preview coming soon
          </span>
        </div>
      ) : (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="absolute inset-0 block h-full w-full object-cover object-top"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <PageWindow
      filename="projects.exe"
      title="Things I’ve worked on."
      description="A selection of projects exploring data, dashboards and application development. Each one reflects something I’ve built, learned or figured out along the way."
    >
      <div className="grid items-stretch gap-7 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex min-w-0 flex-col border-2 border-[#39281d] bg-[#faefdc] p-5 shadow-[5px_5px_0_#c8ae87] sm:p-6"
          >
            <ProjectImage project={project} />

            <div className="mt-6 flex flex-1 flex-col">
              <p className="text-xs leading-5 font-semibold uppercase tracking-wide text-[#936322]">
                {project.category}
              </p>

              <h2 className="mt-3 text-xl leading-snug font-bold xl:min-h-[84px]">
                {project.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#635044] xl:min-h-[140px]">
                {project.description}
              </p>

              <p className="mt-5 border-y border-[#cbb698] py-3 text-xs leading-6 font-semibold xl:min-h-[74px]">
                {project.highlight}
              </p>

              <ul
                className="mt-5 flex flex-wrap content-start gap-2 xl:min-h-[68px]"
                aria-label="Technologies"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="self-start border border-[#bca383] px-2 py-1 text-xs leading-5"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-6 text-[#635044] xl:min-h-[48px]">
                {project.role}
              </p>

              <details className="group mt-5 border-t border-[#cbb698]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold hover:text-[#936322] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936322] [&::-webkit-details-marker]:hidden">
                  Explore project

                  <span
                    aria-hidden="true"
                    className="text-xl leading-none group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="space-y-5 pb-6">
                  {project.sections.map((section) => (
                    <section key={section.title}>
                      <h3 className="text-sm font-bold">
                        {section.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#635044]">
                        {section.text}
                      </p>
                    </section>
                  ))}
                </div>
              </details>

              <div className="mt-auto flex flex-wrap items-start gap-x-5 gap-y-3 border-t border-[#cbb698] pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-6 font-semibold underline underline-offset-4 hover:text-[#936322]"
                  >
                    {link.label}{' '}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageWindow>
  )
}