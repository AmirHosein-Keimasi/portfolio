import { Drawer } from '@mui/material';
import SidebarContent from '../Sidebar'

const SidebarDrawer = () => {
    return (
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
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <SidebarContent
          setDrowOpen={setDrowOpen}
          value={value}
          handelChenge={handelChenge}
        />
      </Drawer>
    );
}

export default SidebarDrawer;
