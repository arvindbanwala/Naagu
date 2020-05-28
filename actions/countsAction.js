import * as actionTypes from '../constants/ActionTypes';
export function changeCount(data) {
    return {type: actionTypes.COUNTER_CHANGE, data}
}