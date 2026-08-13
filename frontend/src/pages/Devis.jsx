import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Devis() {
  const { langue } = useLanguage();
  const [typeClient, setTypeClient] = useState("particulier");
  const [formData, setFormData] = useState({ nom: "", entreprise: "", tailleEntreprise: "", besoin: "", email: "" });
  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErreurs({ ...erreurs, [e.target.name]: "" });
  };

  const validerEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const textes = {
    fr: {
      titre: "Demander un devis",
      sousTitre: "Décrivez votre besoin, nous vous répondrons sous 48h.",
      vousEtes: "Vous êtes",
      particulier: "Un particulier",
      entreprise: "Une entreprise",
      nom: "Nom complet",
      entrepriseLabel: "Entreprise",
      taille: "Taille de l'entreprise",
      selectionner: "Sélectionner",
      taille1: "1 à 10 employés",
      taille2: "11 à 50 employés",
      taille3: "51 à 200 employés",
      taille4: "Plus de 200 employés",
      email: "Email",
      besoin: "Décrivez votre besoin",
      envoyer: "Envoyer la demande",
      merci: "Merci, votre demande de devis a bien été envoyée.",
      erreurNom: "Le nom complet est requis.",
      erreurNomCourt: "Le nom doit contenir au moins 2 caractères.",
      erreurEntreprise: "Le nom de l'entreprise est requis.",
      erreurEmail: "L'email est requis.",
      erreurEmailFormat: "Format d'email invalide (ex. nom@exemple.com).",
      erreurBesoin: "Merci de décrire votre besoin.",
      erreurBesoinCourt: "Merci de détailler un peu plus (10 caractères minimum).",
    },
    en: {
      titre: "Request a quote",
      sousTitre: "Describe your needs, we will respond within 48 hours.",
      vousEtes: "You are",
      particulier: "An individual",
      entreprise: "A company",
      nom: "Full name",
      entrepriseLabel: "Company",
      taille: "Company size",
      selectionner: "Select",
      taille1: "1 to 10 employees",
      taille2: "11 to 50 employees",
      taille3: "51 to 200 employees",
      taille4: "More than 200 employees",
      email: "Email",
      besoin: "Describe your need",
      envoyer: "Send request",
      merci: "Thank you, your quote request has been sent.",
      erreurNom: "Full name is required.",
      erreurNomCourt: "Name must contain at least 2 characters.",
      erreurEntreprise: "Company name is required.",
      erreurEmail: "Email is required.",
      erreurEmailFormat: "Invalid email format (e.g. name@example.com).",
      erreurBesoin: "Please describe your need.",
      erreurBesoinCourt: "Please provide more detail (10 characters minimum).",
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

    if (typeClient === "entreprise" && !formData.entreprise.trim()) {
      nouvellesErreurs.entreprise = txt.erreurEntreprise;
    }

    if (!formData.email.trim()) {
      nouvellesErreurs.email = txt.erreurEmail;
    } else if (!validerEmail(formData.email)) {
      nouvellesErreurs.email = txt.erreurEmailFormat;
    }

    if (!formData.besoin.trim()) {
      nouvellesErreurs.besoin = txt.erreurBesoin;
    } else if (formData.besoin.trim().length < 10) {
      nouvellesErreurs.besoin = txt.erreurBesoinCourt;
    }

    if (Object.keys(nouvellesErreurs).length > 0) {
      setErreurs(nouvellesErreurs);
      return;
    }

    console.log({ typeClient, ...formData });
    setEnvoye(true);
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="mb-2 text-center text-3xl font-bold text-primary-dark">{txt.titre}</h1>
      <p className="mb-8 text-center text-gray-600">{txt.sousTitre}</p>

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
            <>
              <div>
                <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">{txt.entrepriseLabel}</label>
                <input
                  id="entreprise"
                  type="text"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2 focus:outline-none ${erreurs.entreprise ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                />
                {erreurs.entreprise && <p className="mt-1 text-sm text-red-600">{erreurs.entreprise}</p>}
              </div>

              <div>
                <label htmlFor="tailleEntreprise" className="mb-1 block text-sm font-medium text-gray-700">{txt.taille}</label>
                <select id="tailleEntreprise" name="tailleEntreprise" value={formData.tailleEntreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none">
                  <option value="">{txt.selectionner}</option>
                  <option value="1-10">{txt.taille1}</option>
                  <option value="11-50">{txt.taille2}</option>
                  <option value="51-200">{txt.taille3}</option>
                  <option value="200+">{txt.taille4}</option>
                </select>
              </div>
            </>
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
            <textarea
              id="besoin"
              name="besoin"
              rows="4"
              value={formData.besoin}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none ${erreurs.besoin ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            />
            {erreurs.besoin && <p className="mt-1 text-sm text-red-600">{erreurs.besoin}</p>}
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            {txt.envoyer}
          </button>
        </form>
      )}
    </section>
  );
}