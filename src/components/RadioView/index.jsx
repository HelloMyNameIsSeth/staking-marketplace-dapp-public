import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { List, Typography, ListItemButton, Radio } from "@mui/material";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";
const menuList = [{ title: "All types" }, { title: "buy now" }];

export default function RadioView(props) {
  const classes = useStyles();
  const { setTitle } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { error, loading, user } = useSelector((state) => state.user);

  const handleListItemClick = (event, index, title) => {
    setSelectedIndex(index);
    setTitle(title);
  };

  return (
    <List component="nav" className={classes.container}>
      <Typography variant="h3" className={classes.titleRow} color="white">
        {"My $LOST : "}
        <span
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <img
            src={
              "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
            }
            style={{
              marginLeft: "0.5rem",
              transform: "scale(1.5) translateY(-2px)",
            }}
          />
          <Typography variant="h3" style={{ marginLeft: "0.5rem" }}>
            {user?.totalCoinsOwned != undefined ? user?.totalCoinsOwned : 0}
          </Typography>
        </span>
      </Typography>
      {/* {menuList.map((item, index) => {
        return (
          <ListItemButton
            className={classes.listBtn}
            key={index}
            sx={{ display: "flex", justifyContent: "space-between" }}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index, item.title)}
          >
            <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
              {item.title}
            </Typography>
            <Radio
              checked={selectedIndex === index}
              value={index}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              inputProps={{ "aria-label": "A" }}
            />
          </ListItemButton>
        );
      })} */}
    </List>
  );
}
