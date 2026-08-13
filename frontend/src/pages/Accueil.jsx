import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function Accueil() {
  const { langue, t } = useLanguage();

  const poles = [
    {
      titre: "SaaS",
      description: langue === "fr" ? "Des logiciels prêts à l'emploi, hébergés et facturés par abonnement." : "Ready-to-use software, hosted and billed by subscription.",
      lien: "/pole-saas",
    },
    {
      titre: langue === "fr" ? "Mise en production & DevOps" : "Production & DevOps",
      description: langue === "fr" ? "Déploiement, industrialisation et fiabilisation de vos systèmes." : "Deployment, industrialization and reliability of your systems.",
      lien: "/pole-devops",
    },
    {
      titre: langue === "fr" ? "Digitalisation & Formation IA" : "Digitalization & AI Training",
      description: langue === "fr" ? "Accompagnement à la transformation numérique et montée en compétence IA." : "Support for digital transformation and AI skills development.",
      lien: "/pole-ia",
    },
  ];

  const stats = [
    { chiffre: "3", label: langue === "fr" ? "Pôles d'expertise" : "Areas of expertise" },
    { chiffre: "100%", label: langue === "fr" ? "Solutions sur mesure" : "Tailored solutions" },
    { chiffre: "24/7", label: langue === "fr" ? "Support disponible" : "Available support" },
  ];

  const distinctions = [
    {
      icone: "🎯",
      titre: langue === "fr" ? "Accompagnement de bout en bout" : "End-to-end support",
      texte: langue === "fr" ? "De la conception au déploiement, un seul interlocuteur pour tout votre projet." : "From design to deployment, a single point of contact for your entire project.",
    },
    {
      icone: "⚙️",
      titre: langue === "fr" ? "Solutions sur mesure" : "Tailored solutions",
      texte: langue === "fr" ? "Aucune solution générique — chaque projet est pensé pour vos besoins réels." : "No generic solutions — every project is designed around your real needs.",
    },
    {
      icone: "🤝",
      titre: langue === "fr" ? "Proximité et transparence" : "Closeness and transparency",
      texte: langue === "fr" ? "Un suivi régulier et une communication claire à chaque étape du projet." : "Regular follow-up and clear communication at every stage of the project.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{langue === "fr" ? "E PREST — SaaS, DevOps & Digitalisation" : "E PREST — SaaS, DevOps & Digitalization"}</title>
        <meta name="description" content={t("heroTexte")} />
      </Helmet>

      <section className="bg-gradient-to-b from-primary/5 to-white px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-primary-dark md:text-5xl">{t("heroTitre")}</h1>
          <p className="mt-4 text-lg text-gray-600">{t("heroTexte")}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary md:text-4xl">{s.chiffre}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="poles" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-primary-dark">{t("troisPoles")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {poles.map((pole) => (
            <Link key={pole.lien} to={pole.lien} className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-primary">{pole.titre}</h3>
              <p className="text-gray-600">{pole.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary-dark">
            {langue === "fr" ? "Ce qui nous distingue" : "What sets us apart"}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {distinctions.map((d) => (
              <div key={d.titre} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="mb-3 block text-3xl">{d.icone}</span>
                <h3 className="mb-2 text-lg font-semibold text-primary-dark">{d.titre}</h3>
                <p className="text-sm text-gray-600">{d.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary-dark px-6 py-14 text-center text-white">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">
            {langue === "fr" ? "Prêt à passer à l'étape suivante ?" : "Ready to take the next step?"}
          </p>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            {langue === "fr" ? "Parlons de votre prochain projet" : "Let's talk about your next project"}
          </h2>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-dark hover:bg-gray-100"
          >
            {langue === "fr" ? "Entamer une conversation" : "Start a conversation"}
          </Link>
        </div>
      </section>
    </>
  );
}