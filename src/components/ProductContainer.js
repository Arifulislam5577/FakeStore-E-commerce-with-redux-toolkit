import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product";

const ProductContainer = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  if (isLoading) {
    return (
      <section className="product-container py-10">
        <h1 className="text-4xl font-bold uppercase text-center">Loading...</h1>
      </section>
    );
  }
  return (
    <section className="product-container py-10">
      <div className="container">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between ">
          {products?.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
