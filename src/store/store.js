import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categorySlice";
import productsReducer from "./reducers/productSlice";
import filterReducer from "./reducers/filterSlice";
import cartReducer from "./reducers/cartSlice";

const mainReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cartReducer,
  filterReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
