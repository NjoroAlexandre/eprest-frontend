import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const poles = [
  { titre: "SaaS", description: "Des logiciels prêts à l'emploi, hébergés et facturés par abonnement.", lien: "/pole-saas" },
  { titre: "Mise en production & DevOps", description: "Déploiement, industrialisation et fiabilisation de vos systèmes.", lien: "/pole-devops" },
  { titre: "Digitalisation & Formation IA", description: "Accompagnement à la transformation numérique et montée en compétence IA.", lien: "/pole-ia" },
];

export default function Accueil() {
  return (
    <>
      <Helmet>
        <title>E PREST — SaaS, DevOps & Digitalisation</title>
        <meta name="description" content="E PREST accompagne votre transformation numérique : logiciels SaaS, mise en production, DevOps et formation IA." />
      </Helmet>

      <section className="bg-gradient-to-b from-primary/5 to-white px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-primary-dark md:text-5xl">E PREST, votre partenaire technologique de confiance</h1>
          <p className="mt-4 text-lg text-gray-600">SaaS, mise en production et digitalisation — nous accompagnons votre transformation numérique de bout en bout.</p>
        </div>
      </section>

      <section id="poles" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-primary-dark">Nos trois pôles d'expertise</h2>
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