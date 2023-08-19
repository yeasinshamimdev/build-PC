import modalReducer from "@/redux/features/modal/modalSlice";
import { configureStore } from '@reduxjs/toolkit';
import buildPCSliceReducer from "./features/buildPC/buildPCSlice";

const store = configureStore({
  reducer: {
    buildPC : buildPCSliceReducer,
    modal: modalReducer,
  }
})

export default store;
