import initialState from "./initialState"
import * as actionTypes from "../actions/actionTypes"

export default function productListReducer(state=initialState.products, action1){
    switch(action1.type) {

        case actionTypes.GET_PRODUCTS_SUCCESS:
        debugger;
           return action1.payload

        default :
           return state;
    }
}