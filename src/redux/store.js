import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
    },
});