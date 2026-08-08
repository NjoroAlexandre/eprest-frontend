import { Helmet } from "react-helmet-async";

const references = [
  {
    client: "Client A",
    pole: "SaaS",
    contexte: "Besoin d'une plateforme de gestion interne.",
    resultat: "Déploiement en 3 mois, adoption à 95% des équipes.",
  },
  {
    client: "Client B",
    pole: "Mise en production & DevOps",
    contexte: "Infrastructure instable, déploiements manuels.",
    resultat: "Pipeline CI/CD automatisé, réduction des incidents de 60%.",
  },
  {
    client: "Client C",
    pole: "Digitalisation & Formation IA",
    contexte: "Équipes non formées aux outils IA.",
    resultat: "Formation de 40 collaborateurs, gain de productivité mesuré.",
  },
];

export default function References() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Helmet>
        <title>Nos références — E PREST</title>
        <meta name="description" content="Découvrez les projets réalisés par E PREST pour ses clients." />
      </Helmet>

      <h1 className="mb-10 text-center text-3xl font-bold text-primary-dark">Nos références</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {references.map((ref) => (
          <div key={ref.client} className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {ref.pole}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-primary-dark">{ref.client}</h3>
            <p className="mb-2 text-sm text-gray-600"><strong>Contexte :</strong> {ref.contexte}</p>
            <p className="text-sm text-gray-600"><strong>Résultat :</strong> {ref.resultat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}