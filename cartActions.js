import * as actionTypes from "./actionTypes"


export function addToCart(cartItem) {
    debugger;
    return { type: actionTypes.ADD_TO_CART, payload:cartItem }
}

export function removeFromCart(product) {
    debugger;
    return {type: actionTypes.REMOVE_FROM_CART, payload: product}
}