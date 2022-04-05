import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: "",
        authorized: false,
        user: {},
    },
    reducers: {
        login: (state, action) => {
            state.authorized = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;