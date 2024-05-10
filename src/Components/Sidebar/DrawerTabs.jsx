import { Tab, Tabs } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../Context";
import { tabsData } from "../../constants/TabsData";

const DrawerTabs = () => {
  const { setDrawerOpen, handelPageNumber, pageNumber } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <Tabs
    orientation="vertical"
    variant="scrollabel"
    allowScrollButtonsMobile
    scrollButtons="auto"
    onChange={handelPageNumber}
    value={pageNumber}
  >
    {data.map((tab, index) => (
      <Tab
        key={index}
        {...tab}
        icon={tab.icon}
        label={tab.label}
        sx={{
          "&:hover": {
            color: "text.main",
            opacity: 3,
          },
          "&.Mui-selected": {
            color: "text.main",
           fontWeight:"bold"
          },
          my: 0.5,
          mx: 1,
          "&.MuiTab-root": {
            minHeight:70,
          },
        }}
        iconPosition="start"
        onClick={() => {
          setDrawerOpen(false);
        }}
      />
    ))}
  </Tabs>
  );
};
export default DrawerTabs;
