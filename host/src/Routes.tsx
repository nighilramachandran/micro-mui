import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./widgets/layouts";

import AuthPage from "./pages/Auth";
import Home from "./pages/Home";
import { useStore } from "store/Store";

const PrivateRoutes: React.FC = () => {
  const { authenticated } = useStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":locale" element={<Layout />}>
          <Route index element={<AuthPage />} />
          <Route
            element={!authenticated ? <Navigate to="/" replace /> : <Outlet />}
          >
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
