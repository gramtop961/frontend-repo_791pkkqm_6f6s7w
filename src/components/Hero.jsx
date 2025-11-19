import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text contrast (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-yellow-100/20 to-white"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72vh] md:min-h-[78vh] items-center">
          <div className="max-w-2xl py-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-300/90 text-slate-900 px-3 py-1 text-xs font-semibold ring-1 ring-yellow-400 shadow shadow-yellow-400/30">
              Trusted Logistics • Yang Ming Agent RO
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Team Logistic Specialists
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-800/90">
              End-to-end ocean freight and intermodal solutions. We are the official Yang Ming agent in Romania, delivering reliability, speed, and visibility across your supply chain.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#quote" className="inline-flex items-center rounded-lg bg-slate-900 text-yellow-300 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">
                Get a Quote
              </a>
              <a href="#services" className="inline-flex items-center rounded-lg bg-yellow-300 text-slate-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-yellow-400 hover:bg-yellow-200 transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
