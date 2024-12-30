import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const Infoos = ({ children }) => {
  return (
    <Typography variant="body1" color="info" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
      --
    </Typography>
  );
};

export default Infoos;
