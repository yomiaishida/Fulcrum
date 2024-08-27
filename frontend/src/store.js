import { configureStore } from "@reduxjs/toolkit";

// Import your slices here (we will create them later)
// import authReducer from './features/auth/authSlice';
// import productReducer from './features/product/productSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // product: productReducer,
    // You can add more reducers here
    devTools: true,
  },
});

export default store;
