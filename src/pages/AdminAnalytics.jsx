const statsExemple = {
  visites: 1248,
  visitesEvolution: "+12%",
  conversions: { demo: 34, devis: 21, essai: 47 },
  provenance: [
    { source: "Recherche Google", pourcentage: 42 },
    { source: "LinkedIn", pourcentage: 28 },
    { source: "Direct", pourcentage: 18 },
    { source: "Autres", pourcentage: 12 },
  ],
  chatbot: { conversations: 156, sujetsPrincipaux: ["Tarifs SaaS", "Prise de rendez-vous", "Support technique"] },
};

export default function AdminAnalytics() {
  const totalConversions = statsExemple.conversions.demo + statsExemple.conversions.devis + statsExemple.conversions.essai;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Tableau de suivi</h1>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-6">
          <p className="mb-1 text-sm text-gray-500">Visites ce mois-ci</p>
          <p className="text-3xl font-bold text-primary-dark">{statsExemple.visites.toLocaleString()}</p>
          <p className="mt-1 text-sm text-green-600">{statsExemple.visitesEvolution} vs mois précédent</p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <p className="mb-1 text-sm text-gray-500">Conversions totales</p>
          <p className="text-3xl font-bold text-primary-dark">{totalConversions}</p>
          <p className="mt-1 text-sm text-gray-500">Démo, devis et essai cumulés</p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <p className="mb-1 text-sm text-gray-500">Conversations chatbot</p>
          <p className="text-3xl font-bold text-primary-dark">{statsExemple.chatbot.conversations}</p>
          <p className="mt-1 text-sm text-gray-500">Ce mois-ci</p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-4 text-lg font-semibold text-primary-dark">Conversions par formulaire</h2>
          <div className="space-y-3">
            {Object.entries(statsExemple.conversions).map(([type, valeur]) => {
              const labels = { demo: "Démo", devis: "Devis", essai: "Essai" };
              return (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{labels[type]}</span>
                  <span className="text-sm font-semibold text-primary-dark">{valeur}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-4 text-lg font-semibold text-primary-dark">Provenance du trafic</h2>
          <div className="space-y-3">
            {statsExemple.provenance.map((p) => (
              <div key={p.source}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-gray-600">{p.source}</span>
                  <span className="font-semibold text-primary-dark">{p.pourcentage}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${p.pourcentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-4 text-lg font-semibold text-primary-dark">Sujets les plus abordés avec le chatbot</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          {statsExemple.chatbot.sujetsPrincipaux.map((sujet) => (
            <li key={sujet} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {sujet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}