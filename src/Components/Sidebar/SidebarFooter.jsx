import { CopyrightRounded } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
const SidebarFooter = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          backgroundColor:
            theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        }}
      >
        <Typography variant="subtitle2" color="text.main">
          طراحی شده توسط{" "}
          <Link
            href="https://telegram.im/@amir1_1"
            color="inherit"
            underline="hover"
          >
            {" "}
            امیرحسین کیماسی{" "}
          </Link>
          <Typography sx={{ mt: 1 }}>
            {" "}
            کپی رایت 1402{" "}
            <CopyrightRounded sx={{ verticalAlign: "middle", height: 10 }} />
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
