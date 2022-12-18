import authReducer from './auth';
import userReducer from './user';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
