const prospectsExemple = [
  { nom: "Rakoto Jean", entreprise: "Société A", type: "demo", email: "jean@societea.mg", date: "2026-08-01" },
  { nom: "Rasoa Marie", entreprise: "Société B", type: "devis", email: "marie@societeb.mg", date: "2026-07-30" },
  { nom: "Andry Paul", entreprise: "Société C", type: "essai", email: "paul@societec.mg", date: "2026-07-28" },
];

const typeLabel = { demo: "Démo", devis: "Devis", essai: "Essai" };

export default function Prospects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Prospects</h1>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Entreprise</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {prospectsExemple.map((p, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-800">{p.nom}</td>
                <td className="px-4 py-3 text-gray-600">{p.entreprise}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {typeLabel[p.type]}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{p.email}</td>
                <td className="px-4 py-3 text-gray-600">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}