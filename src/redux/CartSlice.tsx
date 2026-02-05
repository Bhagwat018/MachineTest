import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    loading: false,
    error: null
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:any, action:any) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem:any) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state:any, action:any) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item:any) => item.id !== id);
        },
        increaseQuantity: (state:any, action:any) => {
            const id = action.payload;
            const item = state.cartItems.find((item:any) => item.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state:any, action:any) => {
            const id = action.payload;
            const item = state.cartItems.find((item:any) => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((cartItem:any) => cartItem.id !== id);
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;