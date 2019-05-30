import {DEFAULT_JSON} from '../actions/type'
import {products} from '../products'

const initialState = {
    product_listing : products
}

export default function(state = initialState, action){
    switch(action.type){
        case DEFAULT_JSON : 
        return {
            ...state
        }
        default :
        return {
            ...state
        }
        
    }
}