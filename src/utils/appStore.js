import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

// configureStore will give us our store of our React application
const appStore = configureStore({
    // this is app big reducer which contains different smaller reducers from different slices
    reducer: {
        cart: cartReducer
    }
});

export default appStore;