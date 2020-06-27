import {UPDATE_COST} from './../actions/types';

const initialState = {
    cost: 0
}

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case UPDATE_COST:
            console.log('update cost reducer called');
            return {
                ...state,
                cost: state.cost + action.payload
            }
        default:
            return state;
    }
}