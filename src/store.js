import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../src/reducers/index"
import logger from 'redux-logger'

// Default Data
import {products} from './products'


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;



const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger)
);

const store = createStore(rootReducer,enhancer )

console.log(store)

export default store;