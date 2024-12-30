import { createContext } from "react";

export default createContext({
  pageNumber: 0,
  handelPageNumber: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
  handelThemeCheng: () => {},
});
