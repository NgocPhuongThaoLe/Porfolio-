export default function Hero() {
  function scrollToAbout() {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    document.getElementById('about')?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="retro-window" aria-labelledby="hero-title">
      <div className="window-bar">
        <span>taylor.exe</span>

        <div className="window-controls" aria-hidden="true">
          <span>−</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      <div className="relative isolate overflow-hidden border border-t-0 border-[#39281d] bg-[#e8cfaa]">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-background.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
        />

        <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[25%_42%_33%]">
          <div className="relative order-2 h-[340px] lg:order-1 lg:h-auto">
            <img
              src={`${import.meta.env.BASE_URL}images/portrait.png`}
              alt="Taylor"
              className="absolute bottom-0 left-1/2 h-[95%] w-full -translate-x-1/2 object-contain object-bottom lg:left-0 lg:h-[85%] lg:w-[120%] lg:translate-x-0"
            />
          </div>

          <div className="relative z-10 order-1 self-center px-6 py-12 lg:order-2 lg:-translate-y-8 lg:px-4 lg:py-16">
            <h1 id="hero-title">SCRAMBLE.</h1>

            <p className="text-base leading-7">
              Somehow, I'm finding my own path.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToAbout}
                className="retro-button secondary cursor-pointer"
              >
                About me
              </button>

              <a href="#/projects" className="retro-button">
                Explore my work →
              </a>
            </div>
          </div>

          <div className="hidden lg:order-3 lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}