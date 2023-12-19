import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes >
    </>
  );
}

export default App;
