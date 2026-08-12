import { Link } from "react-router-dom";

const sections = [
  { titre: "Catalogue", description: "Gérer les produits, plans et tarifs", lien: "/admin/catalogue" },
  { titre: "Prospects", description: "Voir les demandes de démo, devis et essai", lien: "/admin/prospects" },
  { titre: "Références", description: "Gérer les projets clients publiés", lien: "/admin/references" },
  { titre: "Contenus", description: "Modifier les pages (Accueil, À propos, ...)", lien: "/admin/contenus" },
  { titre: "Actualités", description: "Publier ou supprimer des articles de blog", lien: "/admin/blog" },
  { titre: "Tableau de suivi", description: "Visites, conversions et statistiques du chatbot", lien: "/admin/analytics" },
];

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Tableau de bord</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.lien}
            to={section.lien}
            className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-lg font-semibold text-primary">{section.titre}</h2>
            <p className="text-sm text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}