import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { toast } from "react-toastify";
import { SessionStorageService } from "@/services";
import { login } from "@/slices/user.slice";

const initialState = {
  loading: true,
  error: false,
  rafflesList: [],
  rafflesTickets: [],
};

const rafflesSlice = createSlice({
  name: "raffles",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.rafflesList = payload;
    },
    setRaffleTickets: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.rafflesTickets = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setRaffleTickets, setError } =
  rafflesSlice.actions;

export const rafflesSelector = (state) => state.rafflesList;
export const rafflesTicketsSelector = (state) => state.rafflesTickets;

const { reducer } = rafflesSlice;
export default reducer;

export const fetchRafflesList = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("findAllRaffleOrder")
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

export const fetchRaffles = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("FindAllRaffles")
        .then((response) => {
          dispatch(setRaffleTickets(response.data.documents));
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

export const drawRaffle = (raffleId) => {
  return new Promise((resolve, reject) => {
    http
      .get("drawRaffle/" + raffleId)
      .then((response) => {
        resolve();
      })
      .catch((error) => {
        reject();
      });
  });
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
          let auth = SessionStorageService.getMetamaskSignature();
          console.log({ auth });
          dispatch(fetchRafflesList());
          dispatch(login(auth.address));
          resolve(response.data.document);
        })
        .catch((error) => {
          if (error) {
            toast.error(error.response?.data?.message, {
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
