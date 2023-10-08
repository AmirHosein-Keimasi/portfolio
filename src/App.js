import Mainlayouts from "./Components/layouts/Mainlayouts";
import Sidebar from "./Components/Sidebar";
import ContentContainer from "./Components/ContentContainer";
import { useState } from "react";
import TabPanel from "./Components/tabs/TabPanel";
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);

  const handelChenge = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Mainlayouts>
      <Sidebar value={value}  handelChenge={handelChenge}/>
      <ContentContainer >
        <TabPanel value={value} index={0}>
          <Typography>
            safhe asli
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>
            safhe asli1
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>
            safhe asli2
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>
            safhe asli3
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography>
            safhe asli4
          </Typography>
        </TabPanel>
      </ContentContainer>
    </Mainlayouts>
  );
}

export default App;
