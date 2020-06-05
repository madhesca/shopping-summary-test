import { APPLY, INPUT, PROMO, CLEAR } from "./promoCodeTypes";

export const apply = () => ({
  type: APPLY,
});

// export const promo = here => {
//   const total = here * 0.9;
//   return total;
// };

// export const clickHandler = (total) => {
//   const grandTotal = total * 0.09;
//   console.log(grandTotal);
//   return (dispatch) => {
//     dispatch(apply());
//   };
// };

export const clear = () => ({
  type: CLEAR,
});

export const promoTotal = (amount) => ({
  type: PROMO,
  payload: amount,
});

export const clickHandler = (total) => {
  const grandTotal = total * 0.9;

  return (dispatch) => {
    dispatch(apply());
    dispatch(promoTotal(grandTotal));
    dispatch(clear());
  };
};

export const changeHandler = (input) => ({
  type: INPUT,
  payload: input,
});
