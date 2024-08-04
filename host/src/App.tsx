import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProviders from "./providers/ThemeProviders";
import { CssBaseline } from "@mui/material";
import PrivateRoutes from "./Routes";
import GoogleAuthProvider from "googleAuthProvider/GoogleAuthProvider";

import { StoreProvider } from "store/Store";
import "./i18n";

const App = () => <PrivateRoutes />;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <GoogleAuthProvider>
    <StoreProvider>
      <ThemeProviders>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProviders>
    </StoreProvider>
  </GoogleAuthProvider>
);
