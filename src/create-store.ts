import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import reducers from "./reducers";

// @ts-ignore
const initialState = typeof window !== "undefined" ? window.__REDUX_STATE__ : {}

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))
}