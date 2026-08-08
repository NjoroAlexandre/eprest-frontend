import { Helmet } from "react-helmet-async";

export default function PoleDevOps() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>Mise en production & DevOps — E PREST</title>
        <meta name="description" content="Déploiement, industrialisation et fiabilisation de vos systèmes avec E PREST." />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">Mise en production & DevOps</h1>
      <p className="text-lg text-gray-600">
        Déploiement, industrialisation et fiabilisation de vos systèmes. Nous accompagnons vos équipes techniques dans la mise en production, l'automatisation et la supervision continue de vos applications.
      </p>
    </section>
  );
}