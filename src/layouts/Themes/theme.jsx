import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    text: {
      main: "#0000009e",
      dark: "#3a3c3f",
    },
    primary: {
      main: "#F6F5F2",
      dark: "#38414A",
    },
    error: {
      main: "#d2d3db",
    },
    info: {
      main: "#9394a5",
    },
    warning: {
      main: "#6096B4",
    },
    success: {
      main: "#93BFCF",
    },
  },
  typography: {
    fontFamily: ["Tanha, Vazir, roboto"],
  },
  // typography: {
  //   fontFamily: ["Tanha, Vazir, roboto"],
  // },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    text: {
      dark: "#141516",
      main: "#d8e4e1",
    },
    primary: {
      dark: "#F6F5F2",
      main: "#38414A",
    },
    error: {
      main: "##1A2837",
    },
    info: {
      main: "##2B4052",
    },
    warning: {
      main: "#445C6D",
    },
    success: {
      main: "#367275",
    },
  },
  typography: {
    fontFamily: ["Tanha, Vazir, roboto"],
  },
  // typography: {
  //   fontFamily: ["tanha, vazir, roboto"],
  // },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
