import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { StoreProvider } from "store/Store";
import GoogleAuthProvider from "./exports/provider/GoogleAuthProvider";

const App = () => (
  <div className="container">
    <div>Name: Auth</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <GoogleAuthProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </GoogleAuthProvider>
);
