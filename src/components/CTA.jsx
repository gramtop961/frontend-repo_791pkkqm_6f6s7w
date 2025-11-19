export default function CTA() {
  return (
    <section id="quote" className="relative bg-gradient-to-b from-white via-yellow-50 to-yellow-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-yellow-300 bg-yellow-200/80 p-8 sm:p-10 shadow-xl shadow-yellow-400/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Ready to move your cargo?</h3>
              <p className="mt-2 text-slate-800/90">Tell us your route and volume — our team will respond within one business day.</p>
            </div>
            <div className="flex lg:justify-end">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 text-yellow-300 px-6 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
