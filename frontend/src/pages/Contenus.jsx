import { useState } from "react";

const pagesExemple = [
  { slug: "accueil", titre: "Accueil", contenu: "SaaS, mise en production et digitalisation — nous accompagnons votre transformation numérique de bout en bout." },
  { slug: "a-propos", titre: "À propos", contenu: "E PREST est une startup technologique basée à Antananarivo, spécialisée dans le développement SaaS, la mise en production et la digitalisation des entreprises." },
];

export default function Contenus() {
  const [pages, setPages] = useState(pagesExemple);
  const [pageActive, setPageActive] = useState(pagesExemple[0].slug);
  const [sauvegarde, setSauvegarde] = useState(false);

  const page = pages.find((p) => p.slug === pageActive);

  const handleChange = (e) => {
    setPages(pages.map((p) => (p.slug === pageActive ? { ...p, contenu: e.target.value } : p)));
    setSauvegarde(false);
  };

  const handleSave = () => {
    console.log(page);
    setSauvegarde(true);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Gestion des contenus</h1>

      <div className="mb-6 flex gap-2">
        {pages.map((p) => (
          <button
            key={p.slug}
            onClick={() => setPageActive(p.slug)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${pageActive === p.slug ? "bg-primary text-white" : "border border-gray-300 text-gray-600"}`}
          >
            {p.titre}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 p-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">Contenu de la page « {page.titre} »</label>
        <textarea
          rows="8"
          value={page.contenu}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
        />

        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={handleSave}
            className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Enregistrer
          </button>
          {sauvegarde && <span className="text-sm text-green-600">Enregistré ✓</span>}
        </div>
      </div>
    </section>
  );
}