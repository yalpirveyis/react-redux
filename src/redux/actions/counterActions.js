import * as counterActionTypes from "./types/counterActionTypes";

export const increaseCounter = () => ({
  type: counterActionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: counterActionTypes.DECREASE_COUNTER,
  payload: 1,
});
