import { APPLY, INPUT } from "./promoCodeTypes";

const initialState = {
  apply: false,
  discount: "test"
};

const promoCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY:
      return {
        ...state,
        apply: true
      };

    case INPUT:
      return {
        ...state,
        discount: action.payload
      };
    default:
      return state;
  }
};

export default promoCodeReducer;
