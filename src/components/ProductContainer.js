import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import Product from "./Product";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
