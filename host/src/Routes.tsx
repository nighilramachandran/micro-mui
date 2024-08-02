import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./widgets/layouts";

import { ROUTES } from "./utils/constants/routes";
import Home from "./pages/Home";

const PrivateRoutes: React.FC = () => {
  const { ROOT } = ROUTES;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path=":id" element={<DynamicPage />}></Route>  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
