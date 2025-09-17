import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function addToCartReducer(state=initialState.cart, action){
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
        debugger;
            let addedItem = state.find(c=> c.product.productId === action.payload.product.productId)
            if(addedItem) {
            debugger;
                let newState = state.map(cartItem => {
                    if (cartItem.product.productId === action.payload.product.productId){
                    debugger;
                       return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                       }
                        return cartItem;
                })
                  return newState;

            } else {
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CART :
        debugger;
            let newState1 = state.filter(cartItem => cartItem.product.productId !== action.payload.productId)
            return newState1;
        default:
     return state
    }

}

