const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const { getDefaultNormalizer } = require('@testing-library/react');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice');

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

module.exports = store;