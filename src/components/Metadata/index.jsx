import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Grid, useMediaQuery } from "@mui/material";

export default function Metadata(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");
  const { data, type } = props;
  return (
    <>
      <Typography variant="h1" sx={{ textTransform: "uppercase" }}>
        {"NFT #"+data.nftID}
      </Typography>{" "}
      <Typography
        variant="h5"
        color="white"
        sx={{ mt: 1, mb: 2 }}
        className={classes.subtxt}
      >

      </Typography>
      {type == "stake" && (
        <Grid container>
          {data?.traits.map((data, index) => {
            return (
              <Grid item xs={6} sm={6} lg={6} md={6} key={index}>
                <div className={classes.buyContainer1}>
                  {Object.entries(data).map(([key, value], index1) => {
                    return (
                      <Grid
                        item
                        xs={key == "rate" ? 3 : 9}
                        sm={6}
                        lg={6}
                        md={6}
                        key={index1}
                      >
                        <Typography variant="h5" className={classes.title}>
                          {key}
                        </Typography>
                        <Typography variant="h4">{value}</Typography>
                      </Grid>
                    );
                  })}
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
      {type == "Marketplace" && (
        <>
          <Grid
            item
            xs={12}
            sm={12}
            lg={10}
            md={10}
            className={classes.buyContainer}
          >
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <Typography variant="h5" className={classes.title}>
                {"price"}
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                variant="h1"
              >
                <img
                  src={
                    "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                  }
                  className={classes.money}
                />
                {"120.00"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <Typography variant="h5" className={classes.title}>
                {"stake"}
              </Typography>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <Typography variant="h1">{"15/"}</Typography>
                <Typography variant="h5">{"25"}</Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={3}
              md={3}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/myBag")}
              >
                {"Buy Now"}
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
