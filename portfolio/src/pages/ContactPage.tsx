import PageWindow from '../components/layout/PageWindow'

export default function ContactPage() {
  return (
    <PageWindow
      filename="contact.exe"
      title="Let’s connect."
      description="Contact information and a downloadable CV will be added when the final content is ready."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="border-2 border-[#39281d] bg-[#faefdc] p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold">Find me here</h2>

          <dl className="space-y-6">
            {['Email', 'LinkedIn', 'GitHub'].map((label) => (
              <div
                key={label}
                className="border-b border-[#cbb698] pb-5"
              >
                <dt className="text-sm font-semibold">{label}</dt>
                <dd className="mt-2 text-sm text-[#776454]">
                  Coming soon
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-2 border-[#39281d] bg-[#e5d0ae] p-6 sm:p-8">
          <div className="flex min-h-72 flex-col items-center justify-center border border-[#bca383] bg-[#fff9ee] p-8 text-center shadow-[5px_5px_0_#bba17b]">
            <span className="font-mono text-4xl">CV.pdf</span>
            <h2 className="mt-6 text-lg font-semibold">
              A closer look at my background.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#776454]">
              CV preview and download will appear here.
            </p>
          </div>
        </section>
      </div>
    </PageWindow>
  )
}