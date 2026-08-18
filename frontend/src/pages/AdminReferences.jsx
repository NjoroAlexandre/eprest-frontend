import { useState } from "react";
import { useReferences } from "../context/ReferencesContext";

export default function AdminReferences() {
  const { references, togglePublie, ajouterReference, supprimerReference } = useReferences();
  const [formData, setFormData] = useState({
    client: "",
    pole: "saas",
    titre: "",
    contexte: "",
    resultat: "",
    tags: "",
    accordClient: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const poleLabels = {
    saas: { fr: "SaaS", en: "SaaS" },
    devops: { fr: "Mise en production & DevOps", en: "Production & DevOps" },
    ia: { fr: "Digitalisation & Formation IA", en: "Digitalization & AI Training" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.client.trim() || !formData.titre.trim()) return;

    ajouterReference({
      client: formData.client,
      pole: formData.pole,
      poleLabel: poleLabels[formData.pole],
      titre: { fr: formData.titre, en: formData.titre },
      contexte: { fr: formData.contexte, en: formData.contexte },
      resultat: { fr: formData.resultat, en: formData.resultat },
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
      accordClient: formData.accordClient,
    });

    setFormData({ client: "", pole: "saas", titre: "", contexte: "", resultat: "", tags: "", accordClient: false });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-2 text-2xl font-bold text-primary-dark">Gestion des références</h1>
      <p className="mb-8 text-sm text-gray-600">
        Les projets ajoutés ici apparaissent sur la page Références publique uniquement une fois publiés.
      </p>

      <form onSubmit={handleSubmit} className="mb-10 space-y-4 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-primary-dark">Nouveau projet</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="client" className="mb-1 block text-sm font-medium text-gray-700">Nom du client</label>
            <input id="client" name="client" type="text" required value={formData.client} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label htmlFor="pole" className="mb-1 block text-sm font-medium text-gray-700">Pôle</label>
            <select id="pole" name="pole" value={formData.pole} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none">
              <option value="saas">SaaS</option>
              <option value="devops">Mise en production & DevOps</option>
              <option value="ia">Digitalisation & Formation IA</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="titre" className="mb-1 block text-sm font-medium text-gray-700">Titre du projet</label>
          <input id="titre" name="titre" type="text" required value={formData.titre} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="contexte" className="mb-1 block text-sm font-medium text-gray-700">Contexte</label>
          <textarea id="contexte" name="contexte" rows="2" value={formData.contexte} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="resultat" className="mb-1 block text-sm font-medium text-gray-700">Résultat</label>
          <textarea id="resultat" name="resultat" rows="2" value={formData.resultat} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="tags" className="mb-1 block text-sm font-medium text-gray-700">Technologies (séparées par des virgules)</label>
          <input id="tags" name="tags" type="text" placeholder="Ex. React, Node.js, PostgreSQL" value={formData.tags} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" name="accordClient" checked={formData.accordClient} onChange={handleChange} className="accent-primary" />
          Le client a donné son accord pour la publication
        </label>

        <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
          Ajouter le projet
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Pôle</th>
              <th className="px-4 py-3">Accord client</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {references.map((ref) => (
              <tr key={ref.id} className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-800">{ref.client}</td>
                <td className="px-4 py-3 text-gray-600">{ref.poleLabel.fr}</td>
                <td className="px-4 py-3">
                  {ref.accordClient ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Oui</span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">Non</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {ref.publie ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Publié</span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">Brouillon</span>
                  )}
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => togglePublie(ref.id)}
                    disabled={!ref.accordClient}
                    className="rounded-lg border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {ref.publie ? "Dépublier" : "Publier"}
                  </button>
                  <button
                    onClick={() => supprimerReference(ref.id)}
                    className="rounded-lg border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}