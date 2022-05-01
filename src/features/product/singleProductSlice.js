import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  product: {},
};

const url = "https://fakestoreapi.com/products";

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    const result = await axios(`${url}/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const singleProductSlice = createSlice({
  name: "signleProduct",
  initialState,

  extraReducers: {
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [getProduct.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default singleProductSlice.reducer;
