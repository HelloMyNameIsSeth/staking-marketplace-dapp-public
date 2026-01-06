import { makeStyles } from "@mui/styles";

// ************************************************

export default makeStyles((theme) => ({
  container: {
    padding: "3% 6% 3% 3%",
    [theme.breakpoints.down("md")]: {
      padding: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0% 3% 3% 3%",
    },
  },
  itemCon: {
    [theme.breakpoints.down("sm")]: {
      margin: "3% 0%!important",
    },
  },
  deleteBtn: {
    fontSize: "16px!important",
    padding: "0.5rem 1rem !important",
    transform:"translateX(10px)",
    justifyContent: "end!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px!important",
    },
  },
  cartImg: {
    width: "80%",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  addremove: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#202221",
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    height: "32px",
  },
  title: {
    textTransform: "uppercase",
  },
  titleRow: {
    textTransform: "uppercase",
    display:"flex",
    alignItems:"center",
    marginBottom:"2rem !important"
  },
  itemContainer: {
    background: "#191919",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    margin: "0px 0px 12px !important",
    paddingBottom: "12px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "4px",
    },
  },
  priceContainer: {
    background: "#191919",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    margin: "32px 0px",
    padding: "32px 0px 0px",
  },
  valueRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 32px 32px",
  },
  btn: {
    width: "100%",
    fontSize: "26px!important",
  },
  totalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "26px 32px",
    borderTop: "2px solid white",
    background:
      "radial-gradient(159.04% 159.04% at 50% 14.36%, #311943 0%, rgba(49, 25, 67, 0) 100%)",
  },
}));
