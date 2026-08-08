import { useState } from "react";

export default function ChatbotWidget() {
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", texte: "Bonjour ! Comment puis-je vous aider concernant E PREST ?" },
  ]);
  const [saisie, setSaisie] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!saisie.trim()) return;

    const nouveauMessage = { role: "utilisateur", texte: saisie };
    setMessages([...messages, nouveauMessage]);
    setSaisie("");

    // Ho ampiana any aoriana: appel API mankany amin'ny backend (POST /chat, streaming)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", texte: "Connexion au backend pas encore disponible." }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {ouvert && (
        <div className="mb-4 flex h-96 w-80 flex-col rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center justify-between rounded-t-xl bg-primary px-4 py-3">
            <span className="text-sm font-semibold text-white">Assistant E PREST</span>
            <button onClick={() => setOuvert(false)} className="text-white">✕</button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  m.role === "assistant"
                    ? "bg-gray-100 text-gray-700"
                    : "ml-auto bg-primary text-white"
                }`}
              >
                {m.texte}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex gap-2 border-t border-gray-200 p-3">
            <input
              type="text"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
            <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
              Envoyer
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOuvert(!ouvert)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-lg hover:bg-primary-dark"
      >
        {ouvert ? "✕" : "💬"}
      </button>
    </div>
  );
}