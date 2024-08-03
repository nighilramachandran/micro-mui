import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./widgets/layouts";

import { ROUTES } from "./utils/constants/routes";
import AuthPage from "./pages/Auth";
import Home from "./pages/Home";
import { useStore } from "store/Store";

const PrivateRoutes: React.FC = () => {
  const { ROOT } = ROUTES;
  // store items
  const { authenticated } = useStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Layout />}>
          <Route index element={<AuthPage />}></Route>
          <Route
            element={!authenticated ? <Navigate to="/" replace /> : <Outlet />}
          >
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
