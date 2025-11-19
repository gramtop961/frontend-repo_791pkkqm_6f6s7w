import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax mappings
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const shipY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const truckY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Spline background with gentle parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Gradient overlays for contrast and brand tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-300/40 via-yellow-100/25 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72vh] md:min-h-[78vh] items-center">
          <motion.div style={{ y: textY }} className="max-w-2xl py-20">
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
          </motion.div>
        </div>
      </div>

      {/* Dynamic logistics visuals: vessel followed by truck with scroll parallax */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 select-none">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Vessel */}
          <motion.div
            initial={{ x: '-28%', opacity: 0, rotate: -1 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
            style={{ y: shipY }}
            className="w-[78%] sm:w-[60%] md:w-[48%] lg:w-[40%] drop-shadow-2xl"
          >
            <ShipSVG />
          </motion.div>

          {/* Truck */}
          <motion.div
            initial={{ x: '28%', opacity: 0, rotate: 1 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.4 }}
            style={{ y: truckY }}
            className="ml-auto -mt-8 w-[64%] sm:w-[48%] md:w-[42%] lg:w-[34%] drop-shadow-xl"
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
    <motion.svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto"
      initial={{ y: 0 }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <defs>
        <linearGradient id="hullGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#eab30822" />
          <stop offset="100%" stopColor="#93c5fd33" />
        </linearGradient>
      </defs>

      {/* Water */}
      <rect x="0" y="230" width="900" height="90" fill="url(#water)" />

      {/* Hull with bow curve */}
      <path d="M70 210 C 200 210, 580 200, 760 200 L 820 230 L 140 230 Z" fill="url(#hullGrad)" />
      {/* Boot topping line */}
      <path d="M130 230 L 820 230" stroke="#1f2937" strokeWidth="6" />

      {/* Bulbous bow */}
      <ellipse cx="120" cy="228" rx="20" ry="8" fill="#0f172a" opacity="0.9" />

      {/* Deck base */}
      <rect x="220" y="140" width="420" height="58" rx="8" fill="#fde047" stroke="#f59e0b" />

      {/* Container stacks (more realistic grid) */}
      {/* Row 3 (top) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={`r3-${i}`} x={240 + i * 60} y={100} width="54" height="36" rx="4" fill="#f59e0b" stroke="#d97706" />
      ))}
      {/* Row 2 */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={`r2-${i}`} x={220 + i * 60} y={136} width="54" height="36" rx="4" fill="#facc15" stroke="#eab308" />
      ))}
      {/* Row 1 */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={`r1-${i}`} x={220 + i * 60} y={172} width="54" height="36" rx="4" fill="#fde047" stroke="#f59e0b" />
      ))}

      {/* Container vertical locking lines for realism */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={`lock-${i}`} x={246 + i * 60} y={100} width="2" height="108" fill="#eab30855" />
      ))}

      {/* Bridge / superstructure */}
      <rect x="660" y="110" width="90" height="90" rx="8" fill="#e5e7eb" />
      <rect x="670" y="120" width="70" height="18" rx="3" fill="#94a3b8" />
      <rect x="670" y="145" width="70" height="12" rx="2" fill="#cbd5e1" />
      <rect x="700" y="90" width="10" height="20" fill="#94a3b8" />

      {/* Wake lines with gentle motion illusion */}
      <motion.path d="M110 240 Q 180 230 250 240 T 390 240 T 530 240 T 670 240 T 810 240" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }} />
      <motion.path d="M130 248 Q 200 238 270 248 T 410 248 T 550 248 T 690 248 T 830 248" stroke="#93c5fd" strokeWidth="1.5" fill="none" opacity="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, repeat: Infinity, repeatType: 'mirror', delay: 0.3 }} />
    </motion.svg>
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
