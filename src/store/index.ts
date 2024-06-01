import {configureStore} from '@reduxjs/toolkit';
import colorsReducer from './slices/colors';

export default configureStore({
  reducer: {
    colors: colorsReducer,
  },
});
