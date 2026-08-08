import { useState } from "react";

export default function MotDePasseOublie() {
  const [email, setEmail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEnvoye(true);
  };

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
      <div className="w-full rounded-xl border border-gray-200 p-8 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-bold text-primary-dark">Mot de passe oublié</h1>
        <p className="mb-6 text-center text-sm text-gray-600">Un lien de réinitialisation vous sera envoyé par email.</p>

        {envoye ? (
          <p className="rounded-lg bg-green-50 p-4 text-center text-sm text-green-700">
            Si cet email existe, un lien de réinitialisation a été envoyé.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
            </div>

            <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
              Envoyer le lien
            </button>
          </form>
        )}
      </div>
    </section>
  );
}