import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";


const SidebarContainer = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{
                backgroundColor:
                    theme.palette.mode === "dark" ? "primary.main" :"primary.main",
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
            }}
        >
            {children}
        </Grid>
    );
};

export default SidebarContainer;
