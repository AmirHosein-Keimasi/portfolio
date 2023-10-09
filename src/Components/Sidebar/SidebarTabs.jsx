import {
  FaceRounded,
  Home,
  MessageRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";

const SidebarTabs = ({ handelChenge, value, setDrowOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };


  return (
    <>
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
          sx={{
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          icon={<Home />}
          iconPosition="start"
          {...tabProps(0)}
          onClick={()=>{setDrowOpen(true)}}
        />
        <Tab
          sx={{
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          {...tabProps(1)}
          label="درباره ی من "
          icon={<FaceRounded />}
          iconPosition="start"
          onClick={()=>{setDrowOpen(true)}}
        />
        <Tab
          {...tabProps(2)}
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          onClick={()=>{setDrowOpen(true)}}
          sx={{
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
        />
        <Tab
          {...tabProps(3)}
          label="نمونه کار ها "
          icon={<TerminalRounded />}
          iconPosition="start"
          onClick={()=>{setDrowOpen(true)}}
          sx={{
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
        />
        <Tab
          {...tabProps(4)}
          label=" ارتباط با من"
          icon={<MessageRounded />}
          iconPosition="start"
          onClick={()=>{setDrowOpen(true)}}
          sx={{
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
        />
      </Tabs>
    </>
  );
};
export default SidebarTabs;
