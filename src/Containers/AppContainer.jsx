import Mainlayouts from "../layouts/Mainlayouts";
import PagesContainer from "./PagesContainer";
import { Page } from "../Components/Pages/index";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../Context/index";
import DrawerActionButton from "../Components/Drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Home, About, Comment, Resume, Contact } from "../Pages/index";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Sidebar } from "../Components/Sidebar";
function AppContainer() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode("dark");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handelPageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  const handelThemeCheng = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
              <Home helmetTitle=" وب سایت شخصی امیرحسین کیماسی" />
            </Page>
            <Page value={pageNumber} index={1}>
              <About helmetTitle=" وب سایت شخصی |درباره من" />
            </Page>
            <Page value={pageNumber} index={2}>
              <Resume helmetTitle=" وب سایت شخصی |رزومه من" />
            </Page>
            <Page value={pageNumber} index={3}>
              <Comment helmetTitle=" وب سایت شخصی | کامنت های من" />
            </Page>
            <Page value={pageNumber} index={4}>
              <Contact helmetTitle=" وب سایت شخصی |  ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </Mainlayouts>
    </MainContext.Provider>
  );
}

export default AppContainer;
