import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

const produits = [
  {
    nom: "E PREST CRM",
    description: { fr: "Gestion de la relation client, simple et efficace.", en: "Simple and efficient customer relationship management." },
    plans: [
      {
        nom: "Starter",
        prixMensuel: 15000,
        prixAnnuel: 150000,
        recommande: false,
        caracteristiques: {
          fr: ["1 utilisateur", "Support email", "1 Go de stockage"],
          en: ["1 user", "Email support", "1 GB of storage"],
        },
      },
      {
        nom: "Pro",
        prixMensuel: 45000,
        prixAnnuel: 450000,
        recommande: true,
        caracteristiques: {
          fr: ["10 utilisateurs", "Support prioritaire", "20 Go de stockage"],
          en: ["10 users", "Priority support", "20 GB of storage"],
        },
      },
      {
        nom: "Entreprise",
        prixMensuel: 120000,
        prixAnnuel: 1200000,
        recommande: false,
        caracteristiques: {
          fr: ["Utilisateurs illimités", "Support dédié", "Stockage illimité"],
          en: ["Unlimited users", "Dedicated support", "Unlimited storage"],
        },
      },
    ],
    faq: [
      {
        question: { fr: "Puis-je changer de plan à tout moment ?", en: "Can I change plans at any time?" },
        reponse: { fr: "Oui, vous pouvez passer d'un plan à l'autre à tout moment depuis votre espace client.", en: "Yes, you can switch between plans at any time from your client area." },
      },
      {
        question: { fr: "Y a-t-il un engagement de durée ?", en: "Is there a commitment period?" },
        reponse: { fr: "Non, tous nos plans sont sans engagement, résiliables à tout moment.", en: "No, all our plans are commitment-free and can be cancelled at any time." },
      },
    ],
  },
];

export default function Catalogue() {
  const { langue } = useLanguage();
  const [periodicite, setPeriodicite] = useState("mensuel");
  const [faqOuverte, setFaqOuverte] = useState(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Catalogue SaaS — E PREST" : "SaaS Catalog — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Découvrez nos solutions SaaS et choisissez le plan adapté à votre organisation."
              : "Discover our SaaS solutions and choose the plan that fits your organization."
          }
        />
      </Helmet>

      <h1 className="mb-4 text-center text-3xl font-bold text-primary-dark">
        {langue === "fr" ? "Notre catalogue SaaS" : "Our SaaS catalog"}
      </h1>
      <p className="mb-10 text-center text-gray-600">
        {langue === "fr" ? "Choisissez le plan adapté à votre organisation." : "Choose the plan that fits your organization."}
      </p>

      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => setPeriodicite("mensuel")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${periodicite === "mensuel" ? "bg-primary text-white" : "text-gray-600"}`}
          >
            {langue === "fr" ? "Mensuel" : "Monthly"}
          </button>
          <button
            onClick={() => setPeriodicite("annuel")}
            className={`rounded-md px-4 py-2 text-sm font-medium ${periodicite === "annuel" ? "bg-primary text-white" : "text-gray-600"}`}
          >
            {langue === "fr" ? "Annuel" : "Yearly"}
          </button>
        </div>
      </div>

      {produits.map((produit) => (
        <div key={produit.nom} className="mb-16">
          <h2 className="mb-2 text-2xl font-semibold text-primary-dark">{produit.nom}</h2>
          <p className="mb-6 text-gray-600">{produit.description[langue]}</p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {produit.plans.map((plan) => (
              <div
                key={plan.nom}
                className={`flex flex-col rounded-xl border p-6 ${plan.recommande ? "border-primary shadow-md" : "border-gray-200 shadow-sm"}`}
              >
                <div className="mb-3 h-7">
                  {plan.recommande && (
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {langue === "fr" ? "Recommandé" : "Recommended"}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary-dark">{plan.nom}</h3>
                <p className="mb-4 text-3xl font-bold text-primary-dark">
                  {(periodicite === "mensuel" ? plan.prixMensuel : plan.prixAnnuel).toLocaleString()} Ar
                  <span className="text-sm font-normal text-gray-500">
                    {" / "}
                    {periodicite === "mensuel" ? (langue === "fr" ? "mois" : "month") : (langue === "fr" ? "an" : "year")}
                  </span>
                </p>
                <ul className="mb-6 flex-1 space-y-2 text-sm text-gray-600">
                  {plan.caracteristiques[langue].map((c) => (
                    <li key={c}>✓ {c}</li>
                  ))}
                </ul>
                <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
                  {langue === "fr" ? "Choisir ce plan" : "Choose this plan"}
                </button>
              </div>
            ))}
          </div>

          {produit.faq && produit.faq.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-primary-dark">
                {langue === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
              </h3>
              <div className="space-y-3">
                {produit.faq.map((item, index) => (
                  <div key={index} className="rounded-lg border border-gray-200">
                    <button
                      onClick={() => setFaqOuverte(faqOuverte === index ? null : index)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-700"
                    >
                      {item.question[langue]}
                      <span>{faqOuverte === index ? "−" : "+"}</span>
                    </button>
                    {faqOuverte === index && (
                      <p className="px-4 pb-3 text-sm text-gray-600">{item.reponse[langue]}</p>
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