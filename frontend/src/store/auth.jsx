import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
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

export const { authStart } = authSlice.actions;

export const changeLoader = () => dispatch => {
  authStart();
};

export default authSlice.reducer;
