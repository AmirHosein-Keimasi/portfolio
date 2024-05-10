import React from "react";
import { Box, Divider } from "@mui/material";
import { SidebarHeader, SidebarFooter } from ".";
import { useTheme } from "@mui/material/styles";
import DrawerTabs from "./DrawerTabs";

const CopySidebarContent = () => {
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
      <SidebarHeader />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <DrawerTabs />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  );
};

export default CopySidebarContent;
