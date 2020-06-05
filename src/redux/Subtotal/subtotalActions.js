import { TAXES, TOTAL, PROMO } from "./subtotalTypes";
export const taxes = () => ({
  type: TAXES,
});

export const total = () => ({
  type: TOTAL,
});

export const promo = (grandTotal) => ({
  type: PROMO,
  payload: grandTotal,
});
