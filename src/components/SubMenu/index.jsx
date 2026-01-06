import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { isAdminWallet } from "@/utils/isAdminWallet.js";

export default function SubMenu(props) {
  const { handleMenuClick } = props;
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const [isCoinMenuOpen, setIsCoinMenuOpen] = React.useState(false);
  const [isMarketPlaceMenuOpen, setIsMarketPlaceMenuOpen] =
    React.useState(false);
  const [isRafflesMenuOpen, setIsRafflesMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleCoinMenuClick = () => {
    setIsCoinMenuOpen(!isCoinMenuOpen);
  };

  const handleMarketPlaceMenuClick = () => {
    setIsMarketPlaceMenuOpen(!isMarketPlaceMenuOpen);
  };

  const handleRafflesMenuClick = () => {
    setIsRafflesMenuOpen(!isRafflesMenuOpen);
  };

  return (
    <List>
      <ListItemButton onClick={handleCoinMenuClick}>
        <ListItemIcon>
          <img
            src={
              "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
            }
            className={classes.img}
          />
        </ListItemIcon>
        <Typography variant="h5" className={classes.title}>
          {"Coin"}
        </Typography>
        {isCoinMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isCoinMenuOpen} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/Stake",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"Stake"}
            </Typography>
          </ListItemButton>
        </List>

        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/HowItWorks",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"how it works"}
            </Typography>
          </ListItemButton>
        </List>
        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/Transfer",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"transfer"}
            </Typography>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleMarketPlaceMenuClick}>
        <ListItemIcon>
          <img
            src={
              "https://storage.googleapis.com/ishro/uploads/63779d4e80d61.svg"
            }
            className={classes.img}
          />
        </ListItemIcon>
        <Typography variant="h5" className={classes.title}>
          {"Marketplace"}
        </Typography>
        {isMarketPlaceMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isMarketPlaceMenuOpen} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/Marketplace",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"items"}
            </Typography>
          </ListItemButton>
        </List>
        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/HowItWorksMarketplace",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"How It Works"}
            </Typography>
          </ListItemButton>
        </List>
        {user?.owner ? (
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() =>
                handleMenuClick(
                  "/MyBag",
                  "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
                )
              }
            >
              <ListItemIcon></ListItemIcon>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {"My Bag"}
              </Typography>
            </ListItemButton>
          </List>
        ) : null}
        {user?.owner ? (
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() =>
                handleMenuClick(
                  "/orders",
                  "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
                )
              }
            >
              <ListItemIcon></ListItemIcon>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {"orders"}
              </Typography>
            </ListItemButton>
          </List>
        ) : null}
        {isAdminWallet(user) ? (
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() =>
                handleMenuClick(
                  "/Products",
                  "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
                )
              }
            >
              <ListItemIcon></ListItemIcon>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {"Products"}
              </Typography>
            </ListItemButton>
          </List>
        ) : null}
      </Collapse>
      <ListItemButton onClick={handleRafflesMenuClick}>
        <ListItemIcon>
          <img
            src={
              "https://storage.googleapis.com/ishro/uploads/63779d4e80d61.svg"
            }
            className={classes.img}
          />
        </ListItemIcon>
        <Typography variant="h5" className={classes.title}>
          {"Raffles"}
        </Typography>
        {isRafflesMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isRafflesMenuOpen} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() =>
              handleMenuClick(
                "/RaffleTickets",
                "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
              )
            }
          >
            <ListItemIcon></ListItemIcon>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              {"Tickets"}
            </Typography>
          </ListItemButton>
        </List>
        {user?.owner ? (
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() =>
                handleMenuClick(
                  "/RaffleEntries",
                  "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
                )
              }
            >
              <ListItemIcon></ListItemIcon>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {"entries"}
              </Typography>
            </ListItemButton>
          </List>
        ) : null}
        {isAdminWallet(user) ? (
          <List component="div">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() =>
                handleMenuClick(
                  "/RaffleProducts",
                  "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
                )
              }
            >
              <ListItemIcon></ListItemIcon>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                {"Products"}
              </Typography>
            </ListItemButton>
          </List>
        ) : null}
      </Collapse>
    </List>
  );
}
