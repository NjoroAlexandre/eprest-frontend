import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [poleOuvert, setPoleOuvert] = useState(false);
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
  const { langue, setLangue, t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-primary" onClick={() => setMenuMobileOuvert(false)}>
          E PREST
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setPoleOuvert(true)}
            onMouseLeave={() => setPoleOuvert(false)}
          >
            <button className="text-sm font-medium text-gray-600 hover:text-primary">
              {t("nosPoles")} ▾
            </button>
            {poleOuvert && (
              <div className="absolute left-0 top-full w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-md">
                <Link to="/pole-saas" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">SaaS</Link>
                <Link to="/pole-devops" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">
                  {langue === "fr" ? "Mise en production & DevOps" : "Production & DevOps"}
                </Link>
                <Link to="/pole-ia" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">
                  {langue === "fr" ? "Digitalisation & Formation IA" : "Digitalization & AI Training"}
                </Link>
              </div>
            )}
          </div>

          <Link to="/catalogue" className="text-sm font-medium text-gray-600 hover:text-primary">{t("catalogue")}</Link>
          <Link to="/references" className="text-sm font-medium text-gray-600 hover:text-primary">{t("references")}</Link>
          <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-primary">{t("actualites")}</Link>
          <Link to="/a-propos" className="text-sm font-medium text-gray-600 hover:text-primary">{t("aPropos")}</Link>

          <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1 text-xs font-semibold">
            <button
              onClick={() => setLangue("fr")}
              className={`rounded px-2 py-1 ${langue === "fr" ? "bg-primary text-white" : "text-gray-500"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLangue("en")}
              className={`rounded px-2 py-1 ${langue === "en" ? "bg-primary text-white" : "text-gray-500"}`}
            >
              EN
            </button>
          </div>

          <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">{t("demanderDemo")}</Link>
        </div>

        <button
          onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
          className="text-2xl text-primary-dark md:hidden"
          aria-label="Menu"
        >
          {menuMobileOuvert ? "✕" : "☰"}
        </button>
      </div>

      {menuMobileOuvert && (
        <div className="flex flex-col gap-1 border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <Link to="/pole-saas" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">SaaS</Link>
          <Link to="/pole-devops" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">
            {langue === "fr" ? "Mise en production & DevOps" : "Production & DevOps"}
          </Link>
          <Link to="/pole-ia" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">
            {langue === "fr" ? "Digitalisation & Formation IA" : "Digitalization & AI Training"}
          </Link>
          <Link to="/catalogue" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">{t("catalogue")}</Link>
          <Link to="/references" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">{t("references")}</Link>
          <Link to="/blog" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">{t("actualites")}</Link>
          <Link to="/a-propos" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">{t("aPropos")}</Link>
          <div className="mt-2 flex items-center gap-1 self-start rounded-lg border border-gray-200 p-1 text-xs font-semibold">
            <button onClick={() => setLangue("fr")} className={`rounded px-2 py-1 ${langue === "fr" ? "bg-primary text-white" : "text-gray-500"}`}>FR</button>
            <button onClick={() => setLangue("en")} className={`rounded px-2 py-1 ${langue === "en" ? "bg-primary text-white" : "text-gray-500"}`}>EN</button>
          </div>
          <Link to="/contact" onClick={() => setMenuMobileOuvert(false)} className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-dark">{t("demanderDemo")}</Link>
        </div>
      )}
    </header>
  );
}