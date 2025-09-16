import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="seafood" element={<SeaFood />} />
          <Route path="all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
