import { Box, Tab, Tabs } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../Context";
import { tabsData } from "../../constants/TabsData";
import styled from "@mui/system/styled";
import { AppBar, Toolbar, CssBaseline, Typography, Grid } from "@mui/material";

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
        height: "20vh",
        display: {
          flex: true,
          alignContent: "center",
          justifyContent: "center",
        },
      }}
    >
      <Grid container>
        <Grid xs={3}>
          <Item>xs</Item>
        </Grid>

        <Grid xs={6}>
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
                  {...tab}
                  icon={tab.icon}
                  label={tab.label}
                  sx={{
                    textDecoration: "none",
                    color: "text.main",
                    fontSize: "15px",
                    marginLeft: "70px",
                    "&:hover": {
                      color: "text.main",
                      opacity: 3,
                    },
                    "&.Mui-selected": {
                      color: "text.main",
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

        <Grid  xs={3}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SidebarTabs;
