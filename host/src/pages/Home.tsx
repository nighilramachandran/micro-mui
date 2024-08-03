import React, { lazy } from "react";
const Products = lazy(() => import("products/Products"));

const Home: React.FC = () => {
  return <Products />;
};

export default Home;
