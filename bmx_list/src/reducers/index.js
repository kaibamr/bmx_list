import { combineReducers } from 'redux';
import tricksReducer from './tricksReducer';
import currentReducer from './currentReducer';

export default combineReducers({
    tricks: tricksReducer,
    current: currentReducer
});