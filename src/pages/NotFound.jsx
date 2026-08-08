import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-primary-dark">Page introuvable</h2>
      <p className="mb-8 text-gray-600">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
        Retour à l'accueil
      </Link>
    </section>
  );
}