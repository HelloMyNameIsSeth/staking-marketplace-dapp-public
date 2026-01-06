import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainImg: {
    width: "100%",
  },
  container: {
    marginBottom: "4rem",
    padding: "0% 1% 0% 1%",
    [theme.breakpoints.down("sm")]: {
      padding: "3%",
    },
  },
  listView: {
    width: "100%",
  },
  nftcol: {
    marginTop: "-10px!important",
  },
  bannertxt: {
    position: "absolute",
    bottom: "10%",
    left: "17.5%",
    textTransform: "uppercase",
    fontSize: "46px !important",
    [theme.breakpoints.down("xl")]: {
      left: "24.3%",
    },
    [theme.breakpoints.down("lg")]: {
      left: "25%",
    },
    [theme.breakpoints.down("md")]: {
      left: "2%",
    },
  },
  btn: {
    display: "flex !important",
    justifyContent: "space-between !important",
    margin: "0.5rem !important",
  },
  ticketsBtn: {
    justifyContent: "space-between !important",
    margin: "0.5rem !important",
  },
  titleRow: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
  },
}));
