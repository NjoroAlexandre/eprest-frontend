import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-8 text-center text-sm text-gray-300">
      <p>© {new Date().getFullYear()} E PREST Solutions. Tous droits réservés.</p>
      <Link to="/mentions-legales" className="mt-2 inline-block underline hover:text-white">
        Mentions légales
      </Link>
    </footer>
  );
}