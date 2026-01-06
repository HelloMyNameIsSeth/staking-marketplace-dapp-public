import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { Box, Typography, IconButton } from "@mui/material";
export default function SocialMedia(props) {
  const classes = useStyles();
  const { data, type } = props;
  debugger;
  var id = data.nftID.toString();
  const openSea =
    "https://opensea.io/assets/ethereum/0x1347a97789cd3aa0b11433e8117f55ab640a0451/" +
    id;
  const looksrare =
    "https://looksrare.org/collections/0x1347A97789cd3Aa0b11433E8117F55Ab640A0451/" +
    id;
  const gem =
    "https://www.gem.xyz/asset/0x1347a97789cd3aa0b11433e8117f55ab640a0451/" +
    id;

  return (
    <div className={classes.imgcontainer1}>
      <Box
        sx={{
          display: "flex",
          p: 2,
          borderBottom: "2px solid #FFFFFF",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4">{"view on"}</Typography>
        </Box>
        <Box sx={{ flexShrink: 1 }}></Box>
        <Box sx={{ flexShrink: 0 }}>
          <IconButton
            className={classes.iconbtn}
            onClick={() => window.open(openSea)}
          >
            <img src="https://storage.googleapis.com/ishro/uploads/637898d03ad4b.svg" />
          </IconButton>

          <IconButton
            className={classes.iconbtn}
            onClick={() => window.open(looksrare)}
          >
            <img src="https://storage.googleapis.com/ishro/uploads/637b56b6122d1.svg" />
          </IconButton>
          <IconButton
            className={classes.iconbtn}
            onClick={() => window.open(gem)}
          >
            <img src="https://storage.googleapis.com/ishro/uploads/637b56d6213b6.svg" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4">{"Purchases per wallet"}</Typography>
        </Box>
        <Box sx={{ flexShrink: 1 }}></Box>
        <Box sx={{ flexShrink: 0 }}>{"4"}</Box>
      </Box>
    </div>
  );
}
