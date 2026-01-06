import React from "react";
import useStyles from "./style";
import { List, Switch, FormControlLabel } from "@mui/material";

export default function FilterView(props) {
  const classes = useStyles();

  const handleSwitchValueChange = (event) => {
    props.setShowOutOfStock(event.target.checked);
  };

  return (
    <List component="nav" className={classes.container}>
      <FormControlLabel
        control={
          <Switch
            id="active"
            checked={props.showOutOfStock}
            onChange={handleSwitchValueChange}
          />
        }
        label="Show out of stock"
        style={{ marginLeft: "auto" }}
      />
    </List>
  );
}
