import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import main from "@/assets/image/main.svg";
import { Box, Button, Typography, Grid } from "@mui/material";
import { NftList, FilterView } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsList } from "@/slices/products.slice";
import { fetchRafflesList } from "@/slices/raffles.slice";

export default function RaffleTickets() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, loading, productsList } = useSelector(
    (state) => state.productsList
  );
  const { rafflesList } = useSelector((state) => state.rafflesList);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const dispatch = useDispatch();
  const [displayData, setDisplayData] = useState(productsList);
  console.log({ displayData });
  useEffect(() => {
    dispatch(fetchProductsList());
    dispatch(fetchRafflesList());
  }, []);

  useEffect(() => {
    setDisplayData(productsList.filter((c) => c.category === "raffle tickets"));
  }, [productsList]);

  return (
    <div>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "relative",
        }}
      >
        <img src={main} className={classes.mainImg} />
        <Typography variant="h1" color="white" className={classes.bannertxt}>
          {"Raffle - Tickets"}
        </Typography>
      </Box>
      <Grid container className={classes.container}>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          xl={2}
          sx={{
            display: {
              xs: "flex",
            },
            flexDirection: {
              md: "column",
            },
          }}
        >
          {rafflesList.map((c) => (
            <Button
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
              key={c._id}
              variant="outlined"
              id="basic-button"
              aria-controls={undefined}
              aria-haspopup="true"
              aria-expanded={undefined}
              className={classes.ticketsBtn}
              style={{ padding: "0.5rem 1rem" }}
              onClick={() => navigate("/RaffleEntries")}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={c.raffleProduct.image}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "10px",
                    marginRight: "1rem",
                  }}
                />
                <Typography variant="h5">
                  {c.raffleProduct.raffleName + " : "}
                </Typography>

                <Typography variant="h4" style={{ marginLeft: "0.5rem" }}>
                  {c.numOfentries}
                </Typography>
              </span>
            </Button>
          ))}

          <Button
            variant="outlined"
            id="basic-button"
            aria-controls={undefined}
            aria-haspopup="true"
            aria-expanded={undefined}
            className={classes.btn}
          >
            <Typography variant="h5" className={classes.titleRow} color="white">
              {"My $LOST : "}
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
                    marginLeft: "0.5rem",
                    transform: "scale(1.5) translateY(-2px)",
                  }}
                />
                <Typography variant="h5" style={{ marginLeft: "0.5rem" }}>
                  {user?.totalCoinsOwned != undefined
                    ? user?.totalCoinsOwned
                    : 0}
                </Typography>
              </span>
            </Typography>
          </Button>
          <div style={{ margin: "0.5rem" }}>
            <FilterView
              showOutOfStock={showOutOfStock}
              setShowOutOfStock={setShowOutOfStock}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
          <Grid container spacing={2} className={classes.nftcol}>
            <NftList
              dataList={
                showOutOfStock
                  ? displayData
                  : displayData.filter((c) => parseInt(c.quantity) > 0)
              }
              type={"raffle"}
              xl={2.5}
              lg={3}
              md={3.5}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
