import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import shopReducer from "./shop/reducer";
import plantReducer from "./plant/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  plant: plantReducer
});

export default rootReducer;
