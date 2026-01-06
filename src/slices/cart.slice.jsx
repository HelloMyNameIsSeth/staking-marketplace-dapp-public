import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { LocalStorageService } from "@/services";
import { fetchOrdersList } from "@/slices/orders.slice";
import { login } from "@/slices/user.slice";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  error: false,
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setError } = itemSlice.actions;

export const itemsSelector = (state) => state.items;

const { reducer } = itemSlice;
export default reducer;

export const fetchItems = (body = "") => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      var prevCarts = JSON.parse(LocalStorageService.getUserLocalCarts())
        ? JSON.parse(LocalStorageService.getUserLocalCarts())
        : [];
      const found = prevCarts.some((el) => el.id === data.id);
      if (!found) {
        data.purchase_quantity = 1;
        prevCarts.push(data);
      } else {
        if (prevCarts.length) {
          for (let i = 0; i < prevCarts.length; i++) {
            if (prevCarts[i].id === data.id) {
              prevCarts[i].purchase_quantity = data.purchase_quantity;
            }
          }
        }
      }
      LocalStorageService.addUserLocalCarts(prevCarts);
    });
  };
};

export const sendOrders = (address, productsID) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Promise.all(
        productsID.map((productID) =>
          http.get(`sendOrder/${address}/${productID}`)
        )
      )
        .then((res) => {
          dispatch(fetchOrdersList(address));
          dispatch(login(address));
          LocalStorageService.clearUserLocalCarts();
          resolve();
        })
        .catch((error) => {
          if (error) {
            reject();
            toast.error(error.response?.data?.message, {
              position: "bottom-center",
              autoClose: 2000,
              theme: "dark",
            });
          }
        });
    });
  };
};

export const sendRaffleOrder = (raffleID, quantity) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get(`sendRaffleOrder/${raffleID}/${quantity}`)
        .then((response) => {
          toast.success("purchase completed", {
            position: "bottom-center",
            autoClose: 2000,
            theme: "dark",
          });
          dispatch(fetchProductsList());
          resolve(response.data.document);
        })
        .catch((error) => {
          if (error) {
            toast.error(error.response?.message, {
              position: "bottom-center",
              autoClose: 2000,
              theme: "dark",
            });
            dispatch(setError());
          }
        });
    });
  };
};
