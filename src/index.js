import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./Containers/AppContainer";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);

serviceWorkerRegistration.unregister();
