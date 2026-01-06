import { configureStore } from "@reduxjs/toolkit";
import {
  nftCollectionReducer,
  cartReducer,
  userReducer,
  ordersReducer,
  productsReducer,
  rafflesReducer,
} from "@/slices";
// ***************************************************

const reducer = {
  nftList: nftCollectionReducer,
  cart: cartReducer,
  user: userReducer,
  ordersList: ordersReducer,
  productsList: productsReducer,
  rafflesList: rafflesReducer,
};

// ***************************************************

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
