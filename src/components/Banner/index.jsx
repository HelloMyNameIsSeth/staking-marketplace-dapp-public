import React, { useState, useEffect } from "react";
import useStyles from "./style";
import main from "@/assets/image/main.svg";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Tabs, Tab, Typography, Grid } from "@mui/material";

export default function Banner(props) {
  const classes = useStyles();
  const { title, showBackBtn } = props;
  const navigate = useNavigate();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}
      >
        <img src={main} className={classes.mainImg} />
        <Typography variant="h1" color="white" className={classes.bannertxt}>
          {title}
        </Typography>
        {showBackBtn && (
          <Button
            variant="text"
            startIcon={<ArrowBackIosIcon />}
            className={classes.backBtn}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {showBackBtn && (
          <Button
            variant="text"
            startIcon={<ArrowBackIosIcon />}
            className={classes.backBtn}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        )}
        <Typography variant="h1" color="white" className={classes.bannertxt1}>
          {title}
        </Typography>
      </Grid>
    </>
  );
}
