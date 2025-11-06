import { Rocket, Leaf, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
            <Leaf className="h-4 w-4" /> Énergie propre. Impact réel.
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Développez votre réseau autour de l’énergie renouvelable
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rejoignez un mouvement qui accélère la transition énergétique tout en créant des revenus
            récurrents. Partagez, parrainez et aidez les foyers à économiser sur leurs factures.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#rejoindre"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Rocket className="h-5 w-5" /> Rejoindre le réseau
            </a>
            <a
              href="#benefices"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50"
            >
              <Zap className="h-5 w-5 text-emerald-600" /> Découvrir l’opportunité
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
