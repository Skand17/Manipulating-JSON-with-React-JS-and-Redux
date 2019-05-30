import { DEFAULT_JSON, UPDATE_VALUES } from './type'
 

export function getProducts(){
    return {
        type : DEFAULT_JSON
    }
}

export function updateDetails(data){
    console.log(data)
    return {
        type : UPDATE_VALUES,
        payload : data
    }
}