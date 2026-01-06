import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  error: false,
  productsList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.productsList = payload;
    },
    updateItem: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      // add item to the list or update item inside the list
      state.productsList = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, updateItem, setError } =
  productsSlice.actions;

export const productsSelector = (state) => state.productsList;

const { reducer } = productsSlice;
export default reducer;

export const fetchProductsList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("findAllProducts")
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

export const fetchProduct = (productID) => {
  return new Promise((resolve, reject) => {
    http
      .get("findOneProduct/" + productID)
      .then((response) => {
        console.log({ data: response.data.document });
        resolve(response.data.document);
      })
      .catch((error) => {
        reject();
      });
  });
};

export const createProduct = ({
  productID,
  productName,
  url,
  category,
  quantity,
  active,
  price,
  requireShippingInfos,
  currency,
  image,
  raffleName,
  numberOfWinners,
  creationDate,
  startTime,
  endTime,
  description,
  discountAmount,
}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let params = {
        productID,
        productName,
        url,
        category,
        quantity,
        active: Number(active),
        // requireShippingInfos: Number(requireShippingInfos),
        price,
        currency,
        image,
        description,
        discountAmount,
      };
      let endpoint = `/createProduct`;
      if (category === "raffle tickets") {
        params = {
          productID,
          productName,
          category,
          active: Number(active),
          // requireShippingInfos: Number(requireShippingInfos),
          price,
          quantity,
          currency,
          image,
          raffleName,
          numberOfWinners: Number(numberOfWinners),
          creationDate,
          startTime,
          description,
          endTime,
        };
        endpoint = "/createRaffle";
      }
      http
        .get(endpoint, {
          params,
        })
        .then((response) => {
          toast.success("product created successfully", {
            position: "bottom-center",
            autoClose: 2000,
            theme: "dark",
          });
          dispatch(fetchProductsList());
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

export const deleteProduct = (productID) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get(`/deleteProduct/${productID}`)
        .then((response) => {
          toast.success("product deleted successfully", {
            position: "bottom-center",
            autoClose: 2000,
            theme: "dark",
          });
          dispatch(fetchProductsList());
          resolve(productID);
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

export const updateProduct = ({
  productID,
  productName,
  url,
  quantity,
  requireShippingInfos,
  active,
  price,
  currency,
  image,
  category,
  raffleName,
  numberOfWinners,
  startTime,
  endTime,
  description,
  discountAmount,
}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let params = {
        productID,
        productName,
        url,
        category,
        quantity,
        active: Number(active),
        // requireShippingInfos: Number(requireShippingInfos),
        price,
        currency,
        image,
        discountAmount,
        description,
      };
      if (category === "raffle tickets") {
        params = {
          productID,
          productName,
          category,
          quantity,
          active: Number(active),
          // requireShippingInfos: Number(requireShippingInfos),
          price,
          currency,
          image,
          raffleName,
          numberOfWinners: Number(numberOfWinners),
          description,
          startTime,
          endTime,
        };
      }

      http
        .get(`/UpdateProduct`, {
          params: params,
        })
        .then((response) => {
          toast.success("product updated successfully", {
            position: "bottom-center",
            autoClose: 2000,
            theme: "dark",
          });
          dispatch(fetchProductsList());
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
