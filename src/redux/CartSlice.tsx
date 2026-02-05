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
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;