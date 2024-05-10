import React from "react";
import { Box } from "@mui/material";
import { SidebarTabs } from ".";
import { useTheme } from "@mui/material/styles";
import ThemeActionBtn from "../../layouts/Themes/ThemeActionBtn";

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
      <ThemeActionBtn />
      {/* <SidebarHeader/> */}
      {/* <Divider variant="middle" sx={{ mt: 1 }} /> */}
      <SidebarTabs />
      {/* <Divider variant="middle"  sx={{ mt: 1 }} /> */}
      {/* <SidebarFooter/> */}
    </Box>
  );
};

export default SidebarContent;
