import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
