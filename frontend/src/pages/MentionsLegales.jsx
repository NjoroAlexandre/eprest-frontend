import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { useSiteSettings } from "../context/SiteSettingsContext";

export default function MentionsLegales() {
  const { langue } = useLanguage();
  const { parametres } = useSiteSettings();

  const textes = {
    fr: {
      titre: "Mentions légales",
      editeur: "Éditeur du site",
      hebergement: "Hébergement",
      contact: "Contact",
    },
    en: {
      titre: "Legal notice",
      editeur: "Site publisher",
      hebergement: "Hosting",
      contact: "Contact",
    },
  };
  const txt = textes[langue];

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <Helmet>
        <title>{txt.titre} — {parametres.nomEntreprise}</title>
        <meta
          name="description"
          content={langue === "fr" ? `Mentions légales du site ${parametres.nomEntreprise}.` : `Legal notice for the ${parametres.nomEntreprise} website.`}
        />
      </Helmet>

      <h1 className="mb-6 text-3xl font-bold text-primary-dark">{txt.titre}</h1>

      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.editeur}</h2>
          <p>{parametres.mentionsLegales.editeur}</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.hebergement}</h2>
          <p>{parametres.mentionsLegales.hebergement}</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">{txt.contact}</h2>
          <p>{parametres.mentionsLegales.contact}</p>
        </div>
      </div>
    </section>
  );
}