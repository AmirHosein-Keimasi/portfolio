import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Page = (props) => {
  const { children, value, index, ...others } = props;
  const theme = useTheme();
  return (
    <div
      role="tabpanel"
      hiddel={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {value === index && (
        <Box
          sx={{
            height: "100vh",
            overflow: "hidden",
            backgroundColor:
              theme.palette.mode === "dark" ? "primary.main" : "primary.main",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default Page;
