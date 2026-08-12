import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function MentionsLegales() {
  const { langue } = useLanguage();

  const textes = {
    fr: {
      titre: "Mentions légales",
      editeur: "Éditeur du site",
      editeurTexte: "E PREST Solutions — [adresse complète à compléter]",
      hebergement: "Hébergement",
      hebergementTexte: "[Nom de l'hébergeur à compléter]",
      contact: "Contact",
      contactTexte: "[Email de contact à compléter]",
    },
    en: {
      titre: "Legal notice",
      editeur: "Site publisher",
      editeurTexte: "E PREST Solutions — [full address to be completed]",
      hebergement: "Hosting",
      hebergementTexte: "[Hosting provider name to be completed]",
      contact: "Contact",
      contactTexte: "[Contact email to be completed]",
    },
  };
  const txt = textes[langue];

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <Helmet>
        <title>{txt.titre} — E PREST</title>
        <meta
          name="description"
          content={langue === "fr" ? "Mentions légales du site E PREST Solutions." : "Legal notice for the E PREST Solutions website."}
        />
      </Helmet>

      <h1 className="mb-6 text-3xl font-bold text-primary-dark">{txt.titre}</h1>

      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.editeur}</h2>
          <p>{txt.editeurTexte}</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.hebergement}</h2>
          <p>{txt.hebergementTexte}</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.contact}</h2>
          <p>{txt.contactTexte}</p>
        </div>
      </div>
    </section>
  );
}