// To create a redux store, need to install: npm install redux react-redux, redux-thunk under frontend folder
// install redux extension on google chrome as a dev tool.
//src/store.js


import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
//import data from './data';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;
