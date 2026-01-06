import React, { useState } from "react";
import useStyles from "./style";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import main from "@/assets/image/main.svg";
import {
  Button,
  Grid,
  useMediaQuery,
  Typography,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useCountdown } from "@/hooks/useCountdown.js";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { sendRaffleOrder } from "@/slices/raffles.slice";
import { useSelector, useDispatch } from "react-redux";
import { fetchRaffles } from "@/slices/raffles.slice";
import { fetchProduct } from "@/slices/products.slice";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { isAfterToday } from "@/utils/isAfterToday.js";
import { drawRaffle } from "@/slices/raffles.slice";
import { isAdminWallet } from "@/utils/isAdminWallet.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RaffleTicketDetails() {
  const { productId } = useParams();
  const [item, setItem] = useState();
  const classes = useStyles();
  const { state } = useLocation();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const { countDown } = useCountdown({ end: item?.endTime });
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const { rafflesTickets } = useSelector((state) => state.rafflesList);
  const [raffleTicketDetails, setRaffleTicketDetails] = useState();
  const [value, setValue] = React.useState(0);
  const isActive = isAfterToday(item?.endTime) && item?.active === 1;
  console.log({ raffleTicketDetails });
  const isSoldOut = !parseInt(item?.quantity) > 0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (productId) {
      const fetchProductDetails = async () => {
        const productDetails = await fetchProduct(productId);
        setItem(productDetails);
      };
      fetchProductDetails();
    }
  }, [productId]);

  useEffect(() => {
    if (item) {
      dispatch(fetchRaffles());
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      const findRaffleTicketDetails = rafflesTickets.find(
        (c) => c._id === item._id
      );
      if (findRaffleTicketDetails) {
        setRaffleTicketDetails(findRaffleTicketDetails);
      }
    }
  }, [rafflesTickets, item]);

  if (!item) {
    return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <CircularProgress size={"60px"} />
      </div>
    );
  }

  return (
    <div>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}
      >
        <img src={main} className={classes.mainImg} />
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          className={classes.backBtn}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={4} lg={3} md={4}>
          <div className={isMobile ? "" : classes.listView}>
            <img
              src={item.image}
              className={classes.img}
              style={{
                filter: isActive && !isSoldOut ? "none" : "grayscale(100%)",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                padding: "0.25rem 0.5rem",
                background: "rgba(0,0,0,0.5)",
                top: "16px",
                right: "16px",
                borderRadius: "0.5rem",
                backdropFilter: "blur(5px)",
                fontSize: "20px",
              }}
            >
              {isActive && !isSoldOut
                ? countDown
                : isSoldOut
                ? "Sold out"
                : "Ended"}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} lg={9} md={8}>
          <Typography
            variant="h1"
            sx={{ textTransform: "uppercase", margin: "1rem 0" }}
          >
            {item.raffleName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "32px !important",
              fontWeight: "200",
              lineHeight: "1.125rem",
              fontSize: "1.125rem",
              whiteSpace: "pre-line",
              fontFamily: "Roboto-Regular !important",
              opacity: "0.9",
              wordBreak: "break-all",
            }}
          >
            {item.description}
          </Typography>
          <div className={classes.dataContainer}>
            <Typography className={classes.dataText}>
              Ticket price :
              <Typography className={classes.priceContainer}>
                <img
                  style={{}}
                  width={"40px"}
                  height={"40px"}
                  src={
                    "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                  }
                />
                <span style={{ transform: "translateY(4px)" }}>
                  {item.price}
                </span>
              </Typography>
            </Typography>

            <Typography className={classes.dataText}>
              Tickets supply :
              <Typography className={classes.priceContainer}>
                <span>
                  {(item.quantity | 0) === 0 ? "Sold out" : item.quantity}
                </span>
              </Typography>
            </Typography>
            <Typography className={classes.dataText}>
              Raffle winners :
              <Typography className={classes.priceContainer}>
                <span>{item.numberOfWinners}</span>
              </Typography>
            </Typography>
            <Typography className={classes.dataText}>
              Raffle draw :
              <Typography className={classes.priceContainer}>
                <span>after sold out</span>
              </Typography>
            </Typography>
          </div>
          <Grid
            container
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ marginTop: "1rem" }}
          >
            <Grid item xs={8} sm={8} lg={8} md={8} style={{ display: "flex" }}>
              <Button
                variant="contained"
                fullWidth
                className={classes.btn}
                disabled={!isActive || isSoldOut || !user.owner}
                onClick={() => {
                  dispatch(sendRaffleOrder(item._id, counter)).then(() => {
                    navigate("/RaffleEntries");
                  });
                }}
              >
                Buy now
              </Button>
              {isAdminWallet(user) ? (
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.btn}
                  disabled={raffleTicketDetails?.active !== 0}
                  style={{ marginLeft: "1rem" }}
                  onClick={() => {
                    dispatch(drawRaffle(item._id)).then((c) =>
                      window.location.reload()
                    );
                  }}
                >
                  Draw winner
                </Button>
              ) : null}
            </Grid>
            <Grid item xs={4} sm={4} lg={4} md={4}>
              <div className={classes.addremove}>
                <IconButton
                  aria-label="remove"
                  sx={{ padding: "4px 12px" }}
                  disabled={!isActive || isSoldOut || !user.owner}
                  onClick={() => setCounter((prev) => Math.max(1, prev - 1))}
                >
                  <RemoveIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography variant="h5"> {counter}</Typography>
                <IconButton
                  aria-label="add"
                  disabled={!isActive || isSoldOut || !user.owner}
                  sx={{ padding: "4px 12px" }}
                  onClick={() => setCounter((prev) => prev + 1)}
                >
                  <AddIcon sx={{ color: "white" }} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <div className={classes.tabsContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              style={{ marginTop: "1rem" }}
            >
              <Tab
                label={
                  "All entries (" +
                  (raffleTicketDetails?.entries?.length || 0) +
                  ")"
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  "Raffle winners (" +
                  (raffleTicketDetails?.winners?.length || 0) +
                  ")"
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  "My entries (" +
                  (raffleTicketDetails?.entries?.filter((c) => c === user.owner)
                    .length || 0) +
                  ")"
                }
                {...a11yProps(1)}
              />
            </Tabs>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
              {raffleTicketDetails && raffleTicketDetails.entries.length ? (
                raffleTicketDetails.entries.map((c, index) => (
                  <Typography
                    key={c + index}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {c}
                  </Typography>
                ))
              ) : (
                <Typography>No entries.</Typography>
              )}
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPanel}>
              {raffleTicketDetails && raffleTicketDetails.winners.length ? (
                raffleTicketDetails.winners.map((c, index) => (
                  <Typography
                    key={c + index}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {c}
                  </Typography>
                ))
              ) : (
                <Typography>No winners yet.</Typography>
              )}
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabPanel}>
              {raffleTicketDetails && raffleTicketDetails.entries.length ? (
                raffleTicketDetails.entries
                  .filter((c) => c === user.owner)
                  .map((c, index) => (
                    <Typography
                      key={c + index}
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {c}
                    </Typography>
                  ))
              ) : (
                <Typography>You have no entries.</Typography>
              )}
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
