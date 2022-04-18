import { createSlice } from '@reduxjs/toolkit';

const initialState: stateInitial = {
  accessToken: '',
  authorized: false,
  user: {},
};

interface stateInitial {
  accessToken: string;
  authorized: boolean;
  user: any;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authorized = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.authorized = false;
      state.user = {};
      state.accessToken = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
