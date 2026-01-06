import { Box, Typography, Grid, Button } from "@mui/material";
import useStyles from "./style";
import { useSelector } from "react-redux";

function ProductsList({ xl, lg, md, type, products = [], handleItemClicked }) {
  const classes = useStyles();
  const { error, loading, user } = useSelector((state) => state.user);

  return (
    products.length > 0 && (
      <>
        {products.map((item, index) => {
          return (
            <Grid item xs={6} sm={4} lg={lg} md={md} xl={xl} key={index}>
              <div className={classes.mainContainer}>
                <div className={classes.closePaper}>
                  {type == "Marketplace" && (
                    <div style={{ padding: "12px" }}>
                      <img
                        src={
                          item.image ||
                          "https://storage.googleapis.com/ishro/uploads/6381ecaf6f390.svg"
                        }
                        className={classes.img}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          pb: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6">{item.productName}</Typography>
                        <Typography variant="body2" color="#C4C4C4">
                          {item.category || "All"}
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
                          >
                            Edit product
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
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
export default ProductsList;
