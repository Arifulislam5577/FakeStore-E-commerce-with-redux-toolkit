import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state.products);
  return (
    <nav className="bg-gray-50 p-5 shadow">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="logo font-bold">FakeStore</h1>
        </Link>
        <ul className="cart-info flex justify-between items-center gap-5">
          <li className="flex">
            <BiShoppingBag className="text-3xl text-gray-600 hover:text-gray-400 transition cursor-pointer" />
            <span className="bg-slate-900 h-5 w-5 text-gray-50 text-center flex items-center justify-center rounded-full text-xs">
              {cart.length}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
