import { Helmet } from "react-helmet-async";

export default function PoleIA() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <Helmet>
        <title>Digitalisation & Formation IA — E PREST</title>
        <meta name="description" content="Accompagnement à la transformation numérique et montée en compétence IA avec E PREST." />
      </Helmet>

      <h1 className="mb-6 text-4xl font-bold text-primary-dark">Digitalisation & Formation IA</h1>
      <p className="text-lg text-gray-600">
        Accompagnement à la transformation numérique et montée en compétence IA. Nous formons vos équipes et vous aidons à intégrer l'intelligence artificielle dans vos processus métier.
      </p>
    </section>
  );
}