import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
        height: "15vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
