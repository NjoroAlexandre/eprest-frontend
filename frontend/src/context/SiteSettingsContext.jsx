import { createContext, useContext, useState } from "react";

const parametresInitiaux = {
  logoUrl: "",
  nomEntreprise: "E PREST",
  email: "",
  telephone: "",
  adresse: "Antananarivo, Madagascar",
  mentionsLegales: {
    editeur: "E PREST Solutions — [adresse complète à compléter]",
    hebergement: "[Nom de l'hébergeur à compléter]",
    contact: "[Email de contact à compléter]",
  },
};

const SiteSettingsContext = createContext(null);

export function SiteSettingsProvider({ children }) {
  const [parametres, setParametres] = useState(parametresInitiaux);

  const mettreAJourParametres = (nouveauxParametres) => {
    setParametres((prev) => ({ ...prev, ...nouveauxParametres }));
  };

  const mettreAJourMentionsLegales = (nouvellesMentions) => {
    setParametres((prev) => ({
      ...prev,
      mentionsLegales: { ...prev.mentionsLegales, ...nouvellesMentions },
    }));
  };

  return (
    <SiteSettingsContext.Provider value={{ parametres, mettreAJourParametres, mettreAJourMentionsLegales }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}