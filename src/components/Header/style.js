import { makeStyles } from "@mui/styles";
// ************************************************

export default makeStyles((theme) => ({
  appBar: {
    height: "10vh",
    background: "rgba(32, 34, 33, 0.72) !important",
    backdropFilter: "blur(17.5px) !important",
    justifyContent: "center",
    display: "flex!important",
  },
  menubtn: {
    backgroundColor: "#191919!important",
    borderRadius: "0px 12px 12px 0px!important",
    borderTop: "2px solid #FFFFFF!important",
    borderRight: "2px solid #FFFFFF!important",
    borderBottom: "2px solid #FFFFFF!important",
  },
  mainMenuBtn: {
    background: "#1C1C1C !important",
    border: "1px solid #FFFFFF !important",
    borderRadius: "8px !important",
    width: "32px",
    height: "32px",
    padding: "4px",
  },
  header: {
    position: "absolute!important",
    top: "12px!important",
    left: "0px!important",
    width: "100%!important",
    background: "rgb(32 34 33 / 0%) !important",
    backdropFilter: "blur(0px) !important",
    boxShadow: "none!important",
  },
  leftmenu: {
    position: "absolute!important",
    bottom: "16px!important",
    left: "0px!important",
  },
  toolbar: {
    padding: "0% 4%",
  },
  select: {
    background: "#A031F7",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
  },
  logo: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  logoBtn: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start !important",
    },
  },
  btn: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: "38px",
      padding: "4px 14px",
    },
  },
  listBtn: {
    padding: "10% 12% !important",
  },
  closeBtn: {
    fontSize: "14px !important",
    fontFamily: "BurbankBigCondensed-Bold !important",
    border: "2px solid white !important",
    borderRadius: "8px !important",
    width: "32px",
    height: "32px",
  },
}));
