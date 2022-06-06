import * as amountActionTypes from "./types/amountActionTypes";

export const changeAmount = (value) => ({
  type: amountActionTypes.AMOUNT,
  payload: value,
});
