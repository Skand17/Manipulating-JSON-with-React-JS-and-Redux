import { UPDATE_VALUES}  from '../actions/type'


const initialState = {
    product_listing_update :  ''
}

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_VALUES : 
        return {
            product_listing_update : action.payload
        }
        default :
        return {
            ...state
        }
        
    }
}