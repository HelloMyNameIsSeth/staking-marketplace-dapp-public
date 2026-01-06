import React from "react";
import useStyles from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import main from "@/assets/image/main.svg";
import { Button, Grid, useMediaQuery } from "@mui/material";
import { Metadata, SocialMedia } from "@/components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function NftDetails() {
  const classes = useStyles();
  const { state } = useLocation();
  const { type, data } = state;
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const image =
    "https://thelonglostimages.s3.amazonaws.com/images/" + data.nftID + ".png";
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
            <img src={image} className={classes.img} />
            {!isMobile && <SocialMedia data={data} />}
          </div>
        </Grid>
        <Grid item xs={12} sm={8} lg={9} md={8}>
          <Metadata data={data} type={type} />
          {isMobile && <SocialMedia data={data} />}
          {type == "Marketplace" && (
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/myBag")}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              {"Buy Now"}
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
