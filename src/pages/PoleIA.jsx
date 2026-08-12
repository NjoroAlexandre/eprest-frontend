import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function PoleIA() {
  const { langue } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "Digitalisation & Formation IA — E PREST" : "Digitalization & AI Training — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "Accompagnement à la transformation numérique et montée en compétence IA avec E PREST."
              : "Support for digital transformation and AI skills development with E PREST."
          }
        />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">
        {langue === "fr" ? "Digitalisation & Formation IA" : "Digitalization & AI Training"}
      </h1>
      <p className="text-lg text-gray-600">
        {langue === "fr"
          ? "Accompagnement à la transformation numérique et montée en compétence IA. Nous formons vos équipes et vous aidons à intégrer l'intelligence artificielle dans vos processus métier."
          : "Support for digital transformation and AI skills development. We train your teams and help you integrate artificial intelligence into your business processes."}
      </p>
    </section>
  );
}