import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  isLoading: false,
  products: [],
  cart: cartItems,
  total: 0,
  amount: 0,
};

const url = "https://fakestoreapi.com/products";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const result = await axios(url);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemId = action.payload;
      const item = state.products.find((product) => product.id === itemId);
      const product = { ...item, qty: 1 };

      if (state.cart.find((cart) => cart.id === product.id)) {
        return;
      } else {
        state.cart = [...state.cart, product];
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    toggleQty: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cart.find((product) => product.id === itemId);

      if (action.payload.sign === "plus") {
        item.qty = item.qty + 1;
      } else {
        item.qty = item.qty - 1;
      }
    },
    removeProduct: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== itemId);
    },
    calcTotal: (state) => {
      state.amount = state.cart.reduce((sum, product) => sum + product.qty, 0);

      state.total = state.cart.reduce(
        (sum, product) => sum + product.price * product.qty * 1,
        0
      );
    },
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addTocart, toggleQty, removeProduct, calcTotal } =
  productSlice.actions;
export default productSlice.reducer;
