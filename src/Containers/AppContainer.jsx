import Mainlayouts from "../layouts/Mainlayouts";
import { Sidebar } from "../Components/Sidebar";
import PagesContainer from "./PagesContainer";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Page from "../Pages/Components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../Context/index";
import DrawerActionButton from "../Components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import { Home, About,Comment,Resume } from "../Pages/index";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


function AppContainer() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
const [mode, setMode] = useState()

useEffect(() => {
  setMode("dark")
}, []);


  useEffect(() => {
    if(isMdUp){
      setDrawerOpen(false)
    }
  }, [isMdUp]);

  const handelPageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  const handelThemeCheng = () => {
    setMode((prevMode) =>prevMode=== "light" ? "dark" :"light")
  };

  return (
    <MainContext.Provider
      value={{
        handelThemeCheng,
        pageNumber,
        handelPageNumber,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <Mainlayouts mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
    
        <PagesContainer>
          <SwipeableViews index={pageNumber} onchengeIndex={handelPageNumber}>
            <Page value={pageNumber} index={0}>
              <Home   helmetTitle=" وب سایت شخصی امیرحسین کیماسی"/>
            </Page>
            <Page value={pageNumber} index={1}>
              <About  helmetTitle=" وب سایت شخصی |درباره من" />
            </Page>
            <Page value={pageNumber} index={2}>
             <Resume  helmetTitle=" وب سایت شخصی |رزومه من"/>
            </Page>
            <Page value={pageNumber} index={3}>
              <Typography>  <Comment  helmetTitle=" وب سایت شخصی |کامنت های من"/></Typography>
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
