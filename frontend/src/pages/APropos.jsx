import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

export default function APropos() {
  const { langue } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>{langue === "fr" ? "À propos — E PREST" : "About — E PREST"}</title>
        <meta
          name="description"
          content={
            langue === "fr"
              ? "E PREST, startup technologique basée à Antananarivo, spécialisée dans le SaaS, la mise en production et la digitalisation."
              : "E PREST, a technology startup based in Antananarivo, specialized in SaaS, production deployment and digitalization."
          }
        />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">
        {langue === "fr" ? "À propos de E PREST" : "About E PREST"}
      </h1>
      <p className="mb-4 text-lg text-gray-600">
        {langue === "fr"
          ? "E PREST est une startup technologique basée à Antananarivo, spécialisée dans le développement SaaS, la mise en production et la digitalisation des entreprises."
          : "E PREST is a technology startup based in Antananarivo, specializing in SaaS development, production deployment and business digitalization."}
      </p>
      <p className="text-lg text-gray-600">
        {langue === "fr"
          ? "Notre équipe accompagne ses clients avec exigence et proximité, en combinant expertise technique et compréhension fine des enjeux métier."
          : "Our team supports its clients with rigor and closeness, combining technical expertise with a deep understanding of business challenges."}
      </p>
    </section>
  );
}