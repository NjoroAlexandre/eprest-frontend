import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function PoleDevOps() {
  const { langue } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Mise en production & DevOps — E PREST" : "Production & DevOps — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Déploiement, industrialisation et fiabilisation de vos systèmes avec E PREST."
              : "Deployment, industrialization and reliability of your systems with E PREST."
          }
        />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">
        {langue === "fr" ? "Mise en production & DevOps" : "Production & DevOps"}
      </h1>
      <p className="text-lg text-gray-600">
        {langue === "fr"
          ? "Déploiement, industrialisation et fiabilisation de vos systèmes. Nous accompagnons vos équipes techniques dans la mise en production, l'automatisation et la supervision continue de vos applications."
          : "Deployment, industrialization and reliability of your systems. We support your technical teams in production deployment, automation and continuous monitoring of your applications."}
      </p>
    </section>
  );
}