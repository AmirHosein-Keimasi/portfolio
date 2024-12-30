import { Box, Tab, Tabs } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../Context";
import { tabsData } from "../../constants/TabsData";
import styled from "@mui/system/styled";
import { Grid } from "@mui/material";
import ThemeActionBtn from "../../layouts/Themes/ThemeActionBtn";

const Item = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "text.main" : "text.main",
  borderRadius: "4px",
  textAlign: "center",
}));

const SidebarTabs = () => {
  const { setDrawerOpen, handelPageNumber, pageNumber } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <Box
      sx={{
        mt: 3,
        display: {
          flex: true,
          alignContent: "center",
          justifyContent: "center",
        },
      }}
    >
      <Grid container>
        <Grid
          xs={8}
          sm={8}
          md={8}
          ls={9}
          xl={9}
          sx={{
            ml: 20,
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Item>
            {" "}
            <Tabs
              variant="scrollabel"
              allowScrollButtonsMobile
              scrollButtons="auto"
              onChange={handelPageNumber}
              value={pageNumber}
            >
              {data.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{
                    textDecoration: "none",
                    color: "text.main",
                    fontSize: "16px",
                    marginLeft: "70px",
                    "&:hover": {
                      color: "success.main",
                      opacity: 3,
                    },
                    "&.Mui-selected": {
                      color: "success.main",
                      fontWeight: "bold",
                    },
                    my: 0.5,
                    mx: 1,
                    "&.MuiTab-root": {
                      minHeight: 50,
                    },
                  }}
                  iconPosition="start"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                />
              ))}
            </Tabs>
          </Item>
        </Grid>

        <Grid
          sx={{
            mt: 1.5,
          }}
          xs={12}
          sm={12}
          md={1}
          ls={1}
          xl={1}
        >
          <Item>
            <ThemeActionBtn />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SidebarTabs;
