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
        py: 3,
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
