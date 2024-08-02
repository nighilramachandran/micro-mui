import React from "react";
import ReactDOM from "react-dom/client";

import ThemeProviders from "./providers/ThemeProviders";
import { CssBaseline } from "@mui/material";
import PrivateRoutes from "./Routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { StoreProvider } from "store/Store";

const App = () => <PrivateRoutes />;

const clientId =
  "668468703617-3adnh45mvo2glj6u5698131g9tgtt52t.apps.googleusercontent.com";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <StoreProvider>
      <ThemeProviders>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProviders>
    </StoreProvider>
  </GoogleOAuthProvider>
);
