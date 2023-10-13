import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from "../features/addProduct";

export const store = configureStore({
    reducer: {
        product: addProductReducer
    }
})