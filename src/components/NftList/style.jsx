import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  mainContainer: {
    // padding: "16px 16px 16px 0px",
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },

  btn: {
    fontSize: "14px !important",
    padding: "4px 12px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
  },
  closePaper: {
    borderRadius: "20px",
    backgroundColor: "#191919",
    position: "relative",
  },
  raffleClosePaper: {
    padding: "1rem",
    borderRadius: "20px",
    border: "solid 1px #191919",
    backgroundColor: "rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
    position: "relative",
  },
  img: {
    borderRadius: "10px 10px 0px 0px",
    objectFit: "contain",
    width: "100%",
  },
  ticketImg: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    height: "350px",
    border: "solid 1px #191919",
    marginBottom: "0.5rem",
  },
  detail: { padding: "10% 5%" },
  subtitle: {
    fontFamily: "Roboto-Regular !important",
    color: "#C4C4C4",
  },
  check: {
    position: "absolute !important",
    top: "0px",
    right: "0px",
  },
  addremove: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#202221",
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    height: "32px",
    marginLeft: "8px",
  },
}));
