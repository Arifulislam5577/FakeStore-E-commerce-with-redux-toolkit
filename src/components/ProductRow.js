import React from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { toggleQty, removeProduct } from "../features/product/productSlice";
import { useDispatch } from "react-redux";
const ProductRow = ({ id, title, price, qty, category }) => {
  const dispatch = useDispatch();
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        <Link to={`/product/${id}`}>{title.slice(0, 25)}...</Link>
      </th>
      <td className="px-6 py-4 flex items-center gap-3">
        <button
          className="border p-1 hover:bg-slate-900 hover:text-gray-50 transition-all"
          onClick={() => {
            if (qty === 1) {
              dispatch(removeProduct(id));
            }
            dispatch(toggleQty({ id, sign: "minus" }));
          }}
        >
          <FiMinus />
        </button>
        {qty}
        <button
          className="border p-1 hover:bg-slate-900 hover:text-gray-50 transition-all"
          onClick={() => dispatch(toggleQty({ id, sign: "plus" }))}
        >
          <FiPlus />
        </button>
      </td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        <button
          className=" hover:text-red-500  transition-all"
          onClick={() => dispatch(removeProduct(id))}
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
