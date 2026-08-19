import { useState } from "react";
import { useSiteSettings } from "../context/SiteSettingsContext";

export default function AdminParametres() {
  const { parametres, mettreAJourParametres, mettreAJourMentionsLegales } = useSiteSettings();
  const [formGeneral, setFormGeneral] = useState({
    logoUrl: parametres.logoUrl,
    nomEntreprise: parametres.nomEntreprise,
    email: parametres.email,
    telephone: parametres.telephone,
    adresse: parametres.adresse,
  });
  const [formMentions, setFormMentions] = useState(parametres.mentionsLegales);
  const [sauvegardeGeneral, setSauvegardeGeneral] = useState(false);
  const [sauvegardeMentions, setSauvegardeMentions] = useState(false);

  const handleChangeGeneral = (e) => {
    setFormGeneral({ ...formGeneral, [e.target.name]: e.target.value });
    setSauvegardeGeneral(false);
  };

  const handleChangeLogo = (e) => {
    const fichier = e.target.files[0];
    if (!fichier) return;

    const lecteur = new FileReader();
    lecteur.onload = () => {
      setFormGeneral((prev) => ({ ...prev, logoUrl: lecteur.result }));
      setSauvegardeGeneral(false);
    };
    lecteur.readAsDataURL(fichier);
  };

  const handleSupprimerLogo = () => {
    setFormGeneral((prev) => ({ ...prev, logoUrl: "" }));
    setSauvegardeGeneral(false);
  };

  const handleChangeMentions = (e) => {
    setFormMentions({ ...formMentions, [e.target.name]: e.target.value });
    setSauvegardeMentions(false);
  };

  const handleSubmitGeneral = (e) => {
    e.preventDefault();
    mettreAJourParametres(formGeneral);
    setSauvegardeGeneral(true);
  };

  const handleSubmitMentions = (e) => {
    e.preventDefault();
    mettreAJourMentionsLegales(formMentions);
    setSauvegardeMentions(true);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-2xl font-bold text-primary-dark">Paramètres du site</h1>

      <form onSubmit={handleSubmitGeneral} className="mb-10 space-y-4 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-primary-dark">Identité et contact</h2>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Logo</label>

          {formGeneral.logoUrl && (
            <div className="mb-3 flex items-center gap-4">
              <img src={formGeneral.logoUrl} alt="Aperçu du logo" className="h-16 rounded-lg border border-gray-200 object-contain p-1" />
              <button
                type="button"
                onClick={handleSupprimerLogo}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                Retirer le logo
              </button>
            </div>
          )}

          <input
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleChangeLogo}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-dark"
          />
          <p className="mt-1 text-xs text-gray-500">Formats acceptés : PNG, JPG, SVG. Tant qu'aucun logo n'est choisi, le texte "E PREST" reste affiché.</p>
        </div>

        <div>
          <label htmlFor="nomEntreprise" className="mb-1 block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
          <input id="nomEntreprise" name="nomEntreprise" type="text" value={formGeneral.nomEntreprise} onChange={handleChangeGeneral} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Adresse email</label>
            <input id="email" name="email" type="email" placeholder="contact@eprest.mg" value={formGeneral.email} onChange={handleChangeGeneral} className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-gray-700">Téléphone</label>
            <input id="telephone" name="telephone" type="text" placeholder="+261 XX XX XXX XX" value={formGeneral.telephone} onChange={handleChangeGeneral} className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-gray-400 focus:border-primary focus:outline-none" />
          </div>
        </div>

        <div>
          <label htmlFor="adresse" className="mb-1 block text-sm font-medium text-gray-700">Adresse</label>
          <input id="adresse" name="adresse" type="text" value={formGeneral.adresse} onChange={handleChangeGeneral} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
            Enregistrer
          </button>
          {sauvegardeGeneral && <span className="text-sm text-green-600">Enregistré ✓</span>}
        </div>
      </form>

      <form onSubmit={handleSubmitMentions} className="space-y-4 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-primary-dark">Mentions légales</h2>

        <div>
          <label htmlFor="editeur" className="mb-1 block text-sm font-medium text-gray-700">Éditeur du site</label>
          <textarea id="editeur" name="editeur" rows="2" value={formMentions.editeur} onChange={handleChangeMentions} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="hebergement" className="mb-1 block text-sm font-medium text-gray-700">Hébergement</label>
          <input id="hebergement" name="hebergement" type="text" value={formMentions.hebergement} onChange={handleChangeMentions} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div>
          <label htmlFor="contact" className="mb-1 block text-sm font-medium text-gray-700">Contact (mentions légales)</label>
          <input id="contact" name="contact" type="text" value={formMentions.contact} onChange={handleChangeMentions} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
            Enregistrer
          </button>
          {sauvegardeMentions && <span className="text-sm text-green-600">Enregistré ✓</span>}
        </div>
      </form>
    </section>
  );
}