export default function Compensation() {
  const tiers = [
    { level: "Niveau 1", rate: "15%", info: "Commission directe sur vos ventes" },
    { level: "Niveau 2", rate: "7%", info: "Revenus sur les ventes de votre équipe" },
    { level: "Niveau 3", rate: "3%", info: "Bonus de profondeur pour leaders actifs" },
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plan de rémunération transparent</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Gagnez sur vos ventes personnelles et celles de votre réseau avec des bonus mensuels.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.level} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
              <p className="text-sm text-emerald-100">{t.level}</p>
              <p className="mt-3 text-4xl font-extrabold">{t.rate}</p>
              <p className="mt-2 text-emerald-50">{t.info}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-emerald-100">
            Des primes de performance et des récompenses écoresponsables sont ajoutées chaque trimestre.
          </p>
        </div>
      </div>
    </section>
  );
}
