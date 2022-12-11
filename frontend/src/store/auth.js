import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    isAuthenticated: false,
  },
  reducers: {
    authStart: state => {
      state.loading = !state.loading;
    },
  },
});

const { changeLoader }  = authSlice.actions

export const changeLoader = () => dispatch => {
    authStart()
};