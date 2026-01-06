import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  iconbtn: {
    padding: "0px 0px 0px 12px!important",
  },
  subtxt: {
    fontFamily: "Roboto-Regular !important",
    lineHeight: "1.5",
  },
  mainImg: {
    width: "100%",
  },
  container: {
    padding: "1% 5% 0% 1%",
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
  },
  img: {
    width: "100%",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    marginBottom: "16px!important",
  },
  listView: {
    position: "absolute",
    top: "32vh",
    width: "18%",
    [theme.breakpoints.down("xl")]: {
      top: "26vh",
    },
    [theme.breakpoints.down("lg")]: {
      width: "29%",
      top: "24vh",
    },
    [theme.breakpoints.down("md")]: {
      width: "29%",
      top: "20vh",
    },
  },
  backBtn: {
    position: "absolute!important",
    top: "12px",
    left: "16px",
  },
  imgcontainer: {
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    width: "100%",
    marginBottom: "16px!important",
    height: "32vh",
    backgroundPosition: "center!important",
    backgroundRepeat: "no-repeat!important",
    backgroundSize: "cover!important",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  imgcontainer1: {
    background: "#A031F7",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    width: "100%",
    marginBottom: "16px!important",
  },
  buyContainer: {
    background: "#191919",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    padding: "16px!important",
    display: "flex",
    alignItems: "center",
    margin: "0px 16px 16px 0px!important",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 6px 12px 0px!important",
      padding: "12px!important",
    },
  },
  title: {
    textTransform: "uppercase !important",
    marginBottom: "10% !important",
  },
}));
