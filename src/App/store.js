import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Features/CartSlice";
import ProductReducer from "../Features/ProductSlice";

const store = configureStore({
    reducer : {
        cart : CartReducer,
        product : ProductReducer,
    }
})

export default store;