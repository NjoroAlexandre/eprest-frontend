import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { langue } = useLanguage();

  const textes = {
    fr: {
      titre: "Page introuvable",
      texte: "La page que vous recherchez n'existe pas ou a été déplacée.",
      retour: "Retour à l'accueil",
    },
    en: {
      titre: "Page not found",
      texte: "The page you are looking for does not exist or has been moved.",
      retour: "Back to home",
    },
  };
  const txt = textes[langue];

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-primary-dark">{txt.titre}</h2>
      <p className="mb-8 text-gray-600">{txt.texte}</p>
      <Link to="/" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
        {txt.retour}
      </Link>
    </section>
  );
}