import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  iconbtn: {
    padding: "0px 0px 0px 12px!important",
  },
  subtxt: {
    fontFamily: "Roboto-Regular !important",
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
  listView: {
    position: "absolute",
    top: "36%",
    width: "18%",
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
  buyContainer1: {
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
  }, money: {
    width: "24px",
    marginRight: "4px",
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
      margin: "0px 0px 12px 0px!important",
      padding: "12px!important",
    },
  },
  title: {
    textTransform: "uppercase !important",
    marginBottom: "10% !important",
  },
}));
