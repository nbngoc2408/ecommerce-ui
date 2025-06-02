import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./productAPI";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await fetchProducts();
  },
  {
    condition(arg, thunkApi) {
      const status = selectProductsStatus(thunkApi.getState())
      if (status !== 'idle') {
        return false
      }
    },
  },
);

const initialProductsState = {
  products: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

export const { addProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
