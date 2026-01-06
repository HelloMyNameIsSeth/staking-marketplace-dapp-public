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
  Switch,
  Button,
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
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

const defaultProductFormValues = {
  productID: null,
  productName: "",
  raffleName: "",
  image: "",
  numberOfWinners: 1,
  quantity: 1,
  active: true,
  requireShippingInfos: 0,
  price: 0,
  currency: "$LOST",
  category: "raffle tickets",
  creationDate: dayjs(Date.now()),
  startTime: dayjs(Date.now()),
  endTime: dayjs(Date.now()).add(1, "month"),
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

export default function RaffleProducts() {
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

  const handleSwitchShippingInfosValueChange = (event) => {
    setProductFormValues((prev) => ({
      ...prev,
      requireShippingInfos: event.target.checked,
    }));
  };

  const handleItemClicked = (product) => {
    const startTime = dayjs(product.startTime);
    const endTime = dayjs(product.endTime);

    setProductFormValues({
      ...product,
      active: !!product.active,
      startTime,
      endTime,
    });
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
          {"Raffles - Products"}
        </Typography>
        <div className={classes.createButton}>
          <Button variant="outlined" onClick={handleCreateProductButton}>
            Create Raffle
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
            <h1 style={{ marginBottom: "0" }}>Raffle Product</h1>
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
                id="raffleName"
                label="Raffle Name"
                value={productFormValues.raffleName}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "raffleName")
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
                id="numberOfWinners"
                label="Number of winners"
                value={productFormValues.numberOfWinners}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "numberOfWinners")
                }
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
                required
                id="description"
                label="description"
                value={productFormValues.description}
                onChange={(event) =>
                  handleFormFieldValueChange(event, "description")
                }
              />
              <DateField
                required
                id="startTime"
                label="Start Date"
                value={productFormValues.startTime}
                onChange={(newValue) =>
                  handleFormFieldValueChange(
                    { target: { value: newValue } },
                    "startTime"
                  )
                }
              />
              <DateField
                required
                id="endTime"
                label="End Date"
                value={productFormValues.endTime}
                onChange={(newValue) =>
                  handleFormFieldValueChange(
                    { target: { value: newValue } },
                    "endTime"
                  )
                }
              />
            </FormGroup>

            <FormGroup>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Switch
                    id="active"
                    checked={productFormValues.active}
                    onChange={handleSwitchValueChange}
                  />
                }
                label="Active"
              />
            </FormGroup>
            {/* <FormGroup>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Switch
                    id="requireShippingInfos"
                    checked={productFormValues.requireShippingInfos}
                    onChange={handleSwitchShippingInfosValueChange}
                  />
                }
                label="Require shipping infos"
              />
            </FormGroup> */}
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
                (c) => c.category === "raffle tickets"
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
