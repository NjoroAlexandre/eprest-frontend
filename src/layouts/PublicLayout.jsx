import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";
import PageWrapper from "../components/PageWrapper";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}