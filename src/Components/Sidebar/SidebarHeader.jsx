import { Avatar,Typography } from '@mui/material';
import React from 'react';

const SidebarHeader = () => {
    return (
       <>
        <Avatar
        src={require("../../Assets/logo.jpg")}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          width: 200,
          height: 200,
          margin: " 0 auto",
        }}
      />{" "}
      <Typography color="whitesmoke" sx={{ textAlign: "center" }} variant="h5">
        امیرحسین کیماسی
      </Typography>
      <Typography
        color="whitesmoke"
        sx={{ textAlign: "center" }}
        variant="caption"
      >
        pc Gamer
      </Typography>
       </>
    );
}

export default SidebarHeader;
