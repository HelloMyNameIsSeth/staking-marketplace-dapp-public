import React, { useEffect } from "react";
import useStyles from "./style";
import { fetchRafflesList } from "@/slices/raffles.slice";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid } from "@mui/material";
import dayjs from "dayjs";
import { Banner } from "@/components";

export default function RaffleEntries() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error, loading, rafflesList } = useSelector(
    (state) => state.rafflesList
  );
  console.log({ rafflesList });
  useEffect(() => {
    dispatch(fetchRafflesList());
  }, []);

  return (
    <div className={classes.wrapper}>
      <Banner title={"Raffles - entries"} showBackBtn={false} />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          lg={10}
          md={10}
          className={classes.mainContainer}
        >
          <Grid
            container
            display="flex"
            alignItems="center"
            sx={{ p: 1, mt: 1, mb: 1 }}
          >
            <Grid item xs={3} sm={5} md={4} lg={6}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h3">Product</Typography>
              </div>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={2}>
              <Typography
                textAlign={"center"}
                variant="h4"
                className={classes.middleDiv}
              >
                Status
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Typography
                textAlign={"right"}
                variant="h4"
                className={classes.middleDiv}
              >
                Entries
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sm={2}
              md={3}
              lg={2}
              sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
            >
              <Typography
                textAlign={"right"}
                variant="h3"
                className={classes.lastDiv}
              >
                End Date
              </Typography>
            </Grid>
          </Grid>
          {rafflesList.length ? (
            rafflesList.map((item, index) => {
              return (
                <Grid
                  key={index}
                  container
                  display="flex"
                  alignItems="center"
                  sx={{ p: 1, mt: 1, mb: 1 }}
                  className={classes.container}
                >
                  <Grid item xs={3} sm={5} md={4} lg={6}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.raffleProduct ? (
                        <div className={classes.itemImg}>
                          <img
                            src={item.raffleProduct.image}
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
                        {item.raffleProduct?.raffleName}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={3} md={3} lg={2}>
                    <Typography
                      textAlign={"center"}
                      variant="h4"
                      className={classes.middleDiv}
                    >
                      {item.statusOf}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography
                      textAlign={"right"}
                      variant="h4"
                      className={classes.middleDiv}
                    >
                      {item.numOfentries}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    sm={2}
                    md={3}
                    lg={2}
                    sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
                  >
                    <Typography
                      variant="h3"
                      className={classes.lastDiv}
                      textAlign={"right"}
                    >
                      {dayjs(item.raffleProduct.endTime).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <p>No entries.</p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
