import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/redux-practice/counterSlice.js'
import themeReducer from '../components/redux-practice/Theme/themeSlice.js';
import backgroundReducer from '../components/redux-practice/backgroundChange/backgroundSlice.js';
import loginReducer from '../components/slice/loginSlice';
import roleReducer from '../components/slice/roleSlice';
export const store =  configureStore({
  reducer: {
      counter : counterReducer,
      Theme : themeReducer,
      background : backgroundReducer,
      LoggedIn : loginReducer,
      role : roleReducer,
  },
})