import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { useReferences } from "../context/ReferencesContext";

export default function ReferenceDetail() {
  const { id } = useParams();
  const { langue } = useLanguage();
  const { references } = useReferences();

  const reference = references.find((r) => String(r.id) === id && r.publie);

  const textes = {
    fr: {
      retour: "← Retour aux références",
      contexte: "Contexte",
      resultat: "Résultat",
      voirSite: "Voir le site du projet",
      introuvable: "Projet introuvable",
      introuvableTexte: "Ce projet n'existe pas ou n'est plus disponible.",
    },
    en: {
      retour: "← Back to references",
      contexte: "Context",
      resultat: "Result",
      voirSite: "Visit project site",
      introuvable: "Project not found",
      introuvableTexte: "This project does not exist or is no longer available.",
    },
  };
  const txt = textes[langue];

  if (!reference) {
    return (
      <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-2xl font-bold text-primary-dark">{txt.introuvable}</h1>
        <p className="mb-6 text-gray-600">{txt.introuvableTexte}</p>
        <Link to="/references" className="text-sm font-semibold text-primary hover:underline">{txt.retour}</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Helmet>
        <title>{reference.titre[langue]} — E PREST</title>
        <meta name="description" content={reference.contexte[langue]} />
      </Helmet>

      <Link to="/references" className="mb-6 inline-block text-sm font-medium text-gray-500 hover:text-primary">
        {txt.retour}
      </Link>

      {reference.imageUrl ? (
        <img
          src={reference.imageUrl}
          alt={reference.titre[langue]}
          className="mb-8 w-full rounded-xl border border-gray-200 object-cover"
        />
      ) : (
        <div className="mb-8 flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark">
          <span className="text-5xl">📁</span>
        </div>
      )}

      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {reference.poleLabel[langue]}
      </span>
      <h1 className="mb-1 text-3xl font-bold text-primary-dark">{reference.titre[langue]}</h1>
      <p className="mb-6 text-sm font-medium text-gray-400">{reference.client}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {reference.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-primary-dark">{txt.contexte}</h2>
        <p className="text-gray-600">{reference.contexte[langue]}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-2 text-lg font-semibold text-primary-dark">{txt.resultat}</h2>
        <p className="text-gray-600">{reference.resultat[langue]}</p>
      </div>

      {reference.lienProjet && (
        
          href={reference.lienProjet}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          {txt.voirSite} ↗
        </a>
      )}
    </section>
  );
}