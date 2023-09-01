import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import shopReducer from "../Features/Shop/shopSlice";
import cartReducer from "../Features/Cart/cartSlice";
import userReducer from "../Features/User/userSlice";
import ordersReducer from "../Features/Orders/ordersSlice";
import { shopApi } from "../Services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../Services/authServices";


export default configureStore (
    {
        reducer: {
            shopReducer,
            cartReducer,
            userReducer,
            ordersReducer,
            [shopApi.reducerPath]: shopApi.reducer,
            [authApi.reducerPath]: authApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
    }
    
)
setupListeners(configureStore.dispatch)

