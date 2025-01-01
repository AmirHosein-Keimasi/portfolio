import { useContext } from "react";
import { Fab, Box } from "@mui/material";
import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import MainContext from "../../Context/index";
import { useTheme } from "@emotion/react";
import InstallButton from "../../InstallButton";

const ThemeActionBtn = () => {
  const { handelThemeCheng } = useContext(MainContext);
  const theme = useTheme();

  return (
    <Box
      position="fixed"
      sx={{
        top: "40px",
        right: "40px",
      }}
    >
      <InstallButton />
      <Fab
        variant="extended"
        aria-label="ThemeChenge"
        size="small"
        color="text.main"
        onClick={() => handelThemeCheng(true)}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "primary.dark" : "success.dark",
          ml: 2,
          padding: 2,
        }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ mr: 1 }} />
        ) : (
          <NightlightOutlined sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActionBtn;
