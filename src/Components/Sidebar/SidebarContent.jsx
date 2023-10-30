import React from "react";
import { Box, Divider } from "@mui/material";
import {SidebarHeader , SidebarFooter ,SidebarTabs} from ".";


const SidebarContent = () => {
 

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 1,
      }}
    >
     <SidebarHeader/>
      <Divider variant="middle" sx={{ mt: 1 }} />
   <SidebarTabs />
      <Divider variant="middle"  sx={{ mt: 1 }} />
      <SidebarFooter/>
    </Box>
  );
};

export default SidebarContent;
