import * as actionTypes from '../constants/ActionTypes';
const initialState = {
    count: 0,
};
export default function countReducer(state = initialState , action) {
    switch (action.type) {
        case actionTypes.COUNTER_CHANGE:
            return Object.assign({}, state, {
                count: action.data
            });
        default:
            return state;
    }
}