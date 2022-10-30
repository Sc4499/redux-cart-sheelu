import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardslice";
import productReducer from "./fetchprod"

const Store = configureStore({
    reducer:{
        cart : cartReducer,
        product: productReducer
    },
})

export default Store;