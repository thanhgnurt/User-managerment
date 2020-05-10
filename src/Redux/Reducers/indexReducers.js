import { combineReducers } from "redux";
import userReducer from './userReducer';
import editReducer from './editReducer';
import validation from './validation';
const myReducer = combineReducers({
   userReducer,
   editReducer,
   validation,
})
export default myReducer