import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/spotifyType';

const initialState: IInitialState = {
  accessToken: '',
  authorized: false,
  user: null,
};

interface IInitialState {
  accessToken: string;
  authorized: boolean;
  user: User | null;
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
      state.user = null;
      state.accessToken = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
