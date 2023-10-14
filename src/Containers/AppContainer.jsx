import Mainlayouts from "../layouts/Mainlayouts";
import { Sidebar } from "../Components/Sidebar";
import PagesContainer from "./PagesContainer";
import { useState } from "react";
import { Typography } from "@mui/material";
import Page from "../Pages/Components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../Context/index";
import DrawerActionButton from "../Components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import {Home,About} from "../Pages/index";

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
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onchengeIndex={handelPageNumber}>
            <Page value={pageNumber} index={0}>
              <Home/>
            </Page>
            <Page value={pageNumber} index={1}>
            <About/>
            </Page>
            <Page value={pageNumber} index={2}>
              <Typography>safhe asli2</Typography>
            </Page>
            <Page value={pageNumber} index={3}>
              <Typography>safhe asli3</Typography>
            </Page>
            <Page value={pageNumber} index={4}>
              <Typography>safhe asli4</Typography>
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </Mainlayouts>
    </MainContext.Provider>
  );
}

export default AppContainer;
