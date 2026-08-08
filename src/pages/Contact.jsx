import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [typeClient, setTypeClient] = useState("particulier");
  const [formData, setFormData] = useState({ nom: "", entreprise: "", email: "", besoin: "" });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ typeClient, ...formData });
    setEnvoye(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-20">
      <Helmet>
        <title>Contact — E PREST</title>
        <meta name="description" content="Contactez E PREST pour discuter de votre projet SaaS, DevOps ou digitalisation." />
      </Helmet>

      <h1 className="mb-8 text-center text-3xl font-bold text-primary-dark">Contactez-nous</h1>

      {envoye ? (
        <p className="rounded-lg bg-green-50 p-4 text-center text-green-700">
          Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="mb-2 block text-sm font-medium text-gray-700">Vous êtes</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="typeClient"
                  value="particulier"
                  checked={typeClient === "particulier"}
                  onChange={(e) => setTypeClient(e.target.value)}
                  className="accent-primary"
                />
                Un particulier
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="typeClient"
                  value="entreprise"
                  checked={typeClient === "entreprise"}
                  onChange={(e) => setTypeClient(e.target.value)}
                  className="accent-primary"
                />
                Une entreprise
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="nom" className="mb-1 block text-sm font-medium text-gray-700">Nom complet</label>
            <input id="nom" type="text" name="nom" required value={formData.nom} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          {typeClient === "entreprise" && (
            <div>
              <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">Entreprise</label>
              <input id="entreprise" type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label htmlFor="besoin" className="mb-1 block text-sm font-medium text-gray-700">Votre besoin</label>
            <textarea id="besoin" name="besoin" rows="4" value={formData.besoin} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
}