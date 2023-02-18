import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((product) => product.id !== action.payload)
        }
    }
});

export default CartSlice.reducer;
export const { add, remove } = CartSlice.actions;