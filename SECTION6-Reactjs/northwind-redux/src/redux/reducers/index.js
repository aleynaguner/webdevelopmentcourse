import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    //same as
    //changeCategoryReducer: changeCategoryReducer
});

export default rootReducer