import { AppBar, Toolbar, Button, useScrollTrigger } from "@mui/material";
import { cloneElement } from "react";


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

    

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button variant="primary">Click me!</Button>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
