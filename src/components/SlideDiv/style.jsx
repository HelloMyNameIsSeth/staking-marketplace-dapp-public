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
  container: {
    padding: "3% 6% 3% 3%",
  },
  mainDiv: {
    padding: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 8px 8px 8px",
    },
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
  txt: {
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px!important",
    },
  },
}));
