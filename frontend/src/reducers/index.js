import { combineReducers } from "redux";
import admin_reducer from "./admin_reducer";
import auth_reducer from "./auth_reducer";
import userReducer from './user_reducer';
import productReducer from './product_reducer';
import categoryReducer from './category_reducer';
import orderReducer from './order_reducer';
import cartReducer from './user_cart_reducer';
import userProductReducer from './user_product_reducer';
import userOrderAddressReducer from './user(order_address)_reducer'
import handleCart from "./handleCart_reducer";

const rootReducer = combineReducers({
    admin:admin_reducer,
    auth : auth_reducer,
    user : userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    userProduct: userProductReducer,
    userOrderAddress: userOrderAddressReducer,
    handleCart
    // page: pageReducer
})

export default rootReducer