import { SidebarContent } from "./";
import  DrawerActionButton from "../drawer/DrawerActionButton";
import SidebarDrawer from '../drawer/SidebarDrawer'


const Sidebar = () => {
  // const tabs =[
  //   {label:"صفحه اصلی" , icon :<HomeRounded/>, ...tabProps(0)},
  //   {label:"صفحه اصلی" , icon :<FaceRounded/>, ...tabProps(1)},
  //   {label:"صفحه اصلی" , icon :<TextSnippetRounded/>, ...tabProps(2)},
  //   {label:"صفحه اصلی" , icon :<TerminalRounded/>, ...tabProps(3)},
  //   {label:"صفحه اصلی" , icon :<MessageRounded/>, ...tabProps(4)},
  // ]

  return (
    <>
      <DrawerActionButton />
      <SidebarContent />
      <SidebarDrawer />
    </>
  );
};

export default Sidebar;
