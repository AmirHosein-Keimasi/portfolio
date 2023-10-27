import {
    FaceRounded,
    Home,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded,
  } from "@mui/icons-material";

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

export const tabsData=()=>{


const tabs = [
    { label: "صفحه اصلی", icon: <Home />, ...tabProps(0) },
    { label: 'درباره ی من', icon: <FaceRounded />, ...tabProps(1) },
    { label: "رزومه ی من", icon: <TextSnippetRounded />, ...tabProps(2) },
    { label: "نمونه کار های من", icon: <TerminalRounded />, ...tabProps(3) },
    { label: "ارتباط با من", icon: <MessageRounded />, ...tabProps(3) },

  ];

  return tabs
}
