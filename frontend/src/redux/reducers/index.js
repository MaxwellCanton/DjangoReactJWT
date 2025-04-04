import { combineReducers } from "redux";
import proyecto from './proyecto';
import cliente from './cliente';

export default combineReducers({
    proyecto,
    cliente,
})