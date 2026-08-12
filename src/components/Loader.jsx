export default function Loader({ texte = "Chargement..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
      <p className="text-sm text-gray-500">{texte}</p>
    </div>
  );
}