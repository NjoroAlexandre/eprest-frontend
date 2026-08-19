import { createContext, useContext, useState } from "react";

const produitInitial = {
  nom: "E PREST CRM",
  description: { fr: "Gestion de la relation client, simple et efficace.", en: "Simple and efficient customer relationship management." },
  plans: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
};

const CatalogueContext = createContext(null);

export function CatalogueProvider({ children }) {
  const [produit, setProduit] = useState(produitInitial);

  const mettreAJourProduit = (champs) => {
    setProduit((prev) => ({ ...prev, ...champs }));
  };

  const mettreAJourPlan = (id, champs) => {
    setProduit((prev) => ({
      ...prev,
      plans: prev.plans.map((p) => (p.id === id ? { ...p, ...champs } : p)),
    }));
  };

  return (
    <CatalogueContext.Provider value={{ produit, mettreAJourProduit, mettreAJourPlan }}>
      {children}
    </CatalogueContext.Provider>
  );
}

export function useCatalogue() {
  return useContext(CatalogueContext);
}