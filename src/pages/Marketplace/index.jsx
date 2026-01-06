import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import main from "@/assets/image/main.svg";
import { Box, Button, Menu, Typography, Grid } from "@mui/material";
import { NftList, ListView, RadioView, FilterView } from "@/components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsList } from "@/slices/products.slice";

export default function Marketplace() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, loading, productsList } = useSelector(
    (state) => state.productsList
  );
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState("NFT’s");
  const [filter1, setFilter1] = React.useState("All types");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [showOutOfStock, setShowOutOfStock] = React.useState(true);
  const open1 = Boolean(anchorEl1);
  const open = Boolean(anchorEl);
  const [displayData, setDisplayData] = useState(productsList);
  const [active, setActive] = useState("All listing");

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  useEffect(() => {
    setDisplayData(productsList.filter((c) => c.active));
  }, [productsList]);

  const handleCategoryClick = (category) => {
    handleClose();
    if (category === active) return;
    setActive(category);

    if (category === "All listing") {
      setDisplayData(productsList.filter((c) => c.active));
      return;
    }

    const filteredData = productsList.filter(
      (item) => item.category === category
    );
    setDisplayData(filteredData.filter((c) => c.active));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleChange = (value) => {
    handleClose();
    setFilter(value);
  };

  const handleChange1 = (value) => {
    handleClose1();
    setFilter1(value);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}>
        <img src={main} className={classes.mainImg} />
        <Typography variant="h1" color="white" className={classes.bannertxt}>
          {"Marketplace - nft’s"}
        </Typography>
      </Box>
      <Grid container spacing={2} className={classes.container}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={2.8}
          md={3}
          xl={2}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <div className={classes.listView}>
            <ListView active={active} handleClick={handleCategoryClick} />
            <RadioView />
            <FilterView
              showOutOfStock={showOutOfStock}
              setShowOutOfStock={setShowOutOfStock}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            display: {
              sm: "block",
              md: "none",
            },
          }}
        >
          <Button
            variant="outlined"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            fullWidth
            endIcon={<ArrowDropDownIcon />}
            className={classes.btn}
          >
            {active}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <ListView active={active} handleClick={handleCategoryClick} />
          </Menu>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            display: {
              sm: "block",
              md: "none",
            },
          }}
        >
          <Button
            variant="outlined"
            id="basic-button"
            aria-controls={open1 ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? "true" : undefined}
            fullWidth
            className={classes.btn}
          >
            <Typography variant="h4" className={classes.titleRow} color="white">
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
                <Typography variant="h4" style={{ marginLeft: "0.5rem" }}>
                  {user?.totalCoinsOwned != undefined
                    ? user?.totalCoinsOwned
                    : 0}
                </Typography>
              </span>
            </Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose1}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <RadioView setTitle={handleChange1} />
          </Menu>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
          <Grid container spacing={2} className={classes.nftcol}>
            <NftList
              dataList={
                showOutOfStock
                  ? displayData.filter((c) => c.category !== "raffle tickets")
                  : displayData.filter(
                      (c) =>
                        c.category !== "raffle tickets" &&
                        parseInt(c.quantity) > 0
                    )
              }
              type={"Marketplace"}
              xl={2.5}
              lg={3}
              md={3.5}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
