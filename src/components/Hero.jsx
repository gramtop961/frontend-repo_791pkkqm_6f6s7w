import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast and brand tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-yellow-100/25 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

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

      {/* Dynamic logistics visuals: vessel followed by truck */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 select-none">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Vessel */}
          <motion.div
            initial={{ x: '-30%', opacity: 0, rotate: -2 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="w-[70%] sm:w-[55%] md:w-[45%] lg:w-[38%] drop-shadow-2xl"
          >
            <ShipSVG />
          </motion.div>

          {/* Truck */}
          <motion.div
            initial={{ x: '30%', opacity: 0, rotate: 2 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.6 }}
            className="ml-auto -mt-8 w-[60%] sm:w-[45%] md:w-[40%] lg:w-[32%] drop-shadow-xl"
          >
            <TruckSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShipSVG() {
  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Water */}
      <defs>
        <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#eab30822" />
          <stop offset="100%" stopColor="#93c5fd33" />
        </linearGradient>
      </defs>
      <rect x="0" y="210" width="800" height="90" fill="url(#water)" />

      {/* Hull */}
      <path d="M40 190 L680 190 L740 220 L120 220 Z" fill="#0f172a" />
      <path d="M120 220 L740 220 L720 230 L140 230 Z" fill="#1f2937" />

      {/* Deck */}
      <rect x="180" y="140" width="360" height="50" rx="6" fill="#fde047" stroke="#f59e0b" />

      {/* Containers */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={190 + i * 58} y={150} width="48" height="30" rx="4" fill="#facc15" stroke="#eab308" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={210 + i * 58} y={120} width="48" height="30" rx="4" fill="#fde047" stroke="#f59e0b" />
      ))}

      {/* Bridge */}
      <rect x="560" y="120" width="70" height="70" rx="6" fill="#e5e7eb" />
      <rect x="570" y="130" width="50" height="15" rx="3" fill="#94a3b8" />
      <rect x="570" y="150" width="50" height="10" rx="2" fill="#cbd5e1" />

      {/* Wave highlights */}
      <path d="M80 230 Q120 220 160 230 T240 230 T320 230 T400 230 T480 230 T560 230 T640 230 T720 230" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

function TruckSVG() {
  return (
    <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Road */}
      <rect x="0" y="210" width="800" height="90" fill="#0f172a11" />
      <rect x="0" y="245" width="800" height="4" fill="#0f172a22" />

      {/* Trailer */}
      <rect x="260" y="150" width="360" height="70" rx="8" fill="#fde047" stroke="#f59e0b" />
      <rect x="280" y="165" width="80" height="40" rx="6" fill="#facc15" />
      <rect x="370" y="165" width="230" height="40" rx="6" fill="#facc15" />

      {/* Cab */}
      <rect x="200" y="165" width="80" height="55" rx="8" fill="#0f172a" />
      <rect x="205" y="170" width="50" height="25" rx="4" fill="#94a3b8" />
      <rect x="260" y="165" width="10" height="55" fill="#1f2937" />

      {/* Wheels */}
      <circle cx="280" cy="225" r="14" fill="#0f172a" />
      <circle cx="520" cy="225" r="16" fill="#0f172a" />
      <circle cx="580" cy="225" r="16" fill="#0f172a" />
      <circle cx="230" cy="225" r="14" fill="#0f172a" />

      {/* Highlights */}
      <rect x="430" y="158" width="150" height="6" rx="3" fill="#fef08a" opacity="0.55" />
      <rect x="210" y="225" width="420" height="3" rx="2" fill="#94a3b8" opacity="0.35" />
    </svg>
  );
}
