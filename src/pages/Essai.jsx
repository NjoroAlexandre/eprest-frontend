import { useState } from "react";

export default function Essai() {
  const [formData, setFormData] = useState({ nom: "", entreprise: "", email: "", produit: "" });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setEnvoye(true);
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="mb-2 text-center text-3xl font-bold text-primary-dark">Démarrer un essai gratuit</h1>
      <p className="mb-8 text-center text-gray-600">Testez nos solutions sans engagement.</p>

      {envoye ? (
        <p className="rounded-lg bg-green-50 p-4 text-center text-green-700">
          Merci, votre essai gratuit va être activé sous peu.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nom" className="mb-1 block text-sm font-medium text-gray-700">Nom complet</label>
            <input id="nom" type="text" name="nom" required value={formData.nom} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-gray-700">Entreprise</label>
            <input id="entreprise" type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email professionnel</label>
            <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
          </div>

          <div>
            <label htmlFor="produit" className="mb-1 block text-sm font-medium text-gray-700">Produit souhaité</label>
            <select id="produit" name="produit" value={formData.produit} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none">
              <option value="">Sélectionner</option>
              <option value="crm">E PREST CRM</option>
            </select>
          </div>

          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
            Démarrer l'essai
          </button>
        </form>
      )}
    </section>
  );
}