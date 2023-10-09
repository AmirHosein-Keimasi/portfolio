import { MenuRounded } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { red } from '@mui/material/colors';


const DrawerActionButton = () => {
    return (
        <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            ms: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          onClick={() => {
            setDrowOpen(true);
          }}
          color="primary"
          aria-label="Sidebar"
          size="small"
          sx={{ m: 2, backgroundColor: red[500] }}
        >
          <MenuRounded />
        </Fab>
      </Box>
    );
}

export default DrawerActionButton;
