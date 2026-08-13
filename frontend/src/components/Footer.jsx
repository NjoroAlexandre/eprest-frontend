import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { langue } = useLanguage();

  const textes = {
    fr: {
      description: "Startup technologique basée à Antananarivo — SaaS, mise en production et digitalisation.",
      liensRapides: "Liens rapides",
      accueil: "Accueil",
      catalogue: "Catalogue",
      references: "Références",
      actualites: "Actualités",
      poles: "Nos pôles",
      entreprise: "Entreprise",
      aPropos: "À propos",
      contact: "Contact",
      mentionsLegales: "Mentions légales",
      entrerEnContact: "Nous contacter",
      email: "Adresse email",
      telephone: "Téléphone",
      adresse: "Adresse",
      droitsReserves: "Tous droits réservés.",
    },
    en: {
      description: "Technology startup based in Antananarivo — SaaS, production deployment and digitalization.",
      liensRapides: "Quick links",
      accueil: "Home",
      catalogue: "Catalog",
      references: "References",
      actualites: "News",
      poles: "Our expertise",
      entreprise: "Company",
      aPropos: "About",
      contact: "Contact",
      mentionsLegales: "Legal notice",
      entrerEnContact: "Get in touch",
      email: "Email address",
      telephone: "Phone",
      adresse: "Address",
      droitsReserves: "All rights reserved.",
    },
  };
  const txt = textes[langue];

  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="mb-3 text-lg font-bold text-white">E PREST</p>
            <p className="text-sm text-gray-400">{txt.description}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">{txt.liensRapides}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">{txt.accueil}</Link></li>
              <li><Link to="/catalogue" className="hover:text-white">{txt.catalogue}</Link></li>
              <li><Link to="/references" className="hover:text-white">{txt.references}</Link></li>
              <li><Link to="/blog" className="hover:text-white">{txt.actualites}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">{txt.poles}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pole-saas" className="hover:text-white">SaaS</Link></li>
              <li><Link to="/pole-devops" className="hover:text-white">{langue === "fr" ? "Mise en production & DevOps" : "Production & DevOps"}</Link></li>
              <li><Link to="/pole-ia" className="hover:text-white">{langue === "fr" ? "Digitalisation & Formation IA" : "Digitalization & AI Training"}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">{txt.entreprise}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="hover:text-white">{txt.aPropos}</Link></li>
              <li><Link to="/contact" className="hover:text-white">{txt.contact}</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-white">{txt.mentionsLegales}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">{txt.entrerEnContact}</h3>
          <div className="grid gap-4 text-sm text-gray-400 md:grid-cols-3">
            <p>{txt.email} : <span className="text-gray-500">[email à compléter]</span></p>
            <p>{txt.telephone} : <span className="text-gray-500">[téléphone à compléter]</span></p>
            <p>{txt.adresse} : <span className="text-gray-500">Antananarivo, Madagascar</span></p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} E PREST Solutions. {txt.droitsReserves}
      </div>
    </footer>
  );
}