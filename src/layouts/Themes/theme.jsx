import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    text: {
      main: "#040D12",
    },
    primary: {
      main: "#EAD7BB",
    },
    error: {
      main: "#BCA37F",
    },
    info: {
      main: "#113946",
    },
    warning:{
      main:"#6f6f10"
    },
    success:{
      main:"#EAD4BB"
    }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    text: {
      main: "#FFF2D8",
    },
    primary: {
      main: "#183D3D",
    },
    error: {
      main: "#5C8374",
    },
    info: {
      main: "#93B1A6",
    },
      warning:{
        main:"#64CCC5"
      },
      success:{
        main:"#0a9474"
      }
  },
  typography: {
    fontFamily: "tanha, vazir, roboto",
  },
});
