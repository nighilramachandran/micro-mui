import React, { useContext } from "react";
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
import LanguageProviders from "./providers/LanguageProviders";
import { ROUTES } from "./utils/constants/routes";

const PrivateRoutes: React.FC = () => {
  const { authenticated } = useStore();
  const { ROOT } = ROUTES;

  return (
    <BrowserRouter>
      <LanguageProviders>
        <Routes>
          <Route path={ROOT} element={<Layout />}>
            <Route index element={<AuthPage />} />
            {/* Protected route */}
            <Route
              element={
                !authenticated ? <Navigate to="/" replace /> : <Outlet />
              }
            >
              <Route path="home" element={<Home />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </LanguageProviders>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
