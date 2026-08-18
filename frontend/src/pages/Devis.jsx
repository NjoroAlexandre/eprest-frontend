import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function Devis() {
  const { langue } = useLanguage();
  const [typeClient, setTypeClient] = useState("particulier");
  const [formData, setFormData] = useState({ nom: "", entreprise: "", tailleEntreprise: "", email: "", sujet: "", message: "" });
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
      nomPlaceholder: "Ex. Rakoto Jean",
      entrepriseLabel: "Entreprise",
      entreprisePlaceholder: "Ex. Société ABC",
      taille: "Taille de l'entreprise",
      selectionner: "Sélectionner",
      taille1: "1 à 10 employés",
      taille2: "11 à 50 employés",
      taille3: "51 à 200 employés",
      taille4: "Plus de 200 employés",
      email: "Email",
      emailPlaceholder: "Ex. jean.rakoto@gmail.com",
      sujet: "Sujet",
      sujetPlaceholder: "Ex. Devis pour une application de gestion, un site vitrine...",
      message: "Message",
      messagePlaceholder: "Décrivez votre projet — objectifs, périmètre, délai souhaité, budget approximatif si vous en avez un.",
      envoyer: "Envoyer la demande",
      accroche: "Vos informations restent confidentielles et ne servent qu'à vous recontacter.",
      merci: "Merci, votre demande de devis a bien été envoyée.",
      erreurNom: "Le nom complet est requis.",
      erreurNomCourt: "Le nom doit contenir au moins 2 caractères.",
      erreurEntreprise: "Le nom de l'entreprise est requis.",
      erreurEmail: "L'email est requis.",
      erreurEmailFormat: "Format d'email invalide (ex. nom@exemple.com).",
      erreurMessage: "Merci de décrire votre besoin.",
      erreurMessageCourt: "Merci de détailler un peu plus (10 caractères minimum).",
    },
    en: {
      titre: "Request a quote",
      sousTitre: "Describe your needs, we will respond within 48 hours.",
      vousEtes: "You are",
      particulier: "An individual",
      entreprise: "A company",
      nom: "Full name",
      nomPlaceholder: "E.g. John Doe",
      entrepriseLabel: "Company",
      entreprisePlaceholder: "E.g. ABC Company",
      taille: "Company size",
      selectionner: "Select",
      taille1: "1 to 10 employees",
      taille2: "11 to 50 employees",
      taille3: "51 to 200 employees",
      taille4: "More than 200 employees",
      email: "Email",
      emailPlaceholder: "E.g. john.doe@gmail.com",
      sujet: "Subject",
      sujetPlaceholder: "E.g. Quote for a management app, a showcase website...",
      message: "Message",
      messagePlaceholder: "Describe your project — goals, scope, desired timeline, rough budget if you have one.",
      envoyer: "Send request",
      accroche: "Your information stays confidential and is only used to get back to you.",
      merci: "Thank you, your quote request has been sent.",
      erreurNom: "Full name is required.",
      erreurNomCourt: "Name must contain at least 2 characters.",
      erreurEntreprise: "Company name is required.",
      erreurEmail: "Email is required.",
      erreurEmailFormat: "Invalid email format (e.g. name@example.com).",
      erreurMessage: "Please describe your need.",
      erreurMessageCourt: "Please provide more detail (10 characters minimum).",
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

    if (!formData.message.trim()) {
      nouvellesErreurs.message = txt.erreurMessage;
    } else if (formData.message.trim().length < 10) {
      nouvellesErreurs.message = txt.erreurMessageCourt;
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
      <Helmet>
        <title>{langue === "fr" ? "Demander un devis — E PREST" : "Request a quote — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Demandez un devis personnalisé à E PREST pour votre projet SaaS, DevOps ou digitalisation."
              : "Request a tailored quote from E PREST for your SaaS, DevOps or digitalization project."
          }
        />
      </Helmet>

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
              placeholder={txt.nomPlaceholder}
              value={formData.nom}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 placeholder:text-gray-400 focus:outline-none ${erreurs.nom ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
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
                  placeholder={txt.entreprisePlaceholder}
                  value={formData.entreprise}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2 placeholder:text-gray-400 focus:outline-none ${erreurs.entreprise ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
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
              placeholder={txt.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 placeholder:text-gray-400 focus:outline-none ${erreurs.email ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            />
            {erreurs.email && <p className="mt-1 text-sm text-red-600">{erreurs.email}</p>}
          </div>

          <div>
            <label htmlFor="sujet" className="mb-1 block text-sm font-medium text-gray-700">{txt.sujet}</label>
            <input
              id="sujet"
              type="text"
              name="sujet"
              placeholder={txt.sujetPlaceholder}
              value={formData.sujet}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">{txt.message}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={txt.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 placeholder:text-gray-400 focus:outline-none ${erreurs.message ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            />
            {erreurs.message && <p className="mt-1 text-sm text-red-600">{erreurs.message}</p>}
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            {txt.envoyer}
          </button>

          <p className="text-center text-sm italic text-gray-500">{txt.accroche}</p>
        </form>
      )}
    </section>
  );
}