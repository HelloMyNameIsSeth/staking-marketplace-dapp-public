import React, { useState } from "react";
import useStyles from "./style";
import { Typography, Grid, FormGroup, TextField, Button } from "@mui/material";
import { Banner, WalletConnect, Loader } from "@/components";
import { useSelector } from "react-redux";
import { formatWalletAddress } from "@/utils/formatAddress.js";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch } from "react-redux";
import { transferCoinTo } from "@/slices/user.slice";
import { toast } from "react-toastify";

const defaultTransferFormValues = {
  amount: "",
  toWallet: "",
};

export default function Transfer() {
  const classes = useStyles();
  const [transferFormValues, setTransferFormValues] = useState({
    ...defaultTransferFormValues,
  });
  const { error, userLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFormFieldValueChange = (event, key) => {
    const value = event.target.value;
    setTransferFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleTransfer = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <>
            <div className="modal-ui">
              <h1 style={{ marginBottom: "1rem" }}>Comfirm your transaction</h1>
              <p className="modal-p">
                Send{" "}
                <span className="modal-primary-text">
                  {transferFormValues.amount} $LOST
                </span>{" "}
                to{" "}
                <a
                  className="modal-primary-text"
                  href={
                    "https://etherscan.io/address/" +
                    transferFormValues.toWallet
                  }
                  target="_blank"
                >
                  {formatWalletAddress(transferFormValues.toWallet)}
                </a>
              </p>
              <Button
                className="button-modal-text"
                variant="text"
                onClick={() => onClose()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className="button-modal-contained"
                onClick={() => {
                  dispatch(
                    transferCoinTo(
                      transferFormValues.toWallet.toLowerCase(),
                      transferFormValues.amount,
                      user.owner
                    )
                  )
                    .then(() => {
                      toast.success("Transfer completed", {
                        position: "bottom-center",
                        autoClose: 2000,
                        theme: "dark",
                      });
                      setTransferFormValues(defaultTransferFormValues);
                    })
                    .catch((err) => {
                      toast.error(err.response.data.message, {
                        position: "bottom-center",
                        autoClose: 2000,
                        theme: "dark",
                      });
                    });
                  onClose();
                }}
              >
                Confirm
              </Button>
            </div>
          </>
        );
      },
    });
  };

  const checkFormValues = () => {
    let isValid = false;
    const isAmountValid =
      transferFormValues.amount &&
      transferFormValues.amount.length &&
      !Number.isNaN(Number(transferFormValues.amount));
    const isRecipientAddressValid =
      transferFormValues.toWallet && transferFormValues.toWallet.length === 42;
    if (isAmountValid && isRecipientAddressValid) {
      isValid = true;
    }

    return !isValid;
  };

  return (
    <div>
      <Banner title={"longlost Coin Transfer"} showBackBtn={false} />

      {user.owner == undefined ? (
        <WalletConnect message="Connect Your Wallet" />
      ) : userLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2} className={classes.container}>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  1
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    How much
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Select the quantity of $LOST token to send
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  2
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    Choose a recipient
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Fill the field with the recipient wallet address
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              md={4}
              className={classes.infoContainer}
            >
              <Grid item xs={3} sm={3} lg={3} md={3}>
                <Typography variant="h1" className={classes.title}>
                  3
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                lg={9}
                md={9}
                className={classes.subContain}
              >
                <Typography variant="h1" className={classes.titletxt}>
                  <span
                    style={{
                      borderBottom: "2px solid #A031F7",
                      paddingBottom: "6px",
                    }}
                  >
                    Confirm the transaction
                  </span>
                </Typography>
                <Typography className={classes.subtxt}>
                  Confirm the transaction before sending the coins.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} md={12}>
              {user.owner ? (
                <>
                  <div className={classes.transferContainer}>
                    <div className={classes.cardContainer}>
                      <div className={classes.infoDiv}>
                        <Typography
                          variant="h3"
                          color="white"
                          className={classes.cardSubtxt}
                        >
                          {"Send from : "}
                          <span className={classes.primaryText}>
                            {formatWalletAddress(user?.owner)}
                          </span>
                        </Typography>
                        <FormGroup>
                          <TextField
                            required
                            id="amount"
                            label="Amount"
                            placeholder="Ex :150"
                            value={transferFormValues.amount}
                            onChange={(event) =>
                              handleFormFieldValueChange(event, "amount")
                            }
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className={classes.cardContainer}>
                      <div className={classes.infoDiv}>
                        <Typography
                          variant="h3"
                          color="white"
                          className={classes.cardSubtxt}
                        >
                          {"To wallet :"}{" "}
                          {transferFormValues.toWallet &&
                          transferFormValues.toWallet.length === 42 ? (
                            <a
                              className="modal-primary-text"
                              href={
                                "https://etherscan.io/address/" +
                                transferFormValues.toWallet
                              }
                              target="_blank"
                            >
                              {formatWalletAddress(transferFormValues.toWallet)}
                            </a>
                          ) : null}
                        </Typography>
                        <FormGroup>
                          <TextField
                            required
                            id="toWallet"
                            label="Recipient address"
                            placeholder="Ex : 0x2e230FED487c86B90f6508104149F087d9B1B0A5"
                            value={transferFormValues.toWallet}
                            onChange={(event) =>
                              handleFormFieldValueChange(event, "toWallet")
                            }
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                  <div className={classes.comfirmContainer}>
                    <Button
                      variant="contained"
                      onClick={handleTransfer}
                      disabled={checkFormValues()}
                    >
                      Confirm send
                    </Button>
                  </div>
                </>
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
