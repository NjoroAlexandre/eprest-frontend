import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminAuthLayout from "./layouts/AdminAuthLayout";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import PoleSaaS from "./pages/PoleSaaS";
import PoleDevOps from "./pages/PoleDevOps";
import PoleIA from "./pages/PoleIA";
import APropos from "./pages/APropos";
import MentionsLegales from "./pages/MentionsLegales";
import References from "./pages/References";
import Catalogue from "./pages/Catalogue";
import Devis from "./pages/Devis";
import Essai from "./pages/Essai";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import MotDePasseOublie from "./pages/MotDePasseOublie";
import Dashboard from "./pages/Dashboard";
import Prospects from "./pages/Prospects";
import AdminReferences from "./pages/AdminReferences";
import Contenus from "./pages/Contenus";
import AdminBlog from "./pages/AdminBlog";
import AdminAnalytics from "./pages/AdminAnalytics";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pole-saas" element={<PoleSaaS />} />
        <Route path="/pole-devops" element={<PoleDevOps />} />
        <Route path="/pole-ia" element={<PoleIA />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/references" element={<References />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/essai" element={<Essai />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AdminAuthLayout />}>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/mot-de-passe-oublie" element={<MotDePasseOublie />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/prospects" element={<Prospects />} />
        <Route path="/admin/references" element={<AdminReferences />} />
        <Route path="/admin/contenus" element={<Contenus />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
      </Route>
    </Routes>
  );
}