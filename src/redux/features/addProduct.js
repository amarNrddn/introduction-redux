import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async() => {
    const res = await axios.get("http://localhost:5000/product")
    return res.data
})

export const createProduct = createAsyncThunk("product/createProduct", async({...form}) => {
    const res = await axios.post("http://localhost:5000/product",{
        ...form
    })

    return res.data
})

const productEntity = createEntityAdapter({
    selectId: (product) => product.id
})

export const addProduct = createSlice({
    name: "product",
    initialState: productEntity.getInitialState(),
    extraReducers: {
        [getProduct.fulfilled] : (state, action) => {
            productEntity.setAll(state, action.payload)
        },
        [createProduct.fulfilled]: (state, action) => {
            productEntity.addOne(state, action.payload)
        }
    }
    
})

export const productSelector = productEntity.getSelectors(state => state.product)
export default addProduct.reducer