import Mainlayouts from "../layouts/Mainlayouts";
import { Sidebar } from "../Components/Sidebar";
import ContentContainer from "./ContentContainer";
import { useState } from "react";
import { Typography } from "@mui/material";
import TabPanel from "../Components/TabPanel";
import SidebarContainer from "./SidebarContainer";

function AppContainer() {
  const [value, setValue] = useState(0);
  const [DrowOpen, setDrowOpen] = useState(false);
  
  const handelChenge = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Mainlayouts>
      <SidebarContainer>
        {" "}
        <Sidebar value={value} handelChenge={handelChenge} />
      </SidebarContainer>

      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography>safhe asli</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>safhe asli1</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>safhe asli2</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>safhe asli3</Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography>safhe asli4</Typography>
        </TabPanel>
      </ContentContainer>
    </Mainlayouts>
  );
}

export default AppContainer;
