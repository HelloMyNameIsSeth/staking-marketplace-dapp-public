import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  img: {
    border: "2px solid #FFFFFF",
    borderRadius: "8px",
    width: "100%",
    padding: "16%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  title: {
    margin: "0px 14px !important",
    textTransform: "uppercase",
    color: "#fcfcfc!important",
  },
}));
