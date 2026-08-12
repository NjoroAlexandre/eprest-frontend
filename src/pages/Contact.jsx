import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { langue } = useLanguage();
  const [typeClient, setTypeClient] = useState("particulier");
  const [formData, setFormData] = useState({ nom: "", entreprise: "", email: "", besoin: "" });
  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErreurs({ ...erreurs, [e.target.name]: "" });
  };

  const validerEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const textes = {
    fr: {
      titre: "Contactez-nous",
      vousEtes: "Vous êtes",
      particulier: "Un particulier",
      entreprise: "Une entreprise",
      nom: "Nom complet",
      entrepriseLabel: "Entreprise",
      email: "Email",
      besoin: "Votre besoin",
      envoyer: "Envoyer",
      merci: "Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.",
      erreurNom: "Le nom complet est requis.",
      erreurNomCourt: "Le nom doit contenir au moins 2 caractères.",
      erreurEmail: "L'email est requis.",
      erreurEmailFormat: "Format d'email invalide (ex. nom@exemple.com).",
    },
    en: {
      titre: "Contact us",
      vousEtes: "You are",
      particulier: "An individual",
      entreprise: "A company",
      nom: "Full name",
      entrepriseLabel: "Company",
      email: "Email",
      besoin: "Your need",
      envoyer: "Send",
      merci: "Thank you, your message has been sent. We will respond shortly.",
      erreurNom: "Full name is required.",
      erreurNomCourt: "Name must contain at least 2 characters.",
      erreurEmail: "Email is required.",
      erreurEmailFormat: "Invalid email format (e.g. name@example.com).",
    },
  };
  const txt = textes[langue];

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesErreurs = {};

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = txt.erreurNom;
    } else if (formData.nom.trim().length < 2) {
      nouvellesErreurs.nom = txt.erreurNomCourt;
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = txt.erreurEmail;
    } else if (!validerEmail(formData.email)) {
      nouvellesErreurs.email = txt.erreurEmailFormat;
    }

    if (Object.keys(nouvellesErreurs).length > 0) {
      setErreurs(nouvellesErreurs);
      return;
    }

    console.log({ typeClient, ...formData });
    setEnvoye(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Contact — E PREST" : "Contact — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Contactez E PREST pour discuter de votre projet SaaS, DevOps ou digitalisation."
              : "Contact E PREST to discuss your SaaS, DevOps or digitalization project."
          }
        />
      </Helmet>

      <h1 className="mb-8 text-center text-3xl font-bold text-primary-dark">{txt.titre}</h1>

      {envoye ? (
        <p className="rounded-lg bg-green-50 p-4 text-center text-green-700">{txt.merci}</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <span className="mb-2 block text-sm font-medium text-gray-700">{txt.vousEtes}</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="typeClient"
                  value="particulier"
                  checked={typeClient === "particulier"}
                  onChange={(e) => setTypeClient(e.target.value)}
                  className="accent-primary"
                />
                {txt.particulier}
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="typeClient"
                  value="entreprise"
                  checked={typeClient === "entreprise"}
                  onChange={(e) => setTypeClient(e.target.value)}
                  className="accent-primary"
                />
                {txt.entreprise}
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="nom" className="mb-1 block text-sm font-medium text-gray-700">{txt.nom}</label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none ${erreurs.nom ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            />
            {erreurs.nom && <p className="mt-1 text-sm text-red-600">{erreurs.nom}</p>}
          </div>

          {typeClient === "entreprise" && (
            <div>
              <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">{txt.entrepriseLabel}</label>
              <input id="entreprise" type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">{txt.email}</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none ${erreurs.email ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            />
            {erreurs.email && <p className="mt-1 text-sm text-red-600">{erreurs.email}</p>}
          </div>

          <div>
            <label htmlFor="besoin" className="mb-1 block text-sm font-medium text-gray-700">{txt.besoin}</label>
            <textarea id="besoin" name="besoin" rows="4" value={formData.besoin} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            {txt.envoyer}
          </button>
        </form>
      )}
    </section>
  );
}