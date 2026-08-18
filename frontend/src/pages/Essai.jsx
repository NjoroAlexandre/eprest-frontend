import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function Essai() {
  const { langue } = useLanguage();
  const [formData, setFormData] = useState({ nom: "", entreprise: "", email: "", produit: "", sujet: "", message: "" });
  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErreurs({ ...erreurs, [e.target.name]: "" });
  };

  const validerEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const textes = {
    fr: {
      titre: "Démarrer un essai gratuit",
      sousTitre: "Testez nos solutions sans engagement.",
      nom: "Nom complet",
      nomPlaceholder: "Ex. Rakoto Jean",
      entreprise: "Entreprise",
      entreprisePlaceholder: "Ex. Société ABC",
      email: "Email professionnel",
      emailPlaceholder: "Ex. jean.rakoto@gmail.com",
      produit: "Produit souhaité",
      selectionner: "Sélectionner",
      sujet: "Sujet",
      sujetPlaceholder: "Ex. Essai pour évaluer l'outil avant un déploiement équipe...",
      message: "Message",
      messagePlaceholder: "Dites-nous ce que vous aimeriez tester ou évaluer pendant l'essai.",
      demarrer: "Démarrer l'essai",
      accroche: "Vos informations restent confidentielles et ne servent qu'à vous recontacter.",
      merci: "Merci, votre essai gratuit va être activé sous peu.",
      erreurNom: "Le nom complet est requis.",
      erreurNomCourt: "Le nom doit contenir au moins 2 caractères.",
      erreurEmail: "L'email est requis.",
      erreurEmailFormat: "Format d'email invalide (ex. nom@exemple.com).",
      erreurProduit: "Merci de sélectionner un produit.",
    },
    en: {
      titre: "Start a free trial",
      sousTitre: "Try our solutions with no commitment.",
      nom: "Full name",
      nomPlaceholder: "E.g. John Doe",
      entreprise: "Company",
      entreprisePlaceholder: "E.g. ABC Company",
      email: "Work email",
      emailPlaceholder: "E.g. john.doe@gmail.com",
      produit: "Desired product",
      selectionner: "Select",
      sujet: "Subject",
      sujetPlaceholder: "E.g. Trial to evaluate the tool before a team rollout...",
      message: "Message",
      messagePlaceholder: "Tell us what you'd like to test or evaluate during the trial.",
      demarrer: "Start trial",
      accroche: "Your information stays confidential and is only used to get back to you.",
      merci: "Thank you, your free trial will be activated shortly.",
      erreurNom: "Full name is required.",
      erreurNomCourt: "Name must contain at least 2 characters.",
      erreurEmail: "Email is required.",
      erreurEmailFormat: "Invalid email format (e.g. name@example.com).",
      erreurProduit: "Please select a product.",
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

    if (!formData.produit) {
      nouvellesErreurs.produit = txt.erreurProduit;
    }

    if (Object.keys(nouvellesErreurs).length > 0) {
      setErreurs(nouvellesErreurs);
      return;
    }

    console.log(formData);
    setEnvoye(true);
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Essai gratuit — E PREST" : "Free trial — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Démarrez un essai gratuit des solutions E PREST, sans engagement."
              : "Start a free trial of E PREST's solutions, with no commitment."
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

          <div>
            <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">{txt.entreprise}</label>
            <input
              id="entreprise"
              type="text"
              name="entreprise"
              placeholder={txt.entreprisePlaceholder}
              value={formData.entreprise}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none"
            />
          </div>

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
            <label htmlFor="produit" className="mb-1 block text-sm font-medium text-gray-700">{txt.produit}</label>
            <select
              id="produit"
              name="produit"
              value={formData.produit}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none ${erreurs.produit ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
            >
              <option value="">{txt.selectionner}</option>
              <option value="crm">E PREST CRM</option>
            </select>
            {erreurs.produit && <p className="mt-1 text-sm text-red-600">{erreurs.produit}</p>}
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
              className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none"
            />
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            {txt.demarrer}
          </button>

          <p className="text-center text-sm italic text-gray-500">{txt.accroche}</p>
        </form>
      )}
    </section>
  );
}