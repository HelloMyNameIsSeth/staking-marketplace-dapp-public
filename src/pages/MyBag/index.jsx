import React, { useState } from "react";
import useStyles from "./style";
import { Typography, Grid, Button } from "@mui/material";
import { Banner } from "@/components";
import { LocalStorageService } from "@/services";
import { useSelector, useDispatch } from "react-redux";
import { sendOrders } from "@/slices/cart.slice";
import { confirmAlert } from "react-confirm-alert";
import GlobalStyles from "@/assets/styles/globalStyles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const payment = [
  // {
  //   title: "Sub total",
  //   value: "00.00",
  // },
  // {
  //   title: "Discount",
  //   value: "0",
  // },
  // {
  //   title: "delivery",
  //   value: "0",
  // },
];

export default function MyBag() {
  // console.log({ carts });
  // const requireShippingInfos = carts.some((c) =>
  //   parseInt(c.requireShippingInfos)
  // );
  // console.log({ requireShippingInfos });
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, user } = useSelector((state) => state.user);
  const [carts, setCarts] = useState(
    JSON.parse(LocalStorageService.getUserLocalCarts())
      ? JSON.parse(LocalStorageService.getUserLocalCarts())
      : []
  );

  const handleDeleteItem = (item) => {
    setCarts(LocalStorageService.deleteItemUserCart(item));
  };

  const cartTotalPrice = () =>
    carts.reduce((acc, c) => acc + Number(c.price), 0);

  const handleCheckout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <>
            <GlobalStyles />
            <div className="modal-ui">
              <h1 style={{ marginBottom: "1rem" }}>Confirm your order</h1>
              <p className="modal-p">
                Your order will be processed as soon as possible after your
                confirmation.
              </p>
              <Button
                className="button-modal-text"
                variant="text"
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className="button-modal-contained"
                onClick={() => {
                  dispatch(
                    sendOrders(
                      user.owner,
                      carts.map((item) => item._id)
                    )
                  )
                    .then(() => {
                      toast.success("order created successfully", {
                        position: "bottom-center",
                        autoClose: 2000,
                        theme: "dark",
                      });
                      navigate("/orders");
                      onClose();
                      setCarts([]);
                    })
                    .catch(() => {
                      onClose();
                    });
                }}
              >
                Confirm
              </Button>
            </div>
          </>
        );
      },
    });
  };

  return (
    <div>
      <Banner title={"My bag"} showBackBtn={true} />

      <Grid
        container
        spacing={{ xs: 0, sm: 3, md: 8, lg: 10 }}
        className={classes.container}
      >
        <Grid item xs={12} sm={7} md={6} lg={6} className={classes.itemCon}>
          <Typography variant="h1" className={classes.titleRow} color="white">
            {"My $LOST Balance : "}
            <span
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <img
                src={
                  "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                }
                style={{
                  marginLeft: "1rem",
                  transform: "scale(2) translateY(-2px)",
                }}
              />
              <Typography
                variant="h2"
                className={classes.data}
                style={{ marginLeft: "1rem" }}
              >
                {user?.totalCoinsOwned != undefined ? user?.totalCoinsOwned : 0}
              </Typography>
            </span>
          </Typography>

          {carts.length ? (
            carts.map((data, index) => {
              return (
                <Grid
                  key={index}
                  spacing={{ xs: 1, sm: 1, lg: 2 }}
                  container
                  className={classes.itemContainer}
                >
                  <Grid item xs={3} sm={3} md={3} lg={3}>
                    <img src={data.image} className={classes.cartImg} />
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "start",
                    }}
                  >
                    <Typography variant="h4" color="white">
                      {data.productName}
                    </Typography>
                    <Typography variant="body2" color="#C4C4C4">
                      {data.quantity}
                      {" left"}
                    </Typography>

                    {/* <div className={classes.addremove}> 
                    <IconButton
                      aria-label="remove"
                      sx={{ padding: "4px 12px" }}
                    >
                      <RemoveIcon sx={{ color: "#A031F7" }} />
                    </IconButton>
                    <Typography variant="h6"> {data.purchase_quantity}</Typography>
                    <IconButton aria-label="add" sx={{ padding: "4px 12px" }}>
                      <AddIcon sx={{ color: "#A031F7" }} />
                    </IconButton>{" "}
                  </div> */}
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        src={
                          "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                        }
                        style={{ marginRight: "4px" }}
                      />
                      <Typography variant="h4" className={classes.data}>
                        {data.price}
                      </Typography>
                    </span>
                    <Button
                      className={classes.deleteBtn}
                      onClick={() => handleDeleteItem(data)}
                    >
                      delete
                    </Button>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <p>The cart is empty.</p>
          )}
        </Grid>
        <Grid item xs={12} sm={5} md={6} lg={6}>
          <Typography variant="h1" className={classes.title} color="white">
            {"payment "}
          </Typography>

          <Grid container className={classes.priceContainer}>
            {/* {payment.map((data, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  className={classes.valueRow}
                >
                  <Typography variant="h3" className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography variant="h3"> {data.value}</Typography>
                </Grid>
              );
            })} */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.valueRow}
            >
              <Typography variant="h3" className={classes.title}>
                {"Sub total"}
              </Typography>
              <Typography variant="h3">
                {" "}
                {cartTotalPrice().toFixed(2)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.totalRow}
            >
              <Typography variant="h3" className={classes.title}>
                {"Total"}
              </Typography>
              <Typography variant="h3">
                {" "}
                <img
                  src={
                    "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                  }
                  style={{ marginRight: "8px" }}
                />
                {cartTotalPrice().toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            className={classes.btn}
            btn
            onClick={handleCheckout}
            disabled={
              carts.length === 0 ||
              !user.owner ||
              cartTotalPrice() > Number(user.totalCoinsOwned)
            }
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
