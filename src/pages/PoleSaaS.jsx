import { Helmet } from "react-helmet-async";

export default function PoleSaaS() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>SaaS — E PREST</title>
        <meta name="description" content="Des logiciels prêts à l'emploi, hébergés et facturés par abonnement. Découvrez les solutions SaaS d'E PREST." />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">SaaS</h1>
      <p className="text-lg text-gray-600">
        Des logiciels prêts à l'emploi, hébergés et facturés par abonnement. Nous concevons et opérons des solutions SaaS adaptées à vos besoins métier, sans complexité d'infrastructure de votre côté.
      </p>
    </section>
  );
}