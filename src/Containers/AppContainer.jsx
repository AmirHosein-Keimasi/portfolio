import Mainlayouts from "../layouts/Mainlayouts";
import { Sidebar } from "../Components/Sidebar";
import ContentContainer from "./ContentContainer";
import { useState } from "react";
import { Typography } from "@mui/material";
import TabPanel from "../Components/TabPanel";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../Context/index";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handelPageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handelPageNumber,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <Mainlayouts>
        <SidebarContainer>
          {" "}
          <Sidebar/>
        </SidebarContainer>

        <ContentContainer>
          <TabPanel value={pageNumber} index={0}>
            <Typography>safhe asli</Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={1}>
            <Typography>safhe asli1</Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={2}>
            <Typography>safhe asli2</Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={3}>
            <Typography>safhe asli3</Typography>
          </TabPanel>
          <TabPanel value={pageNumber} index={4}>
            <Typography>safhe asli4</Typography>
          </TabPanel>
        </ContentContainer>
      </Mainlayouts>
    </MainContext.Provider>
  );
}

export default AppContainer;
