import modalReducer from "@/redux/features/modal/modalSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  }
})

export default store;
