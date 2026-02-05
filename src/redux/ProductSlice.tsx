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
    }
});

export const { setProducts, addProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
