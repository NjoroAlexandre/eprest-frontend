import { useState } from "react";
import { Helmet } from "react-helmet-async";

const produits = [
  {
    nom: "E PREST CRM",
    description: "Gestion de la relation client, simple et efficace.",
    plans: [
      { nom: "Starter", prixMensuel: 15000, prixAnnuel: 150000, recommande: false, caracteristiques: ["1 utilisateur", "Support email", "1 Go de stockage"] },
      { nom: "Pro", prixMensuel: 45000, prixAnnuel: 450000, recommande: true, caracteristiques: ["10 utilisateurs", "Support prioritaire", "20 Go de stockage"] },
      { nom: "Entreprise", prixMensuel: 120000, prixAnnuel: 1200000, recommande: false, caracteristiques: ["Utilisateurs illimités", "Support dédié", "Stockage illimité"] },
    ],
    faq: [
      { question: "Puis-je changer de plan à tout moment ?", reponse: "Oui, vous pouvez passer d'un plan à l'autre à tout moment depuis votre espace client." },
      { question: "Y a-t-il un engagement de durée ?", reponse: "Non, tous nos plans sont sans engagement, résiliables à tout moment." },
    ],
  },
];

export default function Catalogue() {
  const [periodicite, setPeriodicite] = useState("mensuel");
  const [faqOuverte, setFaqOuverte] = useState(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Helmet>
        <title>Catalogue SaaS — E PREST</title>
        <meta name="description" content="Découvrez nos solutions SaaS et choisissez le plan adapté à votre organisation." />
      </Helmet>

      <h1 className="mb-4 text-center text-3xl font-bold text-primary-dark">Notre catalogue SaaS</h1>
      <p className="mb-10 text-center text-gray-600">Choisissez le plan adapté à votre organisation.</p>

      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => setPeriodicite("mensuel")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${periodicite === "mensuel" ? "bg-primary text-white" : "text-gray-600"}`}
          >
            Mensuel
          </button>
          <button
            onClick={() => setPeriodicite("annuel")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${periodicite === "annuel" ? "bg-primary text-white" : "text-gray-600"}`}
          >
            Annuel
          </button>
        </div>
      </div>

      {produits.map((produit) => (
        <div key={produit.nom} className="mb-16">
          <h2 className="mb-2 text-2xl font-semibold text-primary-dark">{produit.nom}</h2>
          <p className="mb-6 text-gray-600">{produit.description}</p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {produit.plans.map((plan) => (
              <div
                key={plan.nom}
                className={`rounded-xl border p-6 ${plan.recommande ? "border-primary shadow-md" : "border-gray-200 shadow-sm"}`}
              >
                {plan.recommande && (
                  <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Recommandé
                  </span>
                )}
                <h3 className="mb-2 text-lg font-semibold text-primary-dark">{plan.nom}</h3>
                <p className="mb-4 text-3xl font-bold text-primary-dark">
                  {(periodicite === "mensuel" ? plan.prixMensuel : plan.prixAnnuel).toLocaleString()} Ar
                  <span className="text-sm font-normal text-gray-500"> / {periodicite === "mensuel" ? "mois" : "an"}</span>
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  {plan.caracteristiques.map((c) => (
                    <li key={c}>✓ {c}</li>
                  ))}
                </ul>
                <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
                  Choisir ce plan
                </button>
              </div>
            ))}
          </div>

          {produit.faq && produit.faq.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary-dark">Questions fréquentes</h3>
              <div className="space-y-3">
                {produit.faq.map((item, index) => (
                  <div key={index} className="rounded-lg border border-gray-200">
                    <button
                      onClick={() => setFaqOuverte(faqOuverte === index ? null : index)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-700"
                    >
                      {item.question}
                      <span>{faqOuverte === index ? "−" : "+"}</span>
                    </button>
                    {faqOuverte === index && (
                      <p className="px-4 pb-3 text-sm text-gray-600">{item.reponse}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}