import initialState from "./initialState"
import * as actionTypes from "../actions/actionTypes"

export default function categoryListReducer(state=initialState.categories, action){
    debugger;
    switch(action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
           return action.payloaddd
        default :
           return state;
    }
}