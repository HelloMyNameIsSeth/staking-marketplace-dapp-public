import i18next from "i18next";
import { create } from "jss";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { StylesProvider, jssPreset } from "@mui/styles";
import shadows from "@/assets/theme/shadows";
import typography from "@/assets/theme/typography";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const preset = create({
  plugins: [...jssPreset().plugins],
});

export default function Jss(props) {
  const secondaryColor = "#FFFFFF";
  const primaryColor = "#A031F7";
  const black = "#1E1E1E";
  const darkgray = "#363636";
  const accentBlue = "#0077BE";
  const secondaryColor_vip = "#B1A773";

  let theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            zIndex: 1,
            fontFamily: "BurbankBigCondensed-Bold",
            backgroundColor: primaryColor,
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontSize: "20px",
            padding: "4px 32px",
            borderRadius: "8px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: primaryColor,
            },
          },
          outlined: {
            background: "#191919",
            border: "2px solid #FFFFFF",
            borderRadius: "12px",
            fontFamily: "BurbankBigCondensed-Bold",
            textTransform: "capitalize",
            fontSize: "22px",
            cursor: "pointer",
            color: secondaryColor,
            "&:hover": {
              background: "#191919",
              borderColor: secondaryColor,
              border: "2px solid #FFFFFF",
            },
          },
          text: {
            color: "#FFFFFF",
            fontSize: "24px",
            zIndex: 1,
            cursor: "pointer",
            textTransform: "capitalize",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            // color: "#FFFFFF",
            // background: "#191919",
            // border: "2px solid #FFFFFF",
            // borderRadius: "12px",
            // "&::focus-visible": {
            //   outline: "none",
            // },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            padding: "1% 4% !important",
            fontFamily: "BurbankBigCondensed-Bold !important",
          },
        },
      },
      Mui: {
        completed: {
          color: "#f9f9f9",
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: "20px",
          },
        },
      },
    },
    palette: {
      background: {
        dark: "#E2E2E3",
        default: "#303030",
        paper: "#151316",
        light: "#FFFFFE",
        black: black,
        blue: accentBlue,
        vip: secondaryColor_vip,
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: "#FFFFFF",
        secondary: "rgba(252, 252, 252, 0.6);",
        black: "#353434",
        white: "#FFFFFF",
        light: "#E5E5E5",
      },
    },
    shadows,
    overrides: {
      MuiCheckbox: {
        root: {
          color: "#ff5f1f",
        },
        colorPrimary: {
          checked: {
            color: "#ff5f1f",
          },
        },
      },
      MuiCard: {
        root: {
          backgroundColor: black,
          padding: "20px",
          borderRadius: "22px",
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  theme.typography.h1 = {
    fontSize: 38,
    [theme.breakpoints.down("lg")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  };
  theme.typography.h2 = {
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  };
  theme.typography.h3 = {
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  };
  theme.typography.h4 = {
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  };
  theme.typography.h5 = {
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "180%",
      marginBottom: "5px",
    },
  };

  theme.typography.h6 = {
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  };
  theme.typography.body2 = {
    fontSize: 12,
    lineHeight: "180%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  };

  return (
    <StylesProvider jss={preset}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
}
