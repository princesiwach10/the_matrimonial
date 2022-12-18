import { createSlice } from '@reduxjs/toolkit';
import * as constant from '../constant';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    userList: [],
  },
  reducer: {
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { getUserList } = userSlice.actions;

export const getUsers =
  (callback = null) =>
  dispatch => {
    constant.request
      .get('/users/user/')
      .then(res => {
        if (res.status === 200) {
          dispatch(getUserList(res.data));
          if (callback) callback();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

export default userSlice.reducer;
