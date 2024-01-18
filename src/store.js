import {
    configureStore
} from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";

const Store = configureStore({

    reducer: {
        cart: cartSlice
    }
})

export default Store