import { useContext } from "react";
import { Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import MainContext from "../../Context/index";
import { useTheme } from "@mui/material/styles";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        onClick={() => setDrawerOpen(true)}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "primary.main" : "primary.main",
          m: 2,
        }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
