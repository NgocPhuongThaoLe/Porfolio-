import { useState } from 'react'
import PageWindow from '../components/layout/PageWindow'

type Project = {
  id: string
  number: string
  title: string
  category: string
  image: string
  technologies: string[]
  description: string
  role: string
  highlight: string
  sections: {
    title: string
    text: string
  }[]
  links: {
    label: string
    href: string
  }[]
}

const projects: Project[] = [
  {
    id: 'hillview',
    number: '01',
    title: 'Hillview Climate Discovery Stations',
    category: 'MQBS3010 Capstone · University Project',
    image: '/images/hillview-1.png',
    technologies: [
      'System Design',
      'Data Modelling',
      'Digital Prototype',
      'SDG 13',
    ],
    description:
      'Designing a connected digital experience for climate education, from discovering programs and booking visits to recording participation and reviewing progress.',
    role: 'Business Information Systems contributor · Team Q5',
    highlight:
      'Discover → Book → Participate → Track · Three-page prototype',
    sections: [
      {
        title: 'Project overview',
        text: 'An interdisciplinary university capstone proposal for Hillview Estate and The King’s Foundation Australia. Our team combined Marketing, Finance, Accounting, Business Analytics and Business Information Systems to explore a climate education initiative supporting SDG 13.',
      },
      {
        title: 'My contribution',
        text: 'Developed the Business Information Systems section, proposing how a digital platform could connect visitor experiences, operational records and management reporting. Designed the visitor journey, information system architecture and conceptual data model.',
      },
      {
        title: 'Three-page prototype',
        text: 'Explore & Book helps visitors discover programs and arrange a visit. Climate Passport supports QR-based activities and records completion. My Progress allows visitors to review completed activities, access participation badges and submit feedback.',
      },
      {
        title: 'System & data design',
        text: 'Proposed connecting bookings, program participation, visitor feedback and environmental measurements through a central relational database. The design would support reporting on participant reach, climate knowledge, intended behaviour change and environmental outcomes.',
      },
      {
        title: 'Responsible implementation',
        text: 'Recommended introducing essential booking, participation and reporting functions first. The proposal includes data validation, role-based access, privacy safeguards and physical alternatives to QR check-ins. Advanced analytics and AI would follow only when reliable data and clear benefits justify the investment.',
      },
      {
        title: 'Outcome & reflection',
        text: 'Produced a system proposal and illustrative prototype rather than a deployed operational platform. This project helped me connect business needs with digital journeys and data structures, while considering accessibility, implementation costs and the limits of environmental impact claims.',
      },
    ],
    links: [],
  },
  {
    id: 'e-wallet',
    number: '02',
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
    number: '03',
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
    number: '04',
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

const hillviewImages = [
  {
    src: '/images/hillview-1.png',
    title: 'Explore & Book',
    description: 'Discover climate programs and arrange a visit.',
  },
  {
    src: '/images/hillview-2.png',
    title: 'Climate Passport',
    description: 'Take part in activities and record completion.',
  },
  {
    src: '/images/hillview-3.png',
    title: 'My Progress',
    description: 'Review activities, badges and feedback.',
  },
]

function PreviewImage({
  src,
  alt,
  contain = false,
}: {
  src: string
  alt: string
  contain?: boolean
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={`w-full overflow-hidden border border-[#bca383] bg-[#e5d0ae] ${
        contain ? '' : 'relative aspect-[16/10]'
      }`}
    >
      {imageError ? (
        <div className="flex min-h-48 items-center justify-center p-5 text-center text-sm text-[#80532d]">
          {alt}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={
            contain
              ? 'block h-auto w-full'
              : 'absolute inset-0 block h-full w-full object-cover object-top'
          }
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}

function TechnologyTags({
  technologies,
}: {
  technologies: string[]
}) {
  return (
    <ul
      className="flex flex-wrap gap-2"
      aria-label="Tools and skills"
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="border border-[#bca383] px-2 py-1 text-xs leading-5"
        >
          {technology}
        </li>
      ))}
    </ul>
  )
}

function HillviewProject({ project }: { project: Project }) {
  const linkClass =
    'font-semibold underline underline-offset-4 hover:text-[#936322]'

  return (
    <section
      aria-labelledby="hillview-title"
      className="border-2 border-[#39281d] bg-[#faefdc] p-5 shadow-[5px_5px_0_#c8ae87] sm:p-8"
    >
      <header className="max-w-4xl">
        <p className="text-xs leading-6 font-semibold uppercase tracking-widest text-[#936322]">
          Featured project / {project.category}
        </p>

        <h2
          id="hillview-title"
          className="mt-3 text-2xl leading-snug font-bold sm:text-3xl"
        >
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#635044]">
          {project.description}
        </p>

        <p className="mt-4 text-xs leading-6 text-[#635044]">
          {project.role}
        </p>

        <div className="mt-5">
          <TechnologyTags technologies={project.technologies} />
        </div>
      </header>

      <div className="mt-8 border-y border-[#cbb698] py-4">
        <p className="text-sm leading-7 font-semibold">
          Discover → Book → Participate → Track
        </p>

        <p className="mt-1 text-xs leading-6 text-[#635044]">
          Proposed digital platform · Three-page illustrative prototype
        </p>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-3">
        {hillviewImages.map((image, index) => (
          <figure key={image.src} className="min-w-0">
            <PreviewImage
              src={image.src}
              alt={`Hillview prototype: ${image.title}`}
              contain
            />

            <figcaption className="mt-4">
              <h3 className="text-sm font-bold">
                <span className="mr-2 font-mono text-[#936322]">
                  0{index + 1}
                </span>
                {image.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#635044]">
                {image.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 grid gap-6 border-t border-[#cbb698] pt-7 md:grid-cols-2">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-sm font-bold">{section.title}</h3>

            <p className="mt-2 text-sm leading-7 text-[#635044]">
              {section.text}
            </p>
          </section>
        ))}
      </div>

      <section
        aria-labelledby="industry-insights-title"
        className="mt-8 border-t border-[#cbb698] pt-7"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#936322]">
          Learning from industry
        </p>

        <h3
          id="industry-insights-title"
          className="mt-3 text-lg font-bold"
        >
          Perspectives that shaped my proposal
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="border-l-2 border-[#936322] bg-[#f3e5ce] p-5">
            <p className="text-sm leading-7 text-[#635044]">
              The{' '}
              <a
                href="https://www.linkedin.com/in/dchaitow/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Chief Financial Officer
              </a>{' '}
              emphasised prioritisation and understanding trade-offs.
              I applied this to Hillview by prioritising essential
              digital functions before advanced AI.
            </p>
          </div>

          <div className="border-l-2 border-[#936322] bg-[#f3e5ce] p-5">
            <p className="text-sm leading-7 text-[#635044]">
              The{' '}
              <a
                href="https://www.linkedin.com/in/zacci-ashraf-54620a3b2/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Clinical Research Nurse
              </a>{' '}
              highlighted checking data accuracy before presenting
              evidence. This informed my recommendations for data
              validation and reliable participation records.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-w-0 flex-col border-2 border-[#39281d] bg-[#faefdc] p-5 shadow-[5px_5px_0_#c8ae87] sm:p-6">
      <PreviewImage
        src={project.image}
        alt={`${project.title} preview`}
      />

      <div className="mt-6 flex flex-1 flex-col">
        <p className="text-xs leading-5 font-semibold uppercase tracking-wide text-[#936322]">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl leading-snug font-bold xl:min-h-[84px]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#635044] xl:min-h-[140px]">
          {project.description}
        </p>

        <p className="mt-5 border-y border-[#cbb698] py-3 text-xs leading-6 font-semibold xl:min-h-[74px]">
          {project.highlight}
        </p>

        <div className="mt-5 xl:min-h-[68px]">
          <TechnologyTags technologies={project.technologies} />
        </div>

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
                <h4 className="text-sm font-bold">{section.title}</h4>

                <p className="mt-2 text-sm leading-7 text-[#635044]">
                  {section.text}
                </p>
              </section>
            ))}
          </div>
        </details>

        {project.links.length > 0 && (
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
        )}
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  const hillview = projects.find(
    (project) => project.id === 'hillview',
  )

  const otherProjects = projects.filter(
    (project) => project.id !== 'hillview',
  )

  return (
    <PageWindow
      filename="projects.exe"
      title="Things I’ve worked on."
      description="A selection of projects exploring data, digital experiences and system design. Each one reflects something I’ve built, learned or figured out along the way."
    >
      {hillview && <HillviewProject project={hillview} />}

      <section
        aria-labelledby="other-projects-title"
        className="mt-14"
      >
        <header className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#936322]">
            More to explore
          </p>

          <h2
            id="other-projects-title"
            className="mt-3 font-['Home_Video',monospace] text-2xl font-bold"
          >
            Other projects.
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#635044]">
            Working with transaction data, healthcare insights
            and an AI-assisted shopping experience.
          </p>
        </header>

        <div className="grid items-stretch gap-7 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </PageWindow>
  )
}