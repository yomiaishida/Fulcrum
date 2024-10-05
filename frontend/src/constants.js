const apiUrl = import.meta.env.VITE_BASE_URL || "/";

export const BASE_URL = apiUrl; // If using proxy
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/auth";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
