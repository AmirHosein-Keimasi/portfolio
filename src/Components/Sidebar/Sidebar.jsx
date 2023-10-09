import DrawerContent from "./SidebarContent";
import DrawerActionButton from "../Drawer/DrawerActionButton";

const Sidebar = ({ handelChenge, value }) => {
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
      <DrawerContent value={value} handelChenge={handelChenge} />
      <sidebarDrawer />
    </>
  );
};

export default Sidebar;
