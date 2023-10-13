import { createSlice } from "@reduxjs/toolkit";

export const addProduct = createSlice({
    name: "product",
    initialState: {
        title: "product 1",
        price: "888"
    }, 
    reducers: {
        update: (state, action) => {
            state.title = action.payload.title,
            state.price = action.payload.price
        }
    }
})

export const {update} = addProduct.actions
export default addProduct.reducer