import { TAXES, TOTAL } from "./subtotalTypes";

const initialState = {
  price: 100,
  savings: -5.5,
  taxes: 0,
  total: 0
};

const subtotalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAXES:
      return {
        ...state,
        taxes: (state.price + state.savings) * 0.12
      };

    case TOTAL:
      return {
        ...state,
        total: state.price + state.savings + state.taxes
      };

    default:
      return state;
  }
};

export default subtotalReducer;
