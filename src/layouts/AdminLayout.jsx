import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-4 py-4">
        <Link to="/" className="text-xl font-bold text-primary">E PREST</Link>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}