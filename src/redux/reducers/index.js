import { combineReducers } from "redux";
import amountReducer from "./amountReducer/amountReducer";
import counterReducer from "./counterReducer/counterReducer";

const rootReducer = combineReducers({
  counterReducer,
  amountReducer,
});

export default rootReducer;
