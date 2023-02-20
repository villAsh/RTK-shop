import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state, action){
            // state.push(action.payload);
            //new code
            const addToCart =  state.find((item) => item.id === action.payload.id);
            if(addToCart){
                addToCart.qty++;
            }else{
                state.push({...action.payload,qty : 1});
            }
        },
        remove(state,action){
            return state.filter((product) => product.id !== action.payload);
        },
        increaseQty(state,action){
            const product = state.find((item) => item.id === action.payload);
            product.qty++;
        },
        decreaseQty(state,action){
            const product = state.find((item) => item.id = action.payload);
            if(product.qty === 1){
                product.qty = 1;
            }else{
                product.qty--;
            }
        }
    }
});

export default CartSlice.reducer;
export const { add, remove,increaseQty,decreaseQty } = CartSlice.actions;