import { useState } from "react";

const referencesExemple = [
  { id: 1, client: "Client A", pole: "SaaS", accordClient: true, publie: true },
  { id: 2, client: "Client B", pole: "Mise en production & DevOps", accordClient: true, publie: true },
  { id: 3, client: "Client C", pole: "Digitalisation & Formation IA", accordClient: false, publie: false },
];

export default function AdminReferences() {
  const [references, setReferences] = useState(referencesExemple);

  const togglePublie = (id) => {
    setReferences(
      references.map((ref) =>
        ref.id === id ? { ...ref, publie: !ref.publie } : ref
      )
    );
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-2 text-2xl font-bold text-primary-dark">Gestion des références</h1>
      <p className="mb-8 text-sm text-gray-600">Données d'exemple — connectées au backend prochainement (GET/PATCH /references).</p>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Pôle</th>
              <th className="px-4 py-3">Accord client</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {references.map((ref) => (
              <tr key={ref.id} className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-800">{ref.client}</td>
                <td className="px-4 py-3 text-gray-600">{ref.pole}</td>
                <td className="px-4 py-3">
                  {ref.accordClient ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Oui</span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">Non</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {ref.publie ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Publié</span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">Brouillon</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => togglePublie(ref.id)}
                    disabled={!ref.accordClient}
                    className="rounded-lg border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {ref.publie ? "Dépublier" : "Publier"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}