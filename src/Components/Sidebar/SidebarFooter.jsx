import { CopyrightRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const SidebarFooter = () => {
    return (
        <>
         <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده توسط{" "}
          <Typography sx={{ mt: 2 }}>
            {" "}
            کپی رایت 1402{" "}
            <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
          </Typography>
        </Typography>
      </Box>   
        </>
    );
}

export default SidebarFooter;
