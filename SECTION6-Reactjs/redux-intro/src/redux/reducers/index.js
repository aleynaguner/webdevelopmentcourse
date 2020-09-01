import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  counterReducer,
  //counterReducer:counterReducer ikiside aynı
});

export default reducers;
