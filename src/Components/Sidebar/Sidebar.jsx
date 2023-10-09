import { SidebarContent } from "./";
import  DrawerActionButton from "../drawer/DrawerActionButton";
import SidebarDrawer from '../drawer/SidebarDrawer'


const Sidebar = () => {

  return (
    <>
      <DrawerActionButton />
      <SidebarContent />
      <SidebarDrawer />
    </>
  );
};

export default Sidebar;
