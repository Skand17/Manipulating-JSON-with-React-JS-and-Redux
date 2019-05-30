import { combineReducers } from 'redux';

// Reducers
import defaultProduct from './DefaultProducts'
import updatedValues from './UpdateReducer'

export default combineReducers({
    defaultProduct,
    updatedValues
})