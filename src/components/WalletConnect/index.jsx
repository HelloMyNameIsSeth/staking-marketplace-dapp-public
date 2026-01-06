import React from "react";
import useStyles from "./style";
import { Typography, Grid } from "@mui/material";

export default function WalletConnect({ message }) {
  const classes = useStyles();

  return (
    <div style={{ margin: "2%", textAlign: "center" }}>
      <Typography variant="h2" color="white" className={classes.maintxt}>
        {message}
      </Typography>
    </div>
  );
}
