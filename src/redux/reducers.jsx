import { combineReducers } from 'redux';
import valuesReducer from './valuesReducer';
import turnReducer from './turnReducer';
import movesReducer from './movesReducer';


const GlobalState = combineReducers({
    values: valuesReducer,
    turn: turnReducer,
    moves: movesReducer
});

export default GlobalState;