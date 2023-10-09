import React from "react";
import { Typography,Box } from "@mui/material";

const TabPanel = (props) => {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
