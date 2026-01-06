import { Typography, Box, Grid, Button } from "@mui/material";
import { useCountdown } from "@/hooks/useCountdown.js";
import { isAfterToday } from "@/utils/isAfterToday.js";

export const RaffleTicketCard = ({
  item,
  classes,
  handleItemClicked,
  user,
}) => {
  const { countDown } = useCountdown({ end: item.endTime });
  const isActive = isAfterToday(item.endTime) && item.active === 1;

  const isSoldOut = !parseInt(item.quantity) > 0;
  return (
    <div style={{ padding: "12px" }}>
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
        {isActive && !isSoldOut ? countDown : isSoldOut ? "Sold out " : "ended"}
      </Typography>

      <img
        src={item.image}
        className={classes.img}
        style={{
          filter: isActive && !isSoldOut ? "none" : "grayscale(100%)",
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
        <Typography variant="h5">{item.raffleName}</Typography>
        <Typography variant="body2" color="#C4C4C4">
          {item.quantity || 0}
          {" left"}
        </Typography>
      </Box>
      <Grid container display="flex" flexDirection="row" alignItems="center">
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
            <span style={{ marginRight: "0.2rem" }}>{item.currency}</span>
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
            {isActive && !isSoldOut ? "Shop now" : "See details"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
