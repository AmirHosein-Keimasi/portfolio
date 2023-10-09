import { useContext } from "react";
import { Drawer } from "@mui/material";
import MainContext from "../../Context/index";
import { SidebarContent } from "../Sidebar/index";

const SidebarDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useContext(MainContext);

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
            }}
        >
            <SidebarContent />
        </Drawer>
    );
};

export default SidebarDrawer;
