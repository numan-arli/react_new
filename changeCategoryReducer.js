import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function changeCategoryReducer(state=initialState.currentCategory, action1){
    switch (action1.type) {

        case actionTypes.CHANGE_CATEGORY:

        debugger;
            return action1.payload;
        default:
    //    debugger;
            return state;
    }
}