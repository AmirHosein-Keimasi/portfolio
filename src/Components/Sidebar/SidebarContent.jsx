import React from "react";
import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter, SidebarTabs } from ".";
import { useTheme } from "@mui/material/styles";

const SidebarContent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
      }}
    >
      {/* <SidebarHeader/> */}
      {/* <Divider variant="middle" sx={{ mt: 1 }} /> */}
      <SidebarTabs />
      {/* <Divider variant="middle"  sx={{ mt: 1 }} /> */}
      {/* <SidebarFooter/> */}
    </Box>
  );
};

export default SidebarContent;
