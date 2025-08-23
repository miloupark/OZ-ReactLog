import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import cafedata from "../../assets/cafedata.js";
import Cart from "./Cart";
import Menu from "./Menu";
import Header from "./Header.jsx";

export default function Cafe() {
  const [menu, setMenu] = useState(cafedata.menu);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu menu={menu} cart={cart} setCart={setCart} />}></Route>
          <Route path="/cart" element={<Cart menu={menu} cart={cart} setCart={setCart} />}></Route>
        </Routes>
      </main>
    </div>
  );
}
