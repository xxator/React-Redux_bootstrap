import {ADD_TO_CART,DELETE_FROM_CART} from './../actions/types';

const initialState = {
    cart : []
}

let temp;

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            console.log('add to cart reducer caller');
            temp = state.cart;
            temp.push(action.payload);
            return {
                ...state,
                cart: temp
            }
        case DELETE_FROM_CART:
            console.log('delete from cart reducer called');
            temp = state.cart.filter((item)=>{return(item.id!==action.payload);});
            return {
                ...state,
                cart: temp
            }
        default:
            return state;
    }
}