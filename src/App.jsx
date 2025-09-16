import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import { RouterProvider } from "react-router-dom";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
       {
        path:"/",
        element:<Home/>


       } ,
            {
      path:"/Fruits",
      element:<Fruits/>

    },
    {
      path:"/Dairy",
      element:<Dairy/>
    },
    {
      path:"/SeaFood",
      element:<SeaFood/>
    },
    {
      path:"/allproducts",
      element:<AllProducts/>
    }
      ]
    },

  ])
return <RouterProvider router={router} basename='Grocify-Website'/>;
  
}

export default App;
