import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import ThemeProviders from "./providers/ThemeProviders";
import { CssBaseline } from "@mui/material";
import Header from "./widgets/layouts/header/Header";

import Login from "login/Login";

const App = () => (
  <div className="container">
    <Header />
    <Login />
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
