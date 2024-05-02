import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    text: {
      main: "#B3B9C4",
      dark: "#9CAFAA",
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
      main: "#484b6a",
    },
    success: {
      main: "#c2492d",
    },
  },
  typography: {
    fontFamily: ["Tanha, Vazir, roboto"],
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:'none'
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
      dark: "#B3B9C4",
      main: "#9CAFAA",
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
      main: "#0a9474",
    },
  },
  typography: {
    fontFamily: ["tanha, vazir, roboto"],
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:'none'
        },
      },
    },
  },
});
