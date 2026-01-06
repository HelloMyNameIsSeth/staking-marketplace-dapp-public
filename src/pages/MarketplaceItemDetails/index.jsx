import React, { useState } from "react";
import useStyles from "./style";
import { useNavigate, useParams } from "react-router-dom";
import main from "@/assets/image/main.svg";
import {
  Button,
  Grid,
  useMediaQuery,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useCountdown } from "@/hooks/useCountdown.js";

import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "@/slices/products.slice";
import { useEffect } from "react";
import { LocalStorageService } from "@/services";

export default function MarketplaceItemDetails() {
  const { productId } = useParams();
  const [item, setItem] = useState();
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const { countDown } = useCountdown({ end: item?.endTime });
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const isActive = item?.active === 1;
  const isSoldOut = !parseInt(item?.quantity) > 0;

  console.log({ productId });

  useEffect(() => {
    if (productId) {
      const fetchProductDetails = async () => {
        const productDetails = await fetchProduct(productId);
        setItem(productDetails);
      };
      fetchProductDetails();
    }
  }, [productId]);

  console.log({ item });

  if (!item) {
    return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <CircularProgress size={"60px"} />
      </div>
    );
  }

  return (
    <div>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}
      >
        <img src={main} className={classes.mainImg} />
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          className={classes.backBtn}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={4} lg={3} md={4}>
          <div className={isMobile ? "" : classes.listView}>
            <img
              src={item.image}
              className={classes.img}
              style={{
                filter: isActive && !isSoldOut ? "none" : "grayscale(100%)",
              }}
            />
            <Typography
              style={{
                position: "absolute",
                padding: "0.25rem 0.5rem",
                background: "rgba(0,0,0,0.5)",
                top: "16px",
                right: "16px",
                borderRadius: "0.5rem",
                backdropFilter: "blur(5px)",
                fontSize: "20px",
              }}
            >
              {isActive && !isSoldOut
                ? countDown
                : isSoldOut
                ? "Sold out"
                : "Ended"}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} lg={9} md={8}>
          <Typography
            variant="h1"
            sx={{ textTransform: "uppercase", margin: "1rem 0" }}
          >
            {item.productName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "32px !important",
              fontWeight: "200",
              lineHeight: "1.125rem",
              fontSize: "1.125rem",
              whiteSpace: "pre-line",
              fontFamily: "Roboto-Regular !important",
              opacity: "0.9",
            }}
          >
            {item.description}
          </Typography>
          <div className={classes.dataContainer}>
            <Typography className={classes.dataText}>
              Price :
              <Typography className={classes.priceContainer}>
                <span style={{ transform: "translateY(4px)" }}>
                  {item.price}
                </span>
                <img
                  style={{}}
                  width={"32px"}
                  height={"32px"}
                  src={
                    "https://storage.googleapis.com/ishro/uploads/63788eada3e1d.svg"
                  }
                />
              </Typography>
            </Typography>

            <Typography className={classes.dataText}>
              Stock :
              <Typography className={classes.priceContainer}>
                <span>
                  {(item.quantity | 0) === 0 ? "Sold out" : item.quantity}
                </span>
              </Typography>
            </Typography>
            <Button
              variant="contained"
              className={classes.btn}
              fullWidth
              style={{ flex: 2 }}
              disabled={!isActive || isSoldOut || !user.owner}
              onClick={() => {
                var prevCarts = JSON.parse(
                  LocalStorageService.getUserLocalCarts()
                )
                  ? JSON.parse(LocalStorageService.getUserLocalCarts())
                  : [];
                const found = prevCarts.some((el) => el._id === item._id);
                if (!found) {
                  let cartItem = { ...item };
                  cartItem.purchase_quantity = 1;
                  prevCarts.push(cartItem);
                } else {
                  if (prevCarts.length) {
                    for (let i = 0; i < prevCarts.length; i++) {
                      if (prevCarts[i]._id === item._id) {
                        prevCarts[i].purchase_quantity = item.purchase_quantity;
                      }
                    }
                  }
                }
                LocalStorageService.addUserLocalCarts(prevCarts);
                navigate("/myBag");
              }}
            >
              Add to bag
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
