import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../ui/theme";
import {CacheProvider} from "@emotion/react";

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
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Mainlayouts;
