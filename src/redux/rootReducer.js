import { combineReducers } from "redux";
import subtotalReducer from "./Subtotal/subtotalReducers";
import promoCodeReducer from "./PromoCode/promocodeReducer";

export default combineReducers({
  subtotal: subtotalReducer,
  promoCode: promoCodeReducer
});
