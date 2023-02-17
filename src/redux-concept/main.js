const redux = require('redux')
const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
//initial state
// const initial_state = {
//     numOfCakes : 10,
//     numOfIceCream : 20,
// }
const cake_state = {
    numOfCakes : 10,
}
const ic_state = {
    numOfIceCream : 20,
}

//action types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//actions with action creators

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload : 1,
    }
}

function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIC(){
    return{
        type : ICECREAM_ORDERED,
        payload : 1
    }
}

function restockIC(qty = 1){
    return{
        type : ICECREAM_RESTOCKED,
        payload : qty
    }
}
//reducer functions

//using single reducer
// const reducer = (state = initial_state,action) =>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 numOfCakes : state.numOfCakes - 1
//             }
//         case CAKE_RESTOCKED:
//             return{
//                 ...state,
//                 numOfCakes : state.numOfCakes + action.payload
//             }
        
//         case ICECREAM_ORDERED:
//             return{
//                 ...state,
//                 numOfIceCream : state.numOfIceCream - 1,
//             }
//         case ICECREAM_RESTOCKED:
//             return{
//                 ...state,
//                 numOfIceCream : state.numOfIceCream + action.payload,
//             }
//         default:
//             return state
//     }
// }

//using multiple reducers
const cake_reducer = (state = cake_state,action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes : state.numOfCakes + action.payload,
            }
        default:
            return state
    }
}

const ic_reducer = (state = ic_state, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream - 1,
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream + action.payload,
            }
        default:
            return state
    }
}

//combining reducers into a root reducer
const rootReducer = combineReducers({
    cake : cake_reducer,
    ic : ic_reducer,
})

//global store
const store = createStore(rootReducer);

//logging state through getstate() method.
console.log("Initial State...",store.getState());

//subscribing to the store
const unsubscribe = store.subscribe(() => console.log("updated state....",store.getState()))

//dispatching the actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(5));
store.dispatch(orderIC());
store.dispatch(orderIC());
store.dispatch(restockIC(2))

//unscribing to the store
unsubscribe();