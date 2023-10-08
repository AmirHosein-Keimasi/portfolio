import React from "react";
import {
  Box,
  Hidden,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Divider,
} from "@mui/material";
import {
  Home,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ handelChenge, value }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      
        <Avatar
          src={require("../../assets/logo.jpg")}
          sx={{ 
           
                display:{
                  xs:"none",
                  sm:"none",
                  md:'block',
                  lg:"block",
                  xl:"block"
                }
             ,
            width: 200,
            height: 200,
            margin: " 0 auto",
          }}
        />
    {" "}
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
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <Tabs
        orientation="vertical"
        variant="scrollabel"
        allowScrollButtonsMobile
        scrollButtons="auto"
        onChange={handelChenge}
        value={value}
      >
        <Tab
          label="صفحه اصلی"
          icon={<Home />}
          iconPosition="start"
          {...tabProps(0)}
        />
        <Tab
          {...tabProps(1)}
          label="درباره ی من "
          icon={<FaceRounded />}
          iconPosition="start"
        />
        <Tab
          {...tabProps(2)}
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
        />
        <Tab
          {...tabProps(3)}
          label="نمونه کار ها "
          icon={<TerminalRounded />}
          iconPosition="start"
        />
        <Tab
          {...tabProps(4)}
          label=" ارتباط با من"
          icon={<MessageRounded />}
          iconPosition="start"
        />
      </Tabs>
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
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
    </Box>
  );
};

export default DrawerContent;
