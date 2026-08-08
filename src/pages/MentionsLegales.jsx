import { Helmet } from "react-helmet-async";

export default function MentionsLegales() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <Helmet>
        <title>Mentions légales — E PREST</title>
        <meta name="description" content="Mentions légales du site E PREST Solutions." />
      </Helmet>

      <h1 className="mb-6 text-3xl font-bold text-primary-dark">Mentions légales</h1>

      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Éditeur du site</h2>
          <p>E PREST Solutions — [adresse complète à compléter]</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Hébergement</h2>
          <p>[Nom de l'hébergeur à compléter]</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-primary">Contact</h2>
          <p>[Email de contact à compléter]</p>
        </div>
      </div>
    </section>
  );
}