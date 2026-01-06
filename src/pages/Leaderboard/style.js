import { createStyles, makeStyles } from "@mui/styles";
// ************************************************

export default makeStyles((theme) =>
  createStyles({
    firstDiv: {
      background: "#A031F7",
      borderRadius: "8px",
      padding: "12%",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "36px",
        width: "36px",
      },
    },
    selectFirst: {
      background: "#A031F7",
    },
    unselectFirst: {
      background: "#191919",
    },
    middleDiv: {
      marginLeft: "12px!important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px!important",
      },
    },
    lastDiv: {
      marginLeft: "12px!important",
      padding: "12%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px!important",
      },
    },
    num: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px!important",
      },
    },
    mainImg: {
      width: "100%",
    },
    container: {
      border: "1px solid #A031F7",
      background:
        "radial-gradient(117.86% 117.86% at 50.07% 50%, #331947 0%, rgba(51, 25, 71, 0) 100%)",
      borderRadius: "8px",
    },
    select: {
      background:
        "radial-gradient(117.86% 117.86% at 50.07% 50%, #331947 0%, rgba(51, 25, 71, 0) 100%)",
    },
    unselect: {
      background: "#191919",
    },
    container1: {
      border: "1px solid #A031F7",
      borderRadius: "8px",
    },
    listView: {
      position: "absolute",
      top: "32vh",
      width: "12%",
    },
    mainContainer: {
      background: "#191919",
      border: "2px solid #FFFFFF",
      borderRadius: "12px",
      padding: "16px",
      margin: "3% !important",
      [theme.breakpoints.down("sm")]: {
        padding: "6px",
      },
    },
  })
);
