import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainImg: {
    width: "100%",
  },
  container: {
    padding: "0% 1% 0% 1%",
    [theme.breakpoints.down("sm")]: {
      padding: "3%",
    },
  },
  listView: {
    position: "absolute",
    top: "32vh",
    width: "13%",
    [theme.breakpoints.down("xl")]: {
      top: "23vh",
      width: "18%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "22%",
      top: "24vh",
    },
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
  },
  titleRow: {
    textTransform: "uppercase",
    display:"flex",
    alignItems:"center",
  },
}));
