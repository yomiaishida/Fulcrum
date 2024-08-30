import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";

// Import your slices here (we will create them later)
// import authReducer from './features/auth/authSlice';
// import productReducer from './features/product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // product: productReducer,
    // You can add more reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
