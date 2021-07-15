import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import shopReducer from "./shop/reducer";
import plantReducer from "./plant/reducer";
import eventReducer from "./event/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  plant: plantReducer,
  event: eventReducer
});

export default rootReducer;
