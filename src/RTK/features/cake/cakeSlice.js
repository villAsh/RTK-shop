// const createSlice = require('@reduxjs/toolkit').createSlice;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCake : 10,
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers : {
        order : (state,action) => {
            state.numOfCake -= action.payload;
        },
        restocked : (state,action) =>{
            state.numOfCake += action.payload;
        }

    }
})

// module.exports = cakeSlice.reducer;
export default [ cakeSlice.reducer ];
export const {order ,restocked} = cakeSlice.actions;
// module.exports.cakeActions = cakeSlice.actions