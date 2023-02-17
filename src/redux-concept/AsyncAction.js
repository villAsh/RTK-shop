//In this i am learning asynchronous actions by fetching users data from api
//initial state
/* initial_state = {
    loading : true,
    data : [],
    error : ""
} */

//ACTIONS
/*we will have 3 action where 2nd and 3rd are based on 1st action
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCEEDED,
    FETCH_USER_FAILED
*/

//REDUCERS
/*
    *if it is in the request state
    then we will set loading : true,

    *if it is succeeded we will set
    data : users[] and laoding : false,

    *if it is failed then we will set
    loading : false and error : error
*/

const redux = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

const initial_state = {
	loading: true,
	data: [],
	error: ''
};

//actions
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

//action creators
const fetchUserRequested = () => {
	return {
		type: FETCH_USER_REQUEST
	};
};

const fetchUserSucceeded = (users) => {
	return {
		type: FETCH_USER_SUCCEEDED,
		payload: users
	};
};

const fetchUserFailed = (error) => {
	return {
		type: FETCH_USER_FAILED,
		payload: error
	};
};

//reducer
const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: true
			};
		case FETCH_USER_SUCCEEDED:
			return {
				...state,
				data: action.payload,
				loading: false
			};
		case FETCH_USER_FAILED:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

const fetchUsers = () => {
	return function(dispatch) {
        dispatch(fetchUserRequested);
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				const users = res.data.map((user) => user.id);
                dispatch(fetchUserSucceeded(users))
            })
			.catch((error) => {
                dispatch(fetchUserFailed(error.message))
            });
	};
};

//store
const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.getState())

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());
