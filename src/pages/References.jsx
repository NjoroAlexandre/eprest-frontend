import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

const references = [
  {
    client: "Client A",
    pole: { fr: "SaaS", en: "SaaS" },
    contexte: { fr: "Besoin d'une plateforme de gestion interne.", en: "Needed an internal management platform." },
    resultat: { fr: "Déploiement en 3 mois, adoption à 95% des équipes.", en: "Deployed in 3 months, 95% team adoption." },
  },
  {
    client: "Client B",
    pole: { fr: "Mise en production & DevOps", en: "Production & DevOps" },
    contexte: { fr: "Infrastructure instable, déploiements manuels.", en: "Unstable infrastructure, manual deployments." },
    resultat: { fr: "Pipeline CI/CD automatisé, réduction des incidents de 60%.", en: "Automated CI/CD pipeline, 60% fewer incidents." },
  },
  {
    client: "Client C",
    pole: { fr: "Digitalisation & Formation IA", en: "Digitalization & AI Training" },
    contexte: { fr: "Équipes non formées aux outils IA.", en: "Teams untrained on AI tools." },
    resultat: { fr: "Formation de 40 collaborateurs, gain de productivité mesuré.", en: "40 employees trained, measurable productivity gains." },
  },
];

export default function References() {
  const { langue } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Nos références — E PREST" : "Our references — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Découvrez les projets réalisés par E PREST pour ses clients."
              : "Discover the projects carried out by E PREST for its clients."
          }
        />
      </Helmet>

      <h1 className="mb-10 text-center text-3xl font-bold text-primary-dark">
        {langue === "fr" ? "Nos références" : "Our references"}
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {references.map((ref) => (
          <div key={ref.client} className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {ref.pole[langue]}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-primary-dark">{ref.client}</h3>
            <p className="mb-2 text-sm text-gray-600">
              <strong>{langue === "fr" ? "Contexte :" : "Context:"}</strong> {ref.contexte[langue]}
            </p>
            <p className="text-sm text-gray-600">
              <strong>{langue === "fr" ? "Résultat :" : "Result:"}</strong> {ref.resultat[langue]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}