import {combineReducers} from 'redux';
import counts from './countsReducer';
const naaguReducer = combineReducers({
  counts,
});

export default naaguReducer;
