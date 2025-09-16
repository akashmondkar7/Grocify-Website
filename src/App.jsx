import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "fruits", element: <Fruits /> },
        { path: "dairy", element: <Dairy /> },
        { path: "seafood", element: <SeaFood /> },
        { path: "all-products", element: <AllProducts /> },
      ],
    },
  ],
  {
    basename: "/Grocify-Website", 
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
