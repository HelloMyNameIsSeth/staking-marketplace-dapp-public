import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainTitle: {
    textTransform: "uppercase",
    fontSize: "46px !important",
    marginBottom: "2%!important",
  },
  describe: {
    lineHeight: "180%",
    textAlign: "center",
    letterSpacing: "0.05em",
    textTransform: "capitalize",
    fontFamily: "Roboto-Regular !important",
    marginBottom: "2%!important",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "134px!important",
    color: "#A031F7",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  titletxt: {
    textTransform: "uppercase",
    paddingBottom: "24px",
  },
  subtxt: {
    lineHeight: "180%",
    letterSpacing: "0.05em",
    textTransform: "capitalize",
    fontFamily: "Roboto-Regular !important",
  },
  container: {
    padding: "5%",
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    padding: "2% 6%",
    [theme.breakpoints.down("lg")]: {
      padding: "2% 2%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6% 16%",
      alignItems: "center !important",
    },
  },
  subContain: {
    paddingLeft: "16px",
  },
  subcontainer: {
    padding: "0% 15%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0% 5%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0% 0%",
    },
  },
}));
