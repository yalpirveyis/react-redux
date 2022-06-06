import * as amountActionTypes from "../../actions/types/amountActionTypes";
import { initialState } from "./initialState";

const amountReducer = (state = initialState.amount, action) => {
  switch (action.type) {
    case amountActionTypes.AMOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default amountReducer;
