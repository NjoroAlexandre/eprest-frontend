import { Helmet } from "react-helmet-async";
import { useAppData } from "../context/AppDataContext";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { articles } = useAppData();
  const { langue } = useLanguage();

  const textes = {
    fr: {
      titre: "Actualités",
      sousTitre: "Les dernières nouvelles d'E PREST.",
      aucun: "Aucun article publié pour le moment.",
    },
    en: {
      titre: "News",
      sousTitre: "The latest news from E PREST.",
      aucun: "No articles published yet.",
    },
  };
  const txt = textes[langue];

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>{txt.titre} — E PREST</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Suivez les dernières actualités et articles d'E PREST sur le SaaS, le DevOps et l'IA."
              : "Follow the latest news and articles from E PREST on SaaS, DevOps and AI."
          }
        />
      </Helmet>

      <h1 className="mb-2 text-center text-3xl font-bold text-primary-dark">{txt.titre}</h1>
      <p className="mb-12 text-center text-gray-600">{txt.sousTitre}</p>

      <div className="space-y-8">
        {articles.map((article) => (
          <article key={article.id} className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
            <p className="mb-2 text-xs text-gray-500">
              {new Date(article.date).toLocaleDateString(langue === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" })} · {article.auteur}
            </p>
            <h2 className="mb-2 text-xl font-semibold text-primary-dark">{article.titre}</h2>
            <p className="text-gray-600">{article.extrait}</p>
          </article>
        ))}
        {articles.length === 0 && (
          <p className="text-center text-gray-500">{txt.aucun}</p>
        )}
      </div>
    </section>
  );
}