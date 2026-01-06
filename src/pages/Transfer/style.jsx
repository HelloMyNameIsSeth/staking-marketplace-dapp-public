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
    textAlign: "center",
    marginTop: "1rem",
  },
  cardContainer: {
    border: "3px solid #A031F7",
    borderRadius: "10px",
    padding: "2rem",
    width: "100%",
    margin: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      margin: "0.5rem 0",
    },
  },
  cardSubtxt: {
    marginBottom: "14px!important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px!important",
      fontSize: "16px!important",
    },
  },
  container: {
    padding: "2rem 1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0% 3% 3% 3%",
    },
  },
  transferContainer: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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
  subContain: {
    paddingLeft: "16px",
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
  title: {
    textTransform: "uppercase",
    fontSize: "134px!important",
    color: "#A031F7",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  primaryText: {
    color: "#A031F7",
    marginLeft: "0.2rem",
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
  comfirmContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "1rem",
  },
}));
