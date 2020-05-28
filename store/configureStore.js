import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import naaguReducer from '../reducers/index';


export default function configureNaaguStore(initialState) {
    const store = createStore(
        naaguReducer,
        applyMiddleware( thunkMiddleware ),
        initialState
    );
    return store;
}