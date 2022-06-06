import * as counterActionTypes from "../../actions/types/counterActionTypes";
import { initialState } from "./initialState";

const counterReducer = (state = initialState.count, action) => {
  let newState;
  switch (action.type) {
    case counterActionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case counterActionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    default:
      return state;
  }
};

export default counterReducer;
