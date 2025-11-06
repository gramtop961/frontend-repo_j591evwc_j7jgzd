import { Shield, PiggyBank, Users, Sun } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Énergie verte",
    desc: "Proposez des solutions solaires et renouvelables certifiées, fiables et durables.",
  },
  {
    icon: PiggyBank,
    title: "Économies",
    desc: "Aidez vos clients à réduire leurs factures et générez des revenus récurrents.",
  },
  {
    icon: Users,
    title: "Réseau évolutif",
    desc: "Développez une équipe, formez vos partenaires et multipliez vos commissions.",
  },
  {
    icon: Shield,
    title: "Accompagnement",
    desc: "Accédez à des outils marketing, des formations et un support dédié.",
  },
];

export default function Benefits() {
  return (
    <section id="benefices" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Pourquoi nous</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une opportunité d’impact et de revenus
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Transformez la transition énergétique en carrière. Vous aidez la planète et votre entourage.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
