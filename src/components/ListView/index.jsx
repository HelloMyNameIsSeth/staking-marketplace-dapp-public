import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { List, Typography, ListItemButton, ListItemText } from "@mui/material";
import menuList from "@/data/menu.json";
import Arrow from "@mui/icons-material/ArrowForwardIos";
export default function ListView(props) {
  const classes = useStyles();
  const { active, handleClick } = props;
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, title) => {
    
    handleClick(title);
   
  };

  return (
    <List component="nav" className={classes.container}>
      {menuList.map((item, index) => {
        return (
          <ListItemButton
            key={index}
            className={classes.listBtn}
            selected={active === item.title}
            onClick={(event) => handleListItemClick(event, item.title)}
          >
            <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
              {item.title}
            </Typography>
            {active === item.title && <Arrow />}
          </ListItemButton>
        );
      })}
    </List>
  );
}
