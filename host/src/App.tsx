import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "header/Header";
import ThemeProviders from "./providers/ThemeProviders";
import { CssBaseline } from "@mui/material";

const App = () => (
  <div className="container">
    <Header />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ThemeProviders>
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProviders>
);
