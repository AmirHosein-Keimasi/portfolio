import React from "react";
import { Box, Divider } from "@mui/material";
import { grey, } from "@mui/material/colors";
import {SidebarHeader , SidebarFooter ,SidebarTabs} from ".";


const SidebarContent = ({ handelChenge, value, setDrowOpen }) => {
 

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
     <SidebarHeader/>
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
   <SidebarTabs  value={value} handelChenge={handelChenge} setDrowOpen={setDrowOpen} />
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <SidebarFooter/>
    </Box>
  );
};

export default SidebarContent;