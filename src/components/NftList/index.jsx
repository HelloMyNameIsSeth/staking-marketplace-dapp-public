import { Typography, Box, Grid, Button } from "@mui/material";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RaffleTicketCard } from "./RaffleTicketCard";

function NftList(props) {
  const classes = useStyles();
  const { dataList, xl, lg, md, sm, xs, type } = props;
  const { error, loading, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const arr = [...dataList];

  const handleItemClicked = (data) => {
    console.log({ data });
    if (data.category === "apparel") {
      window.open(data.url, "_blank");
    } else if (data.category === "raffle tickets") {
      navigate("/RaffleTicketDetails/" + data._id, {
        state: {
          data: data,
        },
      });
    } else {
      navigate("/MarketplaceItemDetails/" + data._id, {
        state: {
          data: data,
        },
      });
    }
  };

  return (
    dataList.length > 0 && (
      <>
        {arr
          .sort((c, b) => parseInt(c.quantity) - parseInt(b.quantity))
          .reverse()
          .map((item, index) => {
            return (
              <Grid
                item
                xs={xs || 6}
                sm={sm || 4}
                lg={lg}
                md={md}
                xl={xl}
                key={index}
              >
                <div className={classes.mainContainer}>
                  <div className={classes.closePaper}>
                    {(type == "stake" || type == "unstake") && (
                      <>
                        {/* <Checkbox
                        className={classes.check}
                        checked={item.select}
                        onChange={(e) => handleChange(item, e)}
                      /> */}
                        <img
                          src={
                            "https://thelonglostimages.s3.amazonaws.com/images/" +
                            item.nftID +
                            ".png"
                          }
                          className={classes.img}
                          onClick={() =>
                            navigate("/NftDetails", {
                              state: {
                                type: type,
                                data: item,
                              },
                            })
                          }
                        />
                        <div className={classes.detail}>
                          <Typography variant="h4">
                            {"LONGLOST #" + item.nftID}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={classes.subtitle}
                          >
                            {"Stake rate: " +
                              item.tokenRate +
                              "/" +
                              user.stakingRate}
                          </Typography>
                        </div>
                      </>
                    )}

                    {type == "Marketplace" && (
                      <div style={{ padding: "12px" }}>
                        {!parseInt(item.quantity) > 0 ? (
                          <Typography
                            style={{
                              position: "absolute",
                              padding: "0.25rem 0.5rem",
                              background: "rgba(0,0,0,0.5)",
                              top: "16px",
                              right: "16px",
                              borderRadius: "0.25rem",
                              backdropFilter: "blur(5px)",

                              zIndex: "10",
                            }}
                          >
                            {"Sold out"}
                          </Typography>
                        ) : null}
                        <img
                          src={item.image}
                          className={classes.img}
                          style={{
                            filter:
                              parseInt(item.quantity) > 0
                                ? "none"
                                : "grayscale(100%)",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            pb: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">
                            {item.productName}
                          </Typography>
                          <Typography variant="body2" color="#C4C4C4">
                            {item.quantity}
                            {" left"}
                          </Typography>
                        </Box>
                        <Grid
                          container
                          display="flex"
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Grid
                            item
                            xs={6}
                            sm={6}
                            lg={6}
                            md={6}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            {item.currency === "$LOST" ? (
                              <img
                                src={
                                  "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                                }
                              />
                            ) : (
                              <span style={{ marginRight: "0.2rem" }}>
                                {item.currency}
                              </span>
                            )}
                            <Typography variant="h5"> {item.price}</Typography>
                          </Grid>
                          <Grid item xs={6} sm={6} lg={6} md={6}>
                            <Button
                              variant="contained"
                              fullWidth
                              className={classes.btn}
                              onClick={() => handleItemClicked(item)}
                              disabled={!parseInt(item.quantity) > 0}
                            >
                              {parseInt(item.quantity) > 0
                                ? item.category === "apparel"
                                  ? "Go to store"
                                  : "Show now"
                                : "Out of stock"}
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    )}

                    {type == "raffle" && (
                      <RaffleTicketCard
                        item={item}
                        classes={classes}
                        handleItemClicked={handleItemClicked}
                        user={user}
                      />
                    )}
                  </div>
                </div>
              </Grid>
            );
          })}
      </>
    )
  );
}
export default NftList;
