import React from "react";
import useStyles from "./style";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import leaderboard from "@/data/leaderboard.json";
import { Banner } from "@/components";
export default function Leaderboard() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <Banner title={"longlost Coin - leaderboard"} showBackBtn={false}/>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          lg={10}
          md={10}
          className={classes.mainContainer}
        >
          {leaderboard.map((item, index) => {
            return (
              <Grid
                key={index}
                container
                display="flex"
                alignItems="center"
                className={clsx(classes.container, {
                  [classes.select]: item.select,
                  [classes.unselect]: !item.select,
                })}
                sx={{ p: 1, mt: 1, mb: 1 }}
              >
                <Grid item xs={1} sm={2} md={2} lg={0.5}>
                  <div
                    className={clsx(classes.firstDiv, {
                      [classes.selectFirst]: item.select,
                      [classes.unselectFirst]: !item.select,
                    })}
                  >
                    <Typography variant="h3" className={classes.num}>
                      {index + 1}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={10}>
                  <Typography variant="h3" className={classes.middleDiv}>
                    {item.address}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={2}
                  md={2}
                  lg={1}
                  sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.12)" }}
                >
                  <Typography variant="h3" className={classes.lastDiv}>
                    {item.val}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
