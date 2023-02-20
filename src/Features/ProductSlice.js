import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error'
})

const ProductSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUS.IDLE
    },
    //when we use ony redux thunk to call api we have to use reducers.....
    reducers : {
        setProducts (state,action){
            state.data = action.payload;
        },
        setStatus (state,action){
            state.status = action.payload
        }
    },
    //when we use createAsyncThunk method we have to use extraReducers....
    // extraReducers : (builder) => {
    //     builder
    //     .addCase(fetchProducts.pending, (state,action) => {
    //         state.status = STATUS.LOADING;
    //     })
    //     .addCase(fetchProducts.fulfilled, (state,action) =>{
    //         state.data = action.payload;
    //         state.status = STATUS.IDLE;
    //     })
    //     .addCase(fetchProducts.rejected, (state,action) => {
    //         state.status = STATUS.ERROR;
    //     })
    // }  
});

//api call using createasynchthunk method : Redux toolkit
// export const fetchProducts = createAsyncThunk('product/fetch', async () => {
//     const res = await axios.get('https://fakestoreapi.com/products');
//     const data = await res.data;
//     return data;
// });

//api call using thunk : Redux
export function fetchProducts(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const res = await axios.get('https://fakestoreapi.com/products');
            const data = await res.data;
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
        }
       catch(error){
        console.log(error)
        setStatus(STATUS.ERROR)
       }
    }
}

export default ProductSlice.reducer;
export const { setProducts,setStatus } =  ProductSlice.actions;