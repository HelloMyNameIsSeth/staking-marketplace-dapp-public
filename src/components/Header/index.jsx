import React, { useCallback, useEffect, useRef, useState } from "react";
import useStyles from "./style";
import logo from "@/assets/image/logo.svg";
import {
  AppBar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Grid,
  useMediaQuery,
  Drawer,
  Menu,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import headerMenu from "@/data/headerMenu.json";
import main from "@/assets/image/main2.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { SubMenu } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/slices/user.slice";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";
import { SessionStorageService } from "@/services";

const drawerWidth = 240;
const StyledTabs = styled((props) => (
  <Tabs
    id="menu"
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#A031F7",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#A031F7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "24px",
    padding: "0px",
    color: "rgba(255, 255, 255)",
    marginRight: theme.spacing(1),
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const { address, connector, isReconnecting } = useAccount();
  const [value, setValue] = React.useState(4);
  const [showBanner, setBanner] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  var isMobile = useMediaQuery("(max-width:600px)");
  const { data, error, isLoading, signMessage } = useSignMessage();

  const location = useLocation();
  const [icon, setIcon] = React.useState(
    "https://storage.googleapis.com/ishro/uploads/63779d6b7ecb1.svg"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    if (isMobile) {
      if (pathName != "/NftDetails" && pathName != "/RaffleTicketDetails") {
        setBanner(true);
      } else {
        setBanner(false);
      }
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    navigate("/" + headerMenu.filter((item) => item.id === newValue)[0].title);
    setValue(newValue);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (path, icon) => {
    navigate(path);
    setIcon(icon);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (data) {
      const obj = {
        status: true,
        address: address,
        signature: data,
      };
      SessionStorageService.saveMetamaskSignature(JSON.stringify(obj));
      dispatch(login(address.toLowerCase()));
    }
  }, [data]);

  useEffect(() => {
    // "0xf417a9fe907b8f47849d2dd59b686bbc0b4d3566"
    if ((!user || (user && !user.owner)) && address && address.length > 40) {
      if (
        connector &&
        !isLoading &&
        !SessionStorageService.getMetamaskSignature()
      ) {
        signMessage({ message: "Sign in to Your Project DAPP" });
      } else if (SessionStorageService.getMetamaskSignature()) {
        dispatch(login(address.toLowerCase()));
      }
    } else if (
      !address &&
      SessionStorageService.getMetamaskSignature() &&
      !isReconnecting
    ) {
      SessionStorageService.deleteMetamaskSignature();
      dispatch(logout());
      window.location.reload();
    }
  }, [address, connector]);

  return (
    <div style={{ position: "relative" }}>
      {showBanner && <img src={main} width="100%" />}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className={showBanner ? classes.header : classes.appBar}
        >
          <Grid
            container
            className={classes.toolbar}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Grid item xs={7} sm={8} lg={2} md={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={classes.logoBtn}
              >
                <img src={logo} className={classes.logo} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={9}
              sm={9}
              lg={8}
              md={8}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                {/* {headerMenu.map((item, index) => (
                  <StyledTab label={item.title} value={item.id} key={index} />
                ))} */}
              </StyledTabs>
            </Grid>
            <Grid
              item
              xs={5}
              sm={4}
              lg={2}
              md={2}
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px !important",
              }}
            >
              <ConnectButton
                chainStatus="none"
                accountStatus="address"
                showBalance={false}
              />
            </Grid>
          </Grid>
        </AppBar>
      </Box>
      {showBanner && (
        <div className={classes.leftmenu}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menubtn}
            onClick={handleClick}
          >
            <img src={icon} width="32px" />
            <ArrowForwardIosIcon sx={{ marginLeft: "6px" }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openmenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPopover-paper": {
                backgroundColor: "#151316!important",
                border: "2px solid #FFFFFF",
                borderRadius: "12px",
              },
            }}
          >
            <SubMenu handleMenuClick={handleClick1} />
          </Menu>
        </div>
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader style={{ justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerClose} className={classes.closeBtn}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </DrawerHeader>
        {/* <List>
          {headerMenu.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                component="a"
                href={`/${item.title}`}
                onClick={handleDrawerClose}
                className={classes.listBtn}
              >
                <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                  {item.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
export default Header;
