import { createContext, useContext, useState } from "react";

const articlesInitiaux = [
  {
    id: 1,
    titre: "E PREST lance son nouveau catalogue SaaS",
    slug: "lancement-catalogue-saas",
    extrait: "Découvrez les nouvelles fonctionnalités de notre catalogue de solutions SaaS, pensées pour simplifier votre quotidien.",
    auteur: "Équipe E PREST",
    date: "2026-07-15",
  },
  {
    id: 2,
    titre: "5 bonnes pratiques DevOps pour 2026",
    slug: "bonnes-pratiques-devops-2026",
    extrait: "Un tour d'horizon des pratiques DevOps qui font la différence pour fiabiliser vos déploiements.",
    auteur: "Équipe E PREST",
    date: "2026-06-20",
  },
  {
    id: 3,
    titre: "Pourquoi former vos équipes à l'IA dès maintenant",
    slug: "former-equipes-ia",
    extrait: "La montée en compétence IA n'est plus une option. Voici comment E PREST accompagne cette transition.",
    auteur: "Équipe E PREST",
    date: "2026-05-10",
  },
];

const AppDataContext = createContext(null);

export function AppDataProvider({ children }) {
  const [articles, setArticles] = useState(articlesInitiaux);

  const ajouterArticle = (article) => {
    setArticles((prev) => [{ ...article, id: Date.now(), date: new Date().toISOString().slice(0, 10) }, ...prev]);
  };

  const supprimerArticle = (id) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AppDataContext.Provider value={{ articles, ajouterArticle, supprimerArticle }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}