import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainImg: {
    width: "100%",
  },
  bannertxt: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
  },
  maintxt: {
    textTransform: "uppercase",
    padding: "6px 0px",
  },
  infoDiv: {
    background: "#A031F7",
    border: "3px solid #FFFFFF",
    borderRadius: "10px",
    padding: "4%",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },
  subtxt: {
    marginBottom: "14px!important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px!important",
      fontSize: "16px!important",
    },
  },
  container: {
    padding: "0% 6% 3% 3%",
    [theme.breakpoints.down("sm")]: {
      padding: "0% 3% 3% 3%",
    },
  },
  container1: {
    padding: "1% 6% 0% 2%",
    [theme.breakpoints.down("sm")]: {
      padding: "1% 1% 0% 1%",
    },
  },
  txt: {
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px!important",
    },
  },
}));
