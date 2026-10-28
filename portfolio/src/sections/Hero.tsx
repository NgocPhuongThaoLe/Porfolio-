import Button from '../components/ui/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[80vh] items-center gap-12 py-20 lg:grid-cols-[1.3fr_1fr]"
    >
      <div>
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Data · Design · Development
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Turning data into
          <span className="block text-cyan-400">clearer decisions.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          A portfolio of projects exploring analytics, business intelligence
          and thoughtful digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects">Explore Projects ↗</Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
      >
        <div className="mb-8 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-slate-500">
            workflow.ts
          </span>
        </div>

        <div className="space-y-5 font-mono text-sm sm:text-base">
          <p className="text-slate-500">// From questions to understanding</p>
          <p>
            <span className="text-purple-400">const</span> workflow = [
          </p>

          <div className="space-y-4 pl-6 text-cyan-300">
            <p>'Understand the problem',</p>
            <p>'Prepare the data',</p>
            <p>'Build the model',</p>
            <p>'Communicate the insight'</p>
          </div>

          <p>]</p>
        </div>
      </div>
    </section>
  )
}