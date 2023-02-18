// const createSlice = require('@reduxjs/toolkit').createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfIceCream : 20
}

const iceCreamSlice = createSlice({
    name : 'iceCream',
    initialState,
    reducers : {
        order : (state,action) => {
            state.numOfIceCream -= action.payload;
        },
        restocked : (state,action) => {
            state.numOfIceCream += action.payload;
        }
    }
})

// module.exports = iceCreamSlice.reducer;
export default [iceCreamSlice.reducer];
export const { order , restocked } = iceCreamActions.actions;
// module.exports.iceCreamActions = iceCreamSlice.actions;