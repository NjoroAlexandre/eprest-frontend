import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppDataProvider } from "./context/AppDataContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ReferencesProvider } from "./context/ReferencesContext";
import { SiteSettingsProvider } from "./context/SiteSettingsContext";
import { CatalogueProvider } from "./context/CatalogueContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <AppDataProvider>
          <ReferencesProvider>
            <SiteSettingsProvider>
              <CatalogueProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CatalogueProvider>
            </SiteSettingsProvider>
          </ReferencesProvider>
        </AppDataProvider>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);