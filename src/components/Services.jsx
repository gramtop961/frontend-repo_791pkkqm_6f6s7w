import { Ship, Truck, Boxes, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL/LCL services with global coverage powered by Yang Ming's network.",
  },
  {
    icon: Truck,
    title: "Intermodal",
    desc: "Seamless rail and truck connections across Europe for door-to-door delivery.",
  },
  {
    icon: Boxes,
    title: "Warehousing",
    desc: "Bonded storage, cross-docking, and value-added services for any cargo size.",
  },
  {
    icon: ShieldCheck,
    title: "Customs & Compliance",
    desc: "Brokerage, documentation, and trade compliance handled by certified experts.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Solutions built for speed</h2>
          <p className="mt-3 text-slate-700/90 text-lg">Practical, reliable, and compliant — designed to keep your cargo moving.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 text-slate-900 ring-1 ring-yellow-400 shadow shadow-yellow-400/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-700/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
