import React from 'react';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { grey,  } from "@mui/material/colors";


const SidebarContainer = ( {children}) => {
    return (
        <Grid
      xs={0}
      sm={0}
      md={3}
      ls={2}
      xl={2}
      sx={{ backgroundColor: grey[900] 
      ,
    height:'100vh',overflowY:'aoto',overflowX:'hidden'}}
    >
          {children}
    </Grid>
    );
}

export default SidebarContainer;
