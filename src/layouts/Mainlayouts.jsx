import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from "./Themes/theme";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Mainlayouts = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <div className="AppContainer ">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت شخصی امیرحسین کیماسی</title>
            </Helmet>
            {/* grid System */}

            {children}
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};

export default Mainlayouts;
