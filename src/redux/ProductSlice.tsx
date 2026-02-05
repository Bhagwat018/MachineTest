import { createSlice } from "@reduxjs/toolkit";
import Products from '../dummydata/dummy';

const initialState = {
    products: Products.cardProducts,
    loading: false,
    error: null
};

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.products.findIndex(product => product.id === id);
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        }
    }
});

export const { setProducts, addProduct, removeProduct, updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
