import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Compensation from "./components/Compensation";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-emerald-700">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
            EnergiNet
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#benefices" className="text-gray-700 hover:text-emerald-700">Bénéfices</a>
            <a href="#plan" className="text-gray-700 hover:text-emerald-700">Rémunération</a>
            <a href="#rejoindre" className="text-white bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700">Rejoindre</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <div id="plan">
          <Compensation />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EnergiNet. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Mentions légales</a>
            <a href="#" className="hover:text-gray-700">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
