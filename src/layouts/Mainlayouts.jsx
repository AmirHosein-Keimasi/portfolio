import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "./Themes/theme";
import { CacheProvider } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography, Box, Divider, Avatar } from "@mui/material";


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Mainlayouts = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی امیرحسین کیماسی</title>
          </Helmet>
          {/* grid System */}
          <Grid container sx={{ height: "100vh" }}>
           {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Mainlayouts;
