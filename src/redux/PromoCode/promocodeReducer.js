import { APPLY, INPUT, PROMO, CLEAR } from "./promoCodeTypes";

const initialState = {
  apply: false,
  discount: "test",
  promo: 0,
};

const promoCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY:
      return {
        ...state,
        apply: true,
      };

    case INPUT:
      return {
        ...state,
        discount: action.payload,
      };

    case PROMO:
      return {
        ...state,
        promo: action.payload,
      };

    case CLEAR:
      return {
        ...state,
        discount: "",
      };

    default:
      return state;
  }
};

export default promoCodeReducer;
