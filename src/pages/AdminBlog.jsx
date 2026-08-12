import { useState } from "react";
import { useAppData } from "../context/AppDataContext";

export default function AdminBlog() {
  const { articles, ajouterArticle, supprimerArticle } = useAppData();
  const [formData, setFormData] = useState({ titre: "", extrait: "", auteur: "Équipe E PREST" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.titre.trim()) return;
    ajouterArticle({ ...formData, slug: formData.titre.toLowerCase().replace(/\s+/g, "-") });
    setFormData({ titre: "", extrait: "", auteur: "Équipe E PREST" });
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Gestion des actualités</h1>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-primary-dark">Nouvel article</h2>

        <div>
          <label htmlFor="titre" className="mb-1 block text-sm font-medium text-gray-700">Titre</label>
          <input id="titre" name="titre" type="text" required value={formData.titre} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="extrait" className="mb-1 block text-sm font-medium text-gray-700">Extrait</label>
          <textarea id="extrait" name="extrait" rows="3" value={formData.extrait} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="auteur" className="mb-1 block text-sm font-medium text-gray-700">Auteur</label>
          <input id="auteur" name="auteur" type="text" value={formData.auteur} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
          Publier l'article
        </button>
      </form>

      <h2 className="mb-4 text-lg font-semibold text-primary-dark">Articles publiés ({articles.length})</h2>
      <div className="space-y-3">
        {articles.map((article) => (
          <div key={article.id} className="flex items-start justify-between rounded-lg border border-gray-200 p-4">
            <div>
              <p className="font-medium text-gray-800">{article.titre}</p>
              <p className="text-xs text-gray-500">{article.date} · {article.auteur}</p>
            </div>
            <button
              onClick={() => supprimerArticle(article.id)}
              className="rounded-lg border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}