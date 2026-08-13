import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function PoleSaaS() {
  const { langue } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "SaaS — E PREST" : "SaaS — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Des logiciels prêts à l'emploi, hébergés et facturés par abonnement. Découvrez les solutions SaaS d'E PREST."
              : "Ready-to-use software, hosted and billed by subscription. Discover E PREST's SaaS solutions."
          }
        />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">SaaS</h1>
      <p className="text-lg text-gray-600">
        {langue === "fr"
          ? "Des logiciels prêts à l'emploi, hébergés et facturés par abonnement. Nous concevons et opérons des solutions SaaS adaptées à vos besoins métier, sans complexité d'infrastructure de votre côté."
          : "Ready-to-use software, hosted and billed by subscription. We design and operate SaaS solutions tailored to your business needs, with no infrastructure complexity on your side."}
      </p>
    </section>
  );
}