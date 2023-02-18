// const store = require('./App/store')
// const cakeActions = require('./features/cake/cakeSlice').cakeActions
// const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
import { store as store } from './App/store';
import { cakeActions } from './features/cake/cakeSlice.';
import { iceCreamActions } from './features/iceCream/iceCreamSlice';
console.log("initial state : ",store.getState())

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.order(1));
store.dispatch(cakeActions.order(1));
store.dispatch(cakeActions.order(1));
store.dispatch(cakeActions.order(1));
store.dispatch(cakeActions.order(1));
store.dispatch(cakeActions.restocked(5));

store.dispatch(iceCreamActions.order(1));
store.dispatch(iceCreamActions.order(1));
store.dispatch(iceCreamActions.order(1));
store.dispatch(iceCreamActions.order(1));
store.dispatch(iceCreamActions.order(1));
store.dispatch(iceCreamActions.restocked(5));

unsubscribe();


