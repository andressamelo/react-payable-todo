import { combineReducers } from 'redux';
import bills from './billReducer';

export default combineReducers({
    billReducer: bills
});