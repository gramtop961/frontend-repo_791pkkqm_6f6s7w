import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Services section */}
      <Services />

      {/* Call to action */}
      <CTA />

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-yellow-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="h-10 w-10 rounded-lg bg-yellow-400 text-slate-900 flex items-center justify-center font-black shadow ring-1 ring-yellow-300">TLS</div>
              <p className="mt-3 text-sm text-yellow-200/80">Official Yang Ming Agent in Romania</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-yellow-200/80">
                <li>Email: office@tls.ro</li>
                <li>Phone: +40 123 456 789</li>
                <li>Bucharest, Romania</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-yellow-200/80">
                <li>Ocean Freight</li>
                <li>Intermodal</li>
                <li>Warehousing</li>
                <li>Customs & Compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-yellow-200/80">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-yellow-300/20 pt-6 text-xs text-yellow-200/70">
            © {new Date().getFullYear()} Team Logistic Specialists. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
