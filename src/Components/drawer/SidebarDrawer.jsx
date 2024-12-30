import { useContext } from "react";
import { Drawer } from "@mui/material";
import MainContext from "../../Context/index";
import CopySidebarContent from "../Sidebar/CopySidebarContent";
import { useTheme } from "@mui/material/styles";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
        },
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.main",
      }}
    >
      <CopySidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
