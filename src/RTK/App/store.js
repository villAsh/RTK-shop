// const configureStore = require('@reduxjs/toolkit').configureStore;
// const { getDefaultMiddleware } = require('@reduxjs/toolkit');
// const cakeReducer = require('../features/cake/cakeSlice');
// const iceCreamReducer = require('../features/iceCream/iceCreamSlice');

import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import {cakeReducer} from '../features/cake/cakeSlice'
import { iceCreamReducer } from '../features/iceCream/iceCreamSlice'
import { reduxLogger } from 'redux-logger'
// const reduxLogger = require('redux-logger');

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),

})

// module.exports = store;
export default store;