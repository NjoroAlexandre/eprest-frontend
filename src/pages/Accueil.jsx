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
    </>
  );
}