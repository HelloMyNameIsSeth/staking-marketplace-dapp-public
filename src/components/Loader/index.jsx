import React, { useState, useEffect } from "react";
import useStyles from "./style";
import CircularProgress from "@mui/material/CircularProgress";
export default function Loader() {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        height: "47vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
