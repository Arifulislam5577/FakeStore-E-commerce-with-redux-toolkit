import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import singleProductReducer from "../features/product/singleProductSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    product: singleProductReducer,
  },
});
