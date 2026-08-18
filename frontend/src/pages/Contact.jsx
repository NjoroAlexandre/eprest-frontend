import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { langue } = useLanguage();
  const [typeClient, setTypeClient] = useState("particulier");
  const [formData, setFormData] = useState({ nom: "", entreprise: "", email: "", sujet: "", message: "" });
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
      nomPlaceholder: "Ex. Rakoto Jean",
      entrepriseLabel: "Entreprise",
      entreprisePlaceholder: "Ex. Société ABC",
      email: "Email",
      emailPlaceholder: "Ex. jean.rakoto@gmail.com",
      sujet: "Sujet",
      sujetPlaceholder: "Ex. Refonte de site, catalogue SaaS, migration cloud...",
      message: "Message",
      messagePlaceholder: "Racontez-nous où vous en êtes et ce que vous cherchez à obtenir — on adapte notre réponse à votre situation, pas l'inverse.",
      envoyer: "Envoyer",
      accroche: "Vos informations restent confidentielles et ne servent qu'à vous recontacter.",
      merci: "Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.",
      erreurNom: "Le nom complet est requis.",
      erreurNomCourt: "Le nom doit contenir au moins 2 caractères.",
      erreurEmail: "L'email est requis.",
      erreurEmailFormat: "Format d'email invalide (ex. nom@exemple.com).",
      etapesTitre: "Votre projet en 3 étapes",
      etape1Titre: "Premier échange",
      etape1Texte: "On prend le temps de comprendre votre contexte, vos contraintes et ce que vous cherchez vraiment à résoudre.",
      etape2Titre: "Feuille de route sur mesure",
      etape2Texte: "Vous recevez une proposition claire — périmètre, délais, coûts — construite pour votre cas, pas un modèle générique.",
      etape3Titre: "Réalisation accompagnée",
      etape3Texte: "Un interlocuteur unique suit votre projet du premier jour à la mise en production, avec des points d'étape réguliers.",
    },
    en: {
      titre: "Contact us",
      vousEtes: "You are",
      particulier: "An individual",
      entreprise: "A company",
      nom: "Full name",
      nomPlaceholder: "E.g. John Doe",
      entrepriseLabel: "Company",
      entreprisePlaceholder: "E.g. ABC Company",
      email: "Email",
      emailPlaceholder: "E.g. john.doe@gmail.com",
      sujet: "Subject",
      sujetPlaceholder: "E.g. Website redesign, SaaS catalog, cloud migration...",
      message: "Message",
      messagePlaceholder: "Share where you stand and what you're trying to achieve — we shape our answer around your situation, not the other way around.",
      envoyer: "Send",
      accroche: "Your information stays confidential and is only used to get back to you.",
      merci: "Thank you, your message has been sent. We will respond shortly.",
      erreurNom: "Full name is required.",
      erreurNomCourt: "Name must contain at least 2 characters.",
      erreurEmail: "Email is required.",
      erreurEmailFormat: "Invalid email format (e.g. name@example.com).",
      etapesTitre: "Your project in 3 steps",
      etape1Titre: "First conversation",
      etape1Texte: "We take the time to understand your context, your constraints, and what you're really trying to solve.",
      etape2Titre: "Tailored roadmap",
      etape2Texte: "You receive a clear proposal — scope, timeline, cost — built for your case, not a generic template.",
      etape3Titre: "Guided delivery",
      etape3Texte: "A single point of contact follows your project from day one to production, with regular check-ins.",
    },
  };
  const txt = textes[langue];

  const etapes = [
    { titre: txt.etape1Titre, texte: txt.etape1Texte },
    { titre: txt.etape2Titre, texte: txt.etape2Texte },
    { titre: txt.etape3Titre, texte: txt.etape3Texte },
  ];

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
    <>
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
                placeholder={txt.nomPlaceholder}
                value={formData.nom}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2 placeholder:text-gray-400 focus:outline-none ${erreurs.nom ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
              />
              {erreurs.nom && <p className="mt-1 text-sm text-red-600">{erreurs.nom}</p>}
            </div>

            {typeClient === "entreprise" && (
              <div>
                <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">{txt.entrepriseLabel}</label>
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none"
              />
            </div>

            <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
              {txt.envoyer}
            </button>

            <p className="text-center text-sm italic text-gray-500">{txt.accroche}</p>
          </form>
        )}
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-primary-dark">{txt.etapesTitre}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {etapes.map((etape, index) => (
              <div key={etape.titre} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-base font-semibold text-primary-dark">{etape.titre}</h3>
                <p className="text-sm text-gray-600">{etape.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}