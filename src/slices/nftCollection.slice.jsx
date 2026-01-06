import { createSlice } from "@reduxjs/toolkit";
import http from "@/config/http-common";
const initialState = {
  loading: true,
  error: false,
  nftList: [],
};

const stakedNftSlice = createSlice({
  name: "stakedNft",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.nftList = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setError } = stakedNftSlice.actions;

export const stakedNftSelector = (state) => state.nftList;

const { reducer } = stakedNftSlice;
export default reducer;

export const fetchNftList = (nftdata) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      http
        .get("findnft?id=[" + nftdata + "]")
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
