import { Outlet, Link, useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleDeconnexion = () => {
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4">
        <Link to="/" className="text-xl font-bold text-primary">E PREST</Link>
        <button
          onClick={handleDeconnexion}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Se déconnecter
        </button>
      </header>
      <main className="flex-1">
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>
    </div>
  );
}