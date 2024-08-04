import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProviders from "./providers/ThemeProviders";
import { CssBaseline } from "@mui/material";
import PrivateRoutes from "./Routes";
import GoogleAuthProvider from "googleAuthProvider/GoogleAuthProvider";

import { StoreProvider } from "store/Store";
import LanguageProviders from "./providers/LanguageProviders";

const App = () => <PrivateRoutes />;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
// const { locale } = useParams();

// console.log("locale", locale);

root.render(
  <GoogleAuthProvider>
    <StoreProvider>
      <ThemeProviders>
        <LanguageProviders>
          <CssBaseline enableColorScheme />
          <App />
        </LanguageProviders>
      </ThemeProviders>
    </StoreProvider>
  </GoogleAuthProvider>
);
