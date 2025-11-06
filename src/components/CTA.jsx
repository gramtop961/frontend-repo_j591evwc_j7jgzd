export default function CTA() {
  return (
    <section id="rejoindre" className="bg-white py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
          Prêt(e) à lancer votre activité dans l’énergie ?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Inscrivez-vous pour recevoir votre kit de démarrage, nos formations et votre lien de parrainage.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const name = data.get("name");
            const email = data.get("email");
            alert(`Merci ${name}! Nous vous contacterons à ${email}.`);
            form.reset();
          }}
          className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            name="name"
            required
            type="text"
            placeholder="Votre nom"
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Votre email"
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Rejoindre
          </button>
        </form>
        <p className="mt-3 text-sm text-gray-500">Aucun engagement. Annulation à tout moment.</p>
      </div>
    </section>
  );
}
