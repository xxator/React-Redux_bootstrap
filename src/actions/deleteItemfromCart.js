import {DELETE_FROM_CART} from './types';

export const deleteItemFromCart = (item) => (dispatch) => {
    console.log(`deleting ${item.name} from cart`);
    dispatch({
        type: DELETE_FROM_CART,
        payload: item.id
    });
}