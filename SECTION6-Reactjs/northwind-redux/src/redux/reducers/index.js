import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer"

const rootReducer = combineReducers({
    changeCategoryReducer
    //same as
    //changeCategoryReducer: changeCategoryReducer
});

export default rootReducer