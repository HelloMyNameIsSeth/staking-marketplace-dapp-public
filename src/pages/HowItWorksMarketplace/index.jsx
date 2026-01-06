import React from "react";
import useStyles from "./style";
import { Typography, Grid, useMediaQuery, Link } from "@mui/material";
import { Banner } from "@/components";

export default function HowItWorksMarketplace() {
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
            How does Your Project Marketplace work?
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
                    PURCHASES
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  All NFT purchases will be delivered / minted to your wallet
                  within 48 hours.
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
                    DISCOUNT CODES
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Discount codes are automatically generated and are accessible
                  in the orders tab.
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
                    WHERE TO USE MY DISCOUNT
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Use your discount codes at the your website -
                  <Link
                    href="https://yourwebsite.com"
                    target="_blank"
                  >
                    https://yourwebsite.com
                  </Link> We accept crypto as a payment method. 
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
                    SHIPPING DETAILS
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  An order asking for your shipping details? Community products
                  are emailed out upon purchase with this information
                </Typography>
              </Grid>
            </Grid>
          );
        })}

        {[5].map((item, index) => {
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
                    RAFFLE TICKETS
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Check the raffle ticket entries by clicking on the raffle
                  ticket product.
                </Typography>
              </Grid>
            </Grid>
          );
        })}
        {[6].map((item, index) => {
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
                    SOMETHING IS WRONG
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  If you experience an unexpected behaviour or need help, pls
                  open a support ticket on our discord -{" "}
                  <Link href={"https://discord.gg/yourdiscord"} target="_blank">
                    https://discord.gg/yourdiscord
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
