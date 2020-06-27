import { ADD_TO_CART } from './types';

export const addToCart = (item) => (dispatch) => {
    console.log(`adding ${item} to cart`);
    dispatch({
        type: ADD_TO_CART,
        payload: item
    });
}