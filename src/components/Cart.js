import React from "react";
import { useSelector } from "react-redux";
import ProductRow from "./ProductRow";

const Cart = () => {
  const { cart, total, amount } = useSelector((state) => state.products);

  return (
    <section className=" py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 w-full">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((pd) => {
                    return <ProductRow key={pd.id} {...pd} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full">
            <div className="cart-summary p-10 bg-gray-50 border-t-4  border-orange-500">
              <h1 className="uppercase text-center text-2xl font-bold mb-5">
                cart summary
              </h1>

              <div className="price-table flex justify-between items-center border-b mb-3">
                <h3>Total Items</h3>
                <h3>{amount.toFixed(2)}</h3>
              </div>
              <div className="price-table flex justify-between items-center border-b mb-3">
                <h3>Total Price</h3>
                <h3>${total.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
