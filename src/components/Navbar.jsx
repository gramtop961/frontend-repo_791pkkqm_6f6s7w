import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-yellow-400 shadow-lg shadow-yellow-400/30 ring-1 ring-yellow-300 flex items-center justify-center font-black text-slate-900">
              TLS
            </div>
            <div>
              <p className="text-lg sm:text-xl font-semibold text-slate-900">Team Logistic Specialists</p>
              <p className="text-xs sm:text-sm text-slate-700/80">
                Official Yang Ming Agent — Romania
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="mailto:office@tls.ro" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700">
              <Mail className="h-4 w-4" /> office@tls.ro
            </a>
            <a href="tel:+40123456789" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone className="h-4 w-4" /> +40 123 456 789
            </a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-slate-900 text-yellow-300 px-4 py-2 text-sm font-semibold shadow hover:bg-slate-800 transition">
              Contact
            </a>
          </div>

          <button className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200">
            <Menu className="h-5 w-5 text-slate-900" />
          </button>
        </div>
      </nav>
    </header>
  );
}
