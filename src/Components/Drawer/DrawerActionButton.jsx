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
        top: "20px",
        left: "20px",
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
            theme.palette.mode === "dark" ? "primary.dark" : "success.dark",
          m: 2,
        }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
