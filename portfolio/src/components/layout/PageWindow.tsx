import type { ReactNode } from 'react'

type PageWindowProps = {
  filename: string
  title: string
  description: string
  children: ReactNode
}

export default function PageWindow({
  filename,
  title,
  description,
  children,
}: PageWindowProps) {
  return (
    <div className="page-container">
      <section className="retro-window">
        <div className="window-bar">
          <span>{filename}</span>

          <div className="window-controls" aria-hidden="true">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="bg-[#f3e5ce] px-6 py-10 sm:px-10 lg:px-14">
          <header className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#936322]">
              SCRAMBLE / PORTFOLIO
            </p>

            <h1 className="font-['Home_Video',monospace] text-3xl leading-tight font-bold sm:text-4xl">
              {title}
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#635044]">
              {description}
            </p>
          </header>

          {children}
        </div>
      </section>
    </div>
  )
}