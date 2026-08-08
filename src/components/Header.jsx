import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [poleOuvert, setPoleOuvert] = useState(false);
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-primary" onClick={() => setMenuMobileOuvert(false)}>
          E PREST
        </Link>

        {/* Menu desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setPoleOuvert(true)}
            onMouseLeave={() => setPoleOuvert(false)}
          >
            <button className="text-sm font-medium text-gray-600 hover:text-primary">
              Nos pôles ▾
            </button>
            {poleOuvert && (
              <div className="absolute left-0 top-full w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-md">
                <Link to="/pole-saas" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">SaaS</Link>
                <Link to="/pole-devops" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Mise en production & DevOps</Link>
                <Link to="/pole-ia" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Digitalisation & Formation IA</Link>
              </div>
            )}
          </div>

          <Link to="/catalogue" className="text-sm font-medium text-gray-600 hover:text-primary">Catalogue</Link>
          <Link to="/references" className="text-sm font-medium text-gray-600 hover:text-primary">Références</Link>
          <Link to="/a-propos" className="text-sm font-medium text-gray-600 hover:text-primary">À propos</Link>
          <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">Demander une démo</Link>
        </div>

        {/* Bouton hamburger, mobile ihany */}
        <button
          onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
          className="text-2xl text-primary-dark md:hidden"
          aria-label="Menu"
        >
          {menuMobileOuvert ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile, hisokatra ambany */}
      {menuMobileOuvert && (
        <div className="flex flex-col gap-1 border-t border-gray-200 px-4 py-3 md:hidden">
          <Link to="/pole-saas" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">SaaS</Link>
          <Link to="/pole-devops" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">Mise en production & DevOps</Link>
          <Link to="/pole-ia" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">Digitalisation & Formation IA</Link>
          <Link to="/catalogue" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">Catalogue</Link>
          <Link to="/references" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">Références</Link>
          <Link to="/a-propos" onClick={() => setMenuMobileOuvert(false)} className="rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50">À propos</Link>
          <Link to="/contact" onClick={() => setMenuMobileOuvert(false)} className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-dark">Demander une démo</Link>
        </div>
      )}
    </header>
  );
}