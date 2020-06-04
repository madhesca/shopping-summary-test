import { combineReducers } from "redux";
import subtotalReducer from "./Subtotal/subtotalReducers";

export default combineReducers({
  subtotal: subtotalReducer,
});
