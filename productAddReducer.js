import initialState from "./initialState"
import * as actionTypes from "../actions/actionTypes"

export default function productAddReducer(state=initialState.product, action1){
    switch(action1.type) {
        case actionTypes.CREATE_PRODUCT_SUCCESS:
           debugger;
           return action1.payload
         case actionTypes.UPDATE_PRODUCT_SUCCESS:
            debugger;
             return action1.payload
         default :
           return state;
    }
}