import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: null
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            state.isLogin = false;
            state.user = null;
        }
    }
})

export const { loginSuccess, logoutSuccess } = AuthSlice.actions;
export default AuthSlice.reducer;