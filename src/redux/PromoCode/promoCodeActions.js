import { APPLY, INPUT } from "./promoCodeTypes";

export const apply = () => ({
  type: APPLY
});

// export const promo = here => {
//   const total = here * 0.9;
//   return total;
// };

export const clickHandler = total => {
  return dispatch => {
    dispatch(apply());
    dispatch(promo(total));
  };
};

export const changeHandler = input => ({
  type: INPUT,
  payload: input
});
