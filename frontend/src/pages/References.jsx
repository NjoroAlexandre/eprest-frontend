import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { useReferences } from "../context/ReferencesContext";

export default function References() {
  const { langue } = useLanguage();
  const { references } = useReferences();
  const [filtre, setFiltre] = useState("tous");

  const textes = {
    fr: {
      titre: "Nos références",
      sousTitre: "Des projets concrets, menés avec nos clients.",
      filtreTous: "Tous",
      contexte: "Contexte :",
      resultat: "Résultat :",
      voirProjet: "Consulter l'étude de cas →",
      ctaTitre: "Un projet en tête ?",
      ctaTexte: "Discutons de ce que E PREST peut construire pour vous.",
      ctaBouton: "Démarrer une conversation",
      aucune: "Aucune référence publiée pour le moment.",
    },
    en: {
      titre: "Our references",
      sousTitre: "Real projects, delivered with our clients.",
      filtreTous: "All",
      contexte: "Context:",
      resultat: "Result:",
      voirProjet: "View case study →",
      ctaTitre: "Have a project in mind?",
      ctaTexte: "Let's discuss what E PREST can build for you.",
      ctaBouton: "Start a conversation",
      aucune: "No references published yet.",
    },
  };
  const txt = textes[langue];

  const filtres = [
    { valeur: "tous", label: txt.filtreTous },
    { valeur: "saas", label: "SaaS" },
    { valeur: "devops", label: "DevOps" },
    { valeur: "ia", label: langue === "fr" ? "IA" : "AI" },
  ];

  const referencesPubliees = references.filter((r) => r.publie);
  const referencesFiltrees = filtre === "tous" ? referencesPubliees : referencesPubliees.filter((r) => r.pole === filtre);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Helmet>
          <title>{txt.titre} — E PREST</title>
          <meta
            name="description"
            content={
              langue === "fr"
                ? "Découvrez les projets réalisés par E PREST pour ses clients."
                : "Discover the projects carried out by E PREST for its clients."
            }
          />
        </Helmet>

        <h1 className="mb-2 text-center text-3xl font-bold text-primary-dark">{txt.titre}</h1>
        <p className="mb-10 text-center text-gray-600">{txt.sousTitre}</p>

        <div className="mb-10 flex justify-center gap-2">
          {filtres.map((f) => (
            <button
              key={f.valeur}
              onClick={() => setFiltre(f.valeur)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                filtre === f.valeur ? "bg-primary text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {referencesFiltrees.length === 0 ? (
          <p className="text-center text-gray-500">{txt.aucune}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {referencesFiltrees.map((ref) => (
              <div key={ref.id} className="flex flex-col rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md">
                {ref.imageUrl ? (
                  <img
                    src={ref.imageUrl}
                    alt={ref.titre[langue]}
                    className="h-40 w-full rounded-t-xl object-cover"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center rounded-t-xl bg-gradient-to-br from-primary to-primary-dark">
                    <span className="text-4xl">📁</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {ref.poleLabel[langue]}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-primary-dark">{ref.titre[langue]}</h3>
                  <p className="mb-3 text-xs font-medium text-gray-400">{ref.client}</p>
                  <p className="mb-1 text-sm text-gray-600"><strong>{txt.contexte}</strong> {ref.contexte[langue]}</p>
                  <p className="mb-4 text-sm text-gray-600"><strong>{txt.resultat}</strong> {ref.resultat[langue]}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {ref.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/references/${ref.id}`} className="mt-auto text-sm font-semibold text-primary hover:underline">
                    {txt.voirProjet}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary-dark px-6 py-14 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">{txt.ctaTitre}</h2>
          <p className="mb-8 text-white/70">{txt.ctaTexte}</p>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-dark hover:bg-gray-100"
          >
            {txt.ctaBouton}
          </Link>
        </div>
      </section>
    </>
  );
}