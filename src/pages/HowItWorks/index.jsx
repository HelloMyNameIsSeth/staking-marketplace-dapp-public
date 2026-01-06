import React from "react";
import useStyles from "./style";
import { Typography, Grid, useMediaQuery } from "@mui/material";
import { Banner } from "@/components";

export default function HowItWorks() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <div>
      <Banner title={isMobile ? "" : ""} showBackBtn={false} />
      <Grid container className={classes.container}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          className={classes.subcontainer}
        >
          <Typography variant="h1" className={classes.mainTitle}>
            How does Your Project Staking work?
          </Typography>
        </Grid>
        {[1].map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              key={index}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  {item}
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    OFFCHAIN
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Everything is done on the backend of the platform. No gas fees
                  or contract interactions.
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        {[2].map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              key={index}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  {item}
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    PASSIVE REWARDS
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Earn at all times. Every day the platform calculates your
                  staking rate and earns you $LOST.
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        {[3].map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              key={index}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  {item}
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    Trait Based
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Rare traits matter! Click on your Losties to see a breakdown
                  of what trait is earning you points.
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        {[4].map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              key={index}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  {item}
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    Trait Breakdown
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  You can check out what traits are worth the more here!
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
//, 2, 3, 4, 5, 6
