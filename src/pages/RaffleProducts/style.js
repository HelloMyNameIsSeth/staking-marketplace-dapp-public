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
    left: "1rem",
    textTransform: "uppercase",
    fontSize: "46px !important",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  buttonContainer: {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  createButton: {
    position: "absolute",
    bottom: "10%",
    right: "1rem",
  },
  createButtonSmall: {
    textAlign: "right",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  btn: {
    display: "flex !important",
    justifyContent: "space-between !important",
  },
  titleRow: {
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
  },
}));
