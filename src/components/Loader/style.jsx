import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  tabbtn1: {
    borderTopLeftRadius: "22px !important",
    borderBottomLeftRadius: "22px !important",

    fontSize: "24px !important",
    padding: "6px 64px !important",
    height: "42px",
    [theme.breakpoints.down("md")]: {
      height: "32px",
      fontSize: "12px !important",
    },
  },
  eventContainer: {
    position: "relative",
  },
  selected: {
    borderLeft: "3px solid #ff5f1f !important",
    borderRight: "3px solid #ff5f1f !important",
  },
  unselected: {
    backgroundColor: "#FFFFFF !important",
    color: "#13181c !important",
  },
  tabbtn2: {
    borderTopRightRadius: "22px !important",
    borderBottomRightRadius: "22px !important",
    fontSize: "24px !important",
    padding: "6px 64px !important",
    height: "42px",
    [theme.breakpoints.down("md")]: {
      height: "32px",
      fontSize: "12px !important",
    },
  },
  container: {
    textAlign: "center",
    padding: "2% 26%",
    [theme.breakpoints.down("lg")]: {
      padding: "2% 18%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2% 24%",
    },
  },
  btngroup: {
    padding: "4% 0%",
  },
  title: {
    fontFamily: "BurbankBigCondensed-Bold !important",
    padding: "2%",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px !important",
      padding: "0.5%",
    },
  },
  subcontainer: {
    padding: "10px",
    borderRadius: "15px",
    position: "relative",
    color: "white",
  },
  closePaper: {
    borderRadius: "15px !important",
    boxShadow: "none !important",
    backgroundColor: "#14181c00 !important",
    padding: "4px",
    position: "relative !important",
    transition: "none!important",
    cursor: "pointer !important",
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "white",
    transform: "translate(-50%, -50%)",
    textTransform: "capitalize",
    fontFamily: "BurbankBigCondensed-Bold !important",
    fontSize: "30px!important",
  },
  img: {
    height: "26vh !important",
    objectFit: "cover",
    borderRadius: "22px !important",
    border: "2px solid white",
    [theme.breakpoints.down("lg")]: {
      height: "22vh !important",
    },
  },
  imgselected: {
    border: "3px solid #ff5f1f !important",
  },

  bottom: {
    bottom: "2.5%",
    position: "absolute",
    padding: "24px 10px",
    background:
      "linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 55.37%)",
    filter: "drop-shadow(0px 3.38612px 3.38612px rgba(0, 0, 0, 0.25))",
    backdropFilter: "blur(22.5084px)",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "18px",
    width: "96%",
    borderLeft: "2px solid white",
    borderRight: "2px solid white",
    [theme.breakpoints.down("lg")]: {
      bottom: "3.5%",
      padding: "8px 10px",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "5.5%",
      padding: "7px 32px",
      width: "92%",
    },
  },
  btn: {
    fontSize: "20px !important",
    margin: "8% 2% 0% 2%  !important",
  },
  dialogContent: {
    padding: "12% !important",
    textAlign: "center !important",
    [theme.breakpoints.down("lg")]: {
      padding: "8% !important",
    },
  },
  btn1: {
    fontSize: "20px !important",
    backgroundColor: "rgb(217 217 217 / 10%)!important",
    borderRadius: "30px!important",
    padding: "6px 12px !important",
    margin: "8% 2% !important",
  },
  caption: {
    lineHeight: "0.66",
    color: "rgb(255 255 255 / 60%)",
  },
  slide: {
    padding: "0% 12%",
  },
  subtitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "9px !important",
    },
  },
  price: {
    [theme.breakpoints.down("md")]: {
      fontSize: "9px !important",
    },
  },
  Loader: {
    width: "50%",
  },
}));
