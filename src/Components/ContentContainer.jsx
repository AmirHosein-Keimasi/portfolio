import React from 'react';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography, Box, Divider, Avatar } from "@mui/material";

const ContentContainer = ({children}) => {
    return (
        <Grid
        xs={12}
        sm={12}
        md={9}
        ls={10}
        xl={10}
        sx={{ backgroundColor: "blue" }}
      >
        
         {children}
    
      </Grid>
     
    );
}

export default ContentContainer;
