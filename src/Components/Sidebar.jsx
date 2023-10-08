import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Drawer, Fab, Box } from "@mui/material";
import { useState } from "react";
import { grey,  } from "@mui/material/colors";
import DrawerContent from "./ui/DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ handelChenge, value }) => {
  const handelDrowerToggle = () => {
    setDrowOpen(!DrowOpen);
  };

  const [DrowOpen, setDrowOpen] = useState(false);
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      ls={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box sx={{
        display:{
          xs:"block",
          sm:"block",
          md:'none',
          ms:"none",
          lg:"none",
          xl:"none"
        }
      }}>
        <Fab onClick={handelDrowerToggle} color="primary" aria-label="Sidebar" size="small" sx={{ m: 2 }}>
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent value={value} handelChenge={handelChenge} />

      <Drawer
        open={DrowOpen}
        variant="tempray"
        onClose={() => {
          setDrowOpen(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            width: 300,
          },
          display: {
            xs:"block",
            sm:"block",
            md:"none",
            lg:"none",
          }
        }}
      >
        <DrawerContent value={value} handelChenge={handelChenge} />
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
