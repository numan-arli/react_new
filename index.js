import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import productAddReducer from "./productListReducer"


 const rootReducer = combineReducers(
    { changeCategoryReducer: changeCategoryReducer,
      categoryListReducer: categoryListReducer,
      productListReducer: productListReducer,
      cartReducer:cartReducer,
      productAddReducer:productAddReducer}
)

export default rootReducer;