import React from "react";
import { SidebarTabs } from ".";
import { useTheme } from "@mui/material/styles";
import ThemeActionBtn from "../../layouts/Themes/ThemeActionBtn";
import { Box } from "@mui/material";

const SidebarContent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        pb: { xs: 5, sm: 2 },
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
      }}
    >
      <ThemeActionBtn />

      <SidebarTabs />
    </Box>
  );
};

export default SidebarContent;
