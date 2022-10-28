import { ADD_CART, REMOVE_CART } from "../actions/types";


export const cartReducer = (state={},action)=> {
    cartItems:JSON.parse(localStorage.getItem('cartitems')) || [];
switch (action.type){
    case ADD_CART:
        return {cartItems:action.data.cartItems}
    
    case REMOVE_CART:
        return {cartItems:action.data.cartItems}
    
    default:
        return state
}
}