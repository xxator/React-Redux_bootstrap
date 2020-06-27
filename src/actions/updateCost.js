import { UPDATE_COST } from './types';

export const updateCost = (change) => (dispatch) => {
    console.log(`updating cost by ${change}`);
    dispatch({
        type: UPDATE_COST,
        payload: change
    });
}