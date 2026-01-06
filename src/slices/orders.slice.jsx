import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  error: false,
  ordersList: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.ordersList = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setError } = ordersSlice.actions;

export const ordersSelector = (state) => state.ordersList;

const { reducer } = ordersSlice;
export default reducer;

export const fetchOrdersList = (address) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("findOrder/" + address)
        .then((response) => {
          dispatch(setItems(response.data.documents));
          resolve(response.data.documents);
        })
        .catch((error) => {
          if (error) {
            dispatch(setError());
          }
        });
    });
  };
};

export const fetchAllOrdersList = (address) => {
  return new Promise((resolve, reject) => {
    http
      .get("findAllOrders")
      .then((response) => {
        console.log({ response });
        resolve(response.data);
      })
      .catch((error) => {
        if (error) {
          reject(error);
        }
      });
  });
};

export const updateOrderStatus = ({ orderId }) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let params = {
        orderId,
        status: "completed",
      };

      http
        .get(`/updateOrder/${orderId}/completed`)
        .then((response) => {
          toast.success("order status updated successfully", {
            position: "bottom-center",
            autoClose: 2000,
            theme: "dark",
          });

          resolve(response.data.document);
        })
        .catch((error) => {
          if (error) {
            toast.error(error.response.data.message, {
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
