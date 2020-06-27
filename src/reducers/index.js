import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import costReducer from './costReducer';

export default combineReducers({
    cart: cartReducer,
    cost: costReducer
});