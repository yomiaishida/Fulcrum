import { StrictMode } from "react";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { HelmetProvider } from "react-helmet-async";
import HomeScreen from "./views/HomeScreen.jsx";
import Register from "./views/Register.jsx";
import Login from "./views/Login.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProductScreen from "./views/ProductScreen.jsx";
import CartScreen from "./views/CartScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfileScreen from "./views/ProfileScreen.jsx";
import AdminDashboard from "./views/admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import UserListScreen from "./views/admin/UserListScreen";
import ProductListScreen from "./views/admin/ProductListScreen";
import ShippingScreen from "./views/ShippingScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
