import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
const PagesContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      ls={10}
      xl={10}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
      }}
    >
      {" "}
      {children}
    </Grid>
  );
};

export default PagesContainer;
