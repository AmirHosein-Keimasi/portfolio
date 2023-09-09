import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from "../ui/theme";


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});



const Mainlayouts = ({Children}) => {
  return (
    <cacheProcider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی امیرحسین کیماسی</title>
          </Helmet>
          {Children}
        </HelmetProvider>
      </ThemeProvider>
    </cacheProcider>
  );
};

export default Mainlayouts;
