import { createContext, useContext, useState } from "react";

const traductions = {
  fr: {
    nosPoles: "Nos pôles",
    catalogue: "Catalogue",
    references: "Références",
    actualites: "Actualités",
    aPropos: "À propos",
    demanderDemo: "Demander une démo",
    heroTitre: "E PREST, votre partenaire technologique de confiance",
    heroTexte: "SaaS, mise en production et digitalisation — nous accompagnons votre transformation numérique de bout en bout.",
    troisPoles: "Nos trois pôles d'expertise",
  },
  en: {
    nosPoles: "Our expertise",
    catalogue: "Catalog",
    references: "References",
    actualites: "News",
    aPropos: "About",
    demanderDemo: "Request a demo",
    heroTitre: "E PREST, your trusted technology partner",
    heroTexte: "SaaS, production deployment and digitalization — we support your digital transformation from end to end.",
    troisPoles: "Our three areas of expertise",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [langue, setLangue] = useState("fr");

  const t = (cle) => traductions[langue][cle] || cle;

  return (
    <LanguageContext.Provider value={{ langue, setLangue, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}