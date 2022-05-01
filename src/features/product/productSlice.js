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
export const { addTocart } = productSlice.actions;
export default productSlice.reducer;
