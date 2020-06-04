import { TAXES } from "./subtotalTypes";

const initialState = {
  price: 99.99,
  savings: -5.5,
  taxes: 2.2,
  total: 110,
};

const subtotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAXES:
      return {
        ...state,
        taxes: (state.price + state.savings) * 0.12,
      };
    default:
      return state;
  }
};

export default subtotalReducer;
