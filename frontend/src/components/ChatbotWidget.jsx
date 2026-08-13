import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ChatbotWidget() {
  const { langue } = useLanguage();
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", texte: langue === "fr" ? "Bonjour ! Comment puis-je vous aider concernant E PREST ?" : "Hello! How can I help you regarding E PREST?" },
  ]);
  const [saisie, setSaisie] = useState("");
  const [ecoute, setEcoute] = useState(false);
  const [texteEnDirect, setTexteEnDirect] = useState("");
  const [vocalActif, setVocalActif] = useState(false);
  const recognitionRef = useRef(null);

  const supporteVocal = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

  const lireAVoixHaute = (texte) => {
    if (!vocalActif || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(texte);
    utterance.lang = langue === "fr" ? "fr-FR" : "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const demarrerEcoute = () => {
    if (!supporteVocal) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = langue === "fr" ? "fr-FR" : "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setEcoute(true);
      setTexteEnDirect("");
    };
    recognition.onend = () => setEcoute(false);
    recognition.onerror = () => setEcoute(false);
    recognition.onresult = (event) => {
      let texteComplet = "";
      for (let i = 0; i < event.results.length; i++) {
        texteComplet += event.results[i][0].transcript;
      }
      setTexteEnDirect(texteComplet);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const arreterEcoute = () => {
    recognitionRef.current?.stop();
    setEcoute(false);
    if (texteEnDirect.trim()) {
      setSaisie(texteEnDirect.trim());
    }
    setTexteEnDirect("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!saisie.trim()) return;

    const nouveauMessage = { role: "utilisateur", texte: saisie };
    setMessages((prev) => [...prev, nouveauMessage]);
    setSaisie("");

    setTimeout(() => {
      const reponse = langue === "fr" ? "Connexion au backend pas encore disponible." : "Backend connection not yet available.";
      setMessages((prev) => [...prev, { role: "assistant", texte: reponse }]);
      lireAVoixHaute(reponse);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {ouvert && (
        <div className="relative mb-4 flex h-96 w-80 flex-col rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center justify-between rounded-t-xl bg-primary px-4 py-3">
            <span className="text-sm font-semibold text-white">
              {langue === "fr" ? "Assistant E PREST" : "E PREST Assistant"}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVocalActif(!vocalActif)}
                title={langue === "fr" ? "Lecture vocale des réponses" : "Voice reading of replies"}
                className={`text-lg ${vocalActif ? "opacity-100" : "opacity-50"}`}
              >
                🔊
              </button>
              <button onClick={() => setOuvert(false)} className="text-white">✕</button>
            </div>
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
              placeholder={langue === "fr" ? "Écrivez votre message..." : "Type your message..."}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
            {supporteVocal && (
              <button
                type="button"
                onClick={demarrerEcoute}
                title={langue === "fr" ? "Parler" : "Speak"}
                className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
              </button>
            )}
            <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
              {langue === "fr" ? "Envoyer" : "Send"}
            </button>
          </form>

          {ecoute && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-between rounded-xl bg-primary-dark px-6 py-10 text-white">
              <button
                onClick={arreterEcoute}
                className="self-end text-2xl"
                aria-label={langue === "fr" ? "Arrêter" : "Stop"}
              >
                ✕
              </button>

              <div className="flex flex-1 flex-col items-center justify-center gap-6">
                <div className="flex items-end gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 animate-pulse rounded-full bg-white"
                      style={{
                        height: `${16 + (i % 3) * 12}px`,
                        animationDelay: `${i * 0.12}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm text-white/70">
                  {langue === "fr" ? "Je vous écoute..." : "Listening..."}
                </p>
                <p className="min-h-[3rem] max-w-xs text-center text-lg">
                  {texteEnDirect || (langue === "fr" ? "Parlez maintenant" : "Speak now")}
                </p>
              </div>

              <button
                onClick={arreterEcoute}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark"
              >
                {langue === "fr" ? "Terminer" : "Done"}
              </button>
            </div>
          )}
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