import React, { useEffect, useState } from "react";
import useStyles from "./style";
import {
  fetchOrdersList,
  fetchAllOrdersList,
  updateOrderStatus,
} from "@/slices/orders.slice";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Button, TextField, Link } from "@mui/material";
import { isAdminWallet } from "@/utils/isAdminWallet.js";
import { formatWalletAddress } from "@/utils/formatAddress.js";
import { Banner } from "@/components";
import { Check, CopyAll } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";

export default function Orders() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [filterQuery, setFilterQuery] = useState();
  const [hasCopy, setHasCopy] = useState(false);
  const [hasCopyAddress, setHasCopyAddress] = useState(false);
  const [allOrdersList, setAllOrdersList] = useState([]);
  const [allOrdersListFiltered, setAllOrdersListFiltered] = useState([]);
  const { error, loading, ordersList } = useSelector(
    (state) => state.ordersList
  );

  const tableList = allOrdersList.map((item) => Object.create(item));

  const getAllOrdersList = async () => {
    const list = await fetchAllOrdersList();
    const allOrders = list
      .map((c) => ({
        address: c.owner || c.address,
        productName: c.product?.productName || c.raffleProduct?.productName,
        status: (c.statusOf || c.status).toLowerCase(),
        price: c.raffleProduct?.price || c.product?.price,
        type: c.product?.category || "Raffle",
        orderId: c.product ? c._id : undefined,
        raffleId: c.raffleProduct ? c.raffleProduct._id : undefined,
      }))
      .sort(
        (a, b) =>
          Number(a.status === "completed") - Number(b.status === "completed")
      );
    setAllOrdersList(allOrders);
    setAllOrdersListFiltered(allOrders.map((item) => Object.create(item)));
  };

  useEffect(() => {
    if (filterQuery && filterQuery.length > 2) {
      const filteredArr = tableList
        .filter(
          (c) =>
            c.address.toLowerCase().includes(filterQuery.toLowerCase()) ||
            c.type.toLowerCase().includes(filterQuery.toLowerCase())
        )
        .sort(
          (a, b) =>
            Number(a.status === "completed") - Number(b.status === "completed")
        );
      console.log({ filterQuery, filteredArr, tableList });
      setAllOrdersListFiltered(filteredArr);
    } else {
      setAllOrdersListFiltered(tableList);
    }
  }, [filterQuery]);

  useEffect(() => {
    if (user && user.owner) {
      if (isAdminWallet(user)) {
        getAllOrdersList();
      }
      dispatch(fetchOrdersList(user.owner));
    }
  }, [user]);

  const handleUpdateOrderStatus = async (orderId) => {
    await dispatch(updateOrderStatus({ orderId }));
    getAllOrdersList();
  };

  return (
    <div className={classes.wrapper}>
      <Banner title={"MARKETPLACE - Orders"} showBackBtn={false} />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          lg={10}
          md={10}
          className={classes.mainContainer}
        >
          {isAdminWallet(user) ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {showAllOrders ? (
                  <TextField
                    label="Search Address or category"
                    value={filterQuery}
                    style={{
                      width: "500px",
                      maxWidth: "100%",
                    }}
                    onChange={(event) => setFilterQuery(event.target.value)}
                  />
                ) : null}
              </div>
              <Button
                variant="contained"
                style={{ marginBottom: "1rem" }}
                onClick={() => setShowAllOrders(!showAllOrders)}
              >
                {!showAllOrders ? "Show all orders" : "Show my orders"}
              </Button>
            </div>
          ) : null}
          {showAllOrders ? (
            <>
              <Grid
                container
                display="flex"
                alignItems="center"
                sx={{ p: 1, mt: 1, mb: 1 }}
              >
                <Grid item xs={5} sm={5} md={5} lg={5}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h3">Product</Typography>
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h3">Address</Typography>
                  </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <Typography
                    variant="h4"
                    className={classes.middleDiv}
                    style={{ textAlign: "right" }}
                  >
                    Status
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={1}
                  sm={2}
                  md={2}
                  lg={2}
                  sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
                >
                  <Typography
                    variant="h3"
                    className={classes.lastDiv}
                    style={{ justifyContent: "center" }}
                  >
                    Category
                  </Typography>
                </Grid>
              </Grid>
              {allOrdersListFiltered.length ? (
                allOrdersListFiltered.map((item, index) => {
                  return (
                    <Grid
                      key={index}
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ p: 1, mt: 1, mb: 1 }}
                      className={classes.container}
                    >
                      <Grid item xs={5} sm={5} md={5} lg={5}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {item.type !== "Raffle" ? (
                            <Button
                              variant="contained"
                              disabled={item.status === "completed"}
                              style={{
                                color:
                                  item.status === "completed"
                                    ? "grey"
                                    : "white",
                                fontSize: "1rem",
                                padding: "0.25rem 1rem",
                                marginRight: "1rem",
                              }}
                              onClick={() =>
                                handleUpdateOrderStatus(item.orderId)
                              }
                            >
                              Complete
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              style={{
                                fontSize: "1rem",
                                padding: "0.25rem 1rem",
                                marginRight: "1rem",
                              }}
                              onClick={() => {
                                navigate(
                                  "/RaffleTicketDetails/" + item.raffleId
                                );
                              }}
                            >
                              See more
                            </Button>
                          )}

                          <Typography variant="h3">
                            {item.productName}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={3}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <CopyToClipboard
                            text={item.address}
                            onCopy={() => {
                              setHasCopyAddress(true);
                              const timeOut = setTimeout(() => {
                                setHasCopyAddress(false);
                                clearTimeout(timeOut);
                              }, 1000);
                            }}
                          >
                            <Tooltip title={hasCopyAddress ? "Copied" : "Copy"}>
                              <Link variant="h3" style={{ cursor: "pointer" }}>
                                {formatWalletAddress(item.address)}
                              </Link>
                            </Tooltip>
                          </CopyToClipboard>
                        </div>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={2}>
                        <Typography
                          variant="h4"
                          style={{
                            color:
                              item.status === "completed"
                                ? "#38E17D"
                                : "#C16BF1",
                            textAlign: "right",
                          }}
                          className={classes.middleDiv}
                        >
                          {item.status}
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        sx={{
                          borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>{item.type}</Typography>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <p>No orders.</p>
              )}
            </>
          ) : (
            <>
              <Grid
                container
                display="flex"
                alignItems="center"
                sx={{ p: 1, mt: 1, mb: 1 }}
              >
                <Grid item xs={4} sm={5} md={5} lg={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h3">Product</Typography>
                  </div>
                </Grid>

                <Grid item xs={3} sm={3} md={3} lg={2}>
                  <Typography variant="h4" className={classes.middleDiv}>
                    Status
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={2}
                  md={2}
                  lg={2}
                  sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
                >
                  <Typography
                    variant="h3"
                    className={classes.lastDiv}
                    style={{ justifyContent: "center" }}
                  >
                    Price
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={2}
                  md={2}
                  lg={2}
                  sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
                >
                  <Typography
                    variant="h3"
                    className={classes.lastDiv}
                    style={{ justifyContent: "center" }}
                  >
                    Code
                  </Typography>
                </Grid>
              </Grid>
              {ordersList.length ? (
                ordersList.map((item, index) => {
                  return (
                    <Grid
                      key={index}
                      container
                      display="flex"
                      alignItems="center"
                      sx={{ p: 1, mt: 1, mb: 1 }}
                      className={classes.container}
                    >
                      <Grid item xs={2} sm={3} md={3} lg={3}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {item.product ? (
                            <div className={classes.itemImg}>
                              <img
                                src={item.product.image}
                                style={{
                                  width: 60,
                                  height: 60,
                                  objectFit: "cover",
                                  marginRight: "1rem",
                                  borderRadius: "0.5rem",
                                }}
                              />
                            </div>
                          ) : null}
                          <Typography variant="h3">
                            {item.product?.productName || item.productName}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={3} md={3} lg={3}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {item.product ? (
                            <div className={classes.itemImg}>
                              <img
                                src={item.product.image}
                                style={{
                                  width: 60,
                                  height: 60,
                                  objectFit: "cover",
                                  marginRight: "1rem",
                                  borderRadius: "0.5rem",
                                }}
                              />
                            </div>
                          ) : null}
                          <Typography variant="h3">
                            {item.product?.productName || item.productName}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={2}>
                        <Typography
                          variant="h4"
                          style={{
                            color:
                              item.status === "completed"
                                ? "#38E17D"
                                : "#C16BF1",
                          }}
                          className={classes.middleDiv}
                        >
                          {item.status}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sm={2}
                        md={2}
                        lg={2}
                        sx={{
                          borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
                          borderRight: "1px solid rgba(255, 255, 255, 0.12)",
                        }}
                      >
                        <Typography
                          variant="h3"
                          className={classes.lastDiv}
                          style={{ justifyContent: "center" }}
                        >
                          {item.product?.price || item.price}
                          <img
                            src={
                              "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                            }
                            style={{
                              marginLeft: "1rem",
                              transform: "scale(1.5) translateY(-2px)",
                            }}
                          />
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        sx={{
                          borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {item.code ? (
                          <CopyToClipboard
                            text={item.code}
                            onCopy={() => {
                              setHasCopy(true);
                              const timeOut = setTimeout(() => {
                                setHasCopy(false);
                                clearTimeout(timeOut);
                              }, 1000);
                            }}
                          >
                            <Button variant="outlined">
                              {hasCopy ? <Check /> : <CopyAll />}
                            </Button>
                          </CopyToClipboard>
                        ) : null}
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <p>No orders.</p>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
