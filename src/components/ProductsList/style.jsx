import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainContainer: {
    // padding: "16px 16px 16px 0px",
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },

  btn: {
    fontSize: "14px !important",
    padding: "4px 12px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
  },
  closePaper: {
    borderRadius: "20px",
    backgroundColor: "#191919",
    position: "relative",
  },
  img: {
    borderRadius: "10px 10px 0px 0px",
    objectFit: "contain",
    width: "100%",
  },
  detail: { padding: "10% 5%" },
  subtitle: {
    fontFamily: "Roboto-Regular !important",
    color: "#C4C4C4",
  },
  check: {
    position: "absolute !important",
    top: "0px",
    right: "0px",
  },
}));
