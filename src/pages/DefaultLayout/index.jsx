import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SubMenu } from "@/components";
import { IconButton, Grid, Drawer } from "@mui/material";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
const DefaultLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = (path, icon) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <Grid container sx={{ backgroundColor: "#191919" }}>
        <Grid
          item
          lg={2}
          md={2}
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            backgroundColor: "#191919",
            height: "90vh",
          }}
        >
          <SubMenu handleMenuClick={handleClick} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={10}
          md={12}
          sx={{ backgroundColor: "rgb(32 34 33)" }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default DefaultLayout;
