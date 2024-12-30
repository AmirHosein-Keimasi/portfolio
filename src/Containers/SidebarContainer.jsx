import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",

        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
