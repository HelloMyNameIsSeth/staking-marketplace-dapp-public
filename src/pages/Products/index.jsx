import React, { useEffect, useState } from "react";
import useStyles from "./style";
import main from "@/assets/image/main.svg";
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Switch,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ProductsList } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsList,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/slices/products.slice";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "react-modal";

const defaultProductFormValues = {
  productID: null,
  productName: "",
  image: "",
  url: "",
  quantity: 1,
  active: true,
  price: 0,
  currency: "$",
  category: "apparel",
  discountAmount: "",
  description: "",
};

const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.5)",
    zIndex: "999",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
  },
};

Modal.setAppElement("#root");

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error, loading, productsList } = useSelector(
    (state) => state.productsList
  );
  const [productFormValues, setProductFormValues] = useState({
    ...defaultProductFormValues,
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdateProduct = () => {
    if (productFormValues._id) {
      dispatch(
        updateProduct({
          ...productFormValues,
          productID: productFormValues._id,
        })
      );
      setProductFormValues({ ...defaultProductFormValues });
    } else {
      dispatch(
        createProduct({
          ...productFormValues,
          productID: productsList ? productsList.length + 1 : 1,
        })
      );
      setProductFormValues({ ...defaultProductFormValues });
    }
  };

  const handleFormFieldValueChange = (event, key) => {
    const value = event.target.value;
    setProductFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSwitchValueChange = (event) => {
    setProductFormValues((prev) => ({ ...prev, active: event.target.checked }));
  };

  const handleItemClicked = (product) => {
    setProductFormValues({ ...product, active: !!product.active });
    openModal();
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(productFormValues._id));
    closeModal();
  };

  const handleCreateProductButton = (product) => {
    setProductFormValues({ ...defaultProductFormValues });
    openModal();
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "block" }, position: "relative" }}>
        <img src={main} className={classes.mainImg} />
        <Typography variant="h1" color="white" className={classes.bannertxt}>
          {"Marketplace - Products"}
        </Typography>
        <div className={classes.createButton}>
          <Button variant="outlined" onClick={handleCreateProductButton}>
            Create Product
          </Button>
        </div>
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-ui">
          <div className={classes.row}>
            <h1 style={{ marginBottom: "0" }}>Product</h1>
            <Button variant="text" onClick={closeModal}>
              <CloseIcon fontSize="large" />
            </Button>
          </div>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
                marginLeft: 0,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <FormGroup>
              <TextField
                required
                id="productName"
                label="Product Name"
                value={productFormValues.productName}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "productName")
                }
              />
              <TextField
                required
                id="image"
                label="Product Image url"
                value={productFormValues.image}
                onChange={(event) => handleFormFieldValueChange(event, "image")}
              />
              <TextField
                required
                id="quantity"
                label="Quantity"
                value={productFormValues.quantity}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "quantity")
                }
              />
              <TextField
                required
                id="price"
                label="Price"
                value={productFormValues.price}
                onChange={(event) => handleFormFieldValueChange(event, "price")}
              />
              <TextField
                multiline
                id="description"
                label="description"
                value={productFormValues.description}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "description")
                }
              />
              {productFormValues.category === "discounts" ? (
                <TextField
                  id="discountAmount"
                  label="Discount"
                  value={productFormValues.discountAmount}
                  onChange={(event) =>
                    handleFormFieldValueChange(event, "discountAmount")
                  }
                />
              ) : null}
              <FormControl fullWidth style={{ margin: "0.5rem 0" }}>
                <InputLabel id="currency">Currency</InputLabel>
                <Select
                  inputProps={{
                    MenuProps: {
                      MenuListProps: {
                        sx: {
                          backgroundColor: "#191919",
                          width: "100%",
                        },
                      },
                    },
                  }}
                  labelId="currency"
                  id="currency"
                  value={productFormValues.currency}
                  label="currency"
                  onChange={(event) =>
                    handleFormFieldValueChange(event, "currency")
                  }
                >
                  <MenuItem value={"$"}>$</MenuItem>
                  <MenuItem value={"$LOST"}>$LOST</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ margin: "0.5rem 0" }}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  inputProps={{
                    MenuProps: {
                      MenuListProps: {
                        sx: {
                          backgroundColor: "#191919",
                          width: "100%",
                        },
                      },
                    },
                  }}
                  labelId="category"
                  id="category"
                  value={productFormValues.category}
                  label="category"
                  onChange={(event) =>
                    handleFormFieldValueChange(event, "category")
                  }
                >
                  <MenuItem value={"apparel"}>apparel</MenuItem>
                  <MenuItem value={"NFT’s"}>NFT’s</MenuItem>
                  <MenuItem value={"customs"}>customs</MenuItem>
                  <MenuItem value={"events"}>events</MenuItem>
                  <MenuItem value={"discounts"}>Discounts</MenuItem>
                </Select>
              </FormControl>
              {productFormValues.category === "apparel" ? (
                <TextField
                  id="url"
                  label="Product Shop redirect url"
                  value={productFormValues.url}
                  onChange={(event) => handleFormFieldValueChange(event, "url")}
                />
              ) : null}
            </FormGroup>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    id="active"
                    checked={productFormValues.active}
                    onChange={handleSwitchValueChange}
                  />
                }
                label="Active"
                style={{ marginLeft: "auto" }}
              />
            </FormGroup>
          </Box>
          <div className={classes.buttonContainer}>
            {productFormValues._id ? (
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteProduct}
              >
                Delete
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="error"
                onClick={() => closeModal()}
              >
                Close
              </Button>
            )}
            <Button
              variant="contained"
              className="button-modal-contained"
              onClick={() => {
                handleUpdateProduct();
                closeModal();
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
      <div className={classes.createButtonSmall}>
        <Button variant="outlined" onClick={handleCreateProductButton}>
          Create Product
        </Button>
      </div>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2} className={classes.nftcol}>
            <ProductsList
              products={productsList.filter(
                (c) => c.category !== "raffle tickets"
              )}
              handleItemClicked={handleItemClicked}
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
