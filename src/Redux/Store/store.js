import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../Slice/categorySlice';
import foodReducer from '../Slice/foodListSlice';

const store = configureStore({
    reducer:{
        category:categoryReducer,
        food:foodReducer
    }
})

export default store;