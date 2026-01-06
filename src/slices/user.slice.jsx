import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
import { fetchNftList } from "@/slices/nftCollection.slice";

const initialState = {
  userLoading: true,
  error: false,
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.userLoading = true;
    },
    setUser: (state, { payload }) => {
      state.userLoading = false;
      state.error = false;
      state.user = payload;
    },
    logoutUser: (state, { payload }) => {
      state.userLoading = false;
      state.error = false;
      state.user = [];
    },
    setError: (state, { payload }) => {
      state.userLoading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, setUser, setError, logoutUser } = userSlice.actions;

// export const userSelector = (state) => state.user;

const { reducer } = userSlice;
export default reducer;

export const login = (address) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      console.log("address", address);
      http
        .get("finduser/" + address)
        .then((response) => {
          dispatch(setUser(response.data.document));
          console.log(response.data.document);
          if (response.data.document != null) {
            dispatch(fetchNftList(response.data.document.nft_ids));
          } else {
            dispatch(setError("No Staked"));
          }
          resolve(response.data.document);
        })
        .catch((error) => {
          console.log({ error });
          if (error) {
            dispatch(setError());
          }
        });
    });
  };
};

export const logout = () => {
  return (dispatch) => dispatch(logoutUser());
};

export const transferCoinTo = (toWallet, amount, address) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("updateCoins/" + toWallet + "/" + amount)
        .then((response) => {
          dispatch(login(address));
          resolve(response.data.document);
        })
        .catch((error) => {
          if (error) {
            reject(error);
          }
        });
    });
  };
};
