import React from "react";
import useStyles from "./style";
import { Typography, Grid } from "@mui/material";
import { NftList } from "@/components";
import { Banner, SlideDiv, WalletConnect, Loader } from "@/components";
import { useSelector } from "react-redux";
export default function Stake() {
  const classes = useStyles();

  const { error, userLoading, user } = useSelector((state) => state.user);
  const { loading, nftList } = useSelector((state) => state.nftList);

  return (
    <div>
      <Banner title={"Coin"} showBackBtn={false} />

      {user.owner == undefined ? (
        <WalletConnect message="Connect Your Wallet" />
      ) : userLoading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.container1}>
            <SlideDiv />
          </div>
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              <Typography
                variant="h2"
                color="white"
                className={classes.maintxt}
              >
                {"Staked"}
              </Typography>

              {nftList.length > 0 ? (
                <Grid container spacing={2}>
                  <NftList
                    dataList={nftList}
                    type={"stake"}
                    xl={2}
                    lg={2}
                    md={3}
                  />
                </Grid>
              ) : (
                error && <WalletConnect message={error} />
              )}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
