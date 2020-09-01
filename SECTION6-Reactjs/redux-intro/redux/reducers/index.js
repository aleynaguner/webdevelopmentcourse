import { conbineReducer } from "redux";
import counterReducer from "./counterReducer";

const reducers = conbineReducer({
  counterReducer,
  //counterReducer:counterReducer ikiside aynı
});

export default reducers;
