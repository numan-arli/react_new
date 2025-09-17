import initialState from "./initialState"
import * as actionTypes from "../actions/actionTypes"

export default function productDeleteReducer(state = initialState.product, action){
    
    switch(action.type){
        case actionTypes.DELETE_PRODUCTS_SUCCESS :
            debugger;
            return action.payload;
        default :
            return state;
    }
     

}