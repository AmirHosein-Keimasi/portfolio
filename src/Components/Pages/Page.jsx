import React from "react";
import { Box } from "@mui/material";

const Page = (props) => {
  const { children, value, index, ...others } = props;

  return (
    <div
      role="tabpanel"
      hiddel={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {value === index && (
        <Box sx={{ height:"100vh", overflow:"hidden" }}>
       {children}
        </Box>
      )}
    </div>
  );
};

export default Page;
