import { Helmet } from "react-helmet-async";

export default function APropos() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>À propos — E PREST</title>
        <meta name="description" content="E PREST, startup technologique basée à Antananarivo, spécialisée dans le SaaS, la mise en production et la digitalisation." />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">À propos de E PREST</h1>
      <p className="mb-4 text-lg text-gray-600">
        E PREST est une startup technologique basée à Antananarivo, spécialisée dans le développement SaaS, la mise en production et la digitalisation des entreprises.
      </p>
      <p className="text-lg text-gray-600">
        Notre équipe accompagne ses clients avec exigence et proximité, en combinant expertise technique et compréhension fine des enjeux métier.
      </p>
    </section>
  );
}