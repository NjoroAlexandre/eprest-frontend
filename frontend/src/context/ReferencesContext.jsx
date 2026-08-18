import { createContext, useContext, useState } from "react";

const referencesInitiales = [
  {
    id: 1,
    client: "Client A",
    pole: "saas",
    poleLabel: { fr: "SaaS", en: "SaaS" },
    titre: { fr: "Plateforme de gestion interne", en: "Internal management platform" },
    contexte: { fr: "Besoin d'une plateforme de gestion interne.", en: "Needed an internal management platform." },
    resultat: { fr: "Déploiement en 3 mois, adoption à 95% des équipes.", en: "Deployed in 3 months, 95% team adoption." },
    tags: ["React", "Node.js", "PostgreSQL"],
    imageUrl: "",
    lienProjet: "",
    accordClient: true,
    publie: true,
  },
  {
    id: 2,
    client: "Client B",
    pole: "devops",
    poleLabel: { fr: "Mise en production & DevOps", en: "Production & DevOps" },
    titre: { fr: "Automatisation des déploiements", en: "Deployment automation" },
    contexte: { fr: "Infrastructure instable, déploiements manuels.", en: "Unstable infrastructure, manual deployments." },
    resultat: { fr: "Pipeline CI/CD automatisé, réduction des incidents de 60%.", en: "Automated CI/CD pipeline, 60% fewer incidents." },
    tags: ["Docker", "CI/CD", "AWS"],
    imageUrl: "",
    lienProjet: "",
    accordClient: true,
    publie: true,
  },
  {
    id: 3,
    client: "Client C",
    pole: "ia",
    poleLabel: { fr: "Digitalisation & Formation IA", en: "Digitalization & AI Training" },
    titre: { fr: "Montée en compétence IA des équipes", en: "AI upskilling for teams" },
    contexte: { fr: "Équipes non formées aux outils IA.", en: "Teams untrained on AI tools." },
    resultat: { fr: "Formation de 40 collaborateurs, gain de productivité mesuré.", en: "40 employees trained, measurable productivity gains." },
    tags: ["Formation", "IA générative", "Accompagnement"],
    imageUrl: "",
    lienProjet: "",
    accordClient: false,
    publie: false,
  },
];

const ReferencesContext = createContext(null);

export function ReferencesProvider({ children }) {
  const [references, setReferences] = useState(referencesInitiales);

  const ajouterReference = (reference) => {
    setReferences((prev) => [...prev, { ...reference, id: Date.now(), publie: false }]);
  };

  const togglePublie = (id) => {
    setReferences((prev) =>
      prev.map((r) => (r.id === id ? { ...r, publie: !r.publie } : r))
    );
  };

  const supprimerReference = (id) => {
    setReferences((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <ReferencesContext.Provider value={{ references, ajouterReference, togglePublie, supprimerReference }}>
      {children}
    </ReferencesContext.Provider>
  );
}

export function useReferences() {
  return useContext(ReferencesContext);
}