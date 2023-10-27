import { Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionBtn from '../../layouts/Themes/ThemeActionBtn'

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
<ThemeActionBtn/>
      <Avatar
        src={require("../../Assets/logo.jpg")}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          width: 200,
          height: 200,
          margin: " 0 auto",
        }}
      />{" "}
      
      <Typography color="whitesmoke" sx={{ textAlign: "center" }} variant="h5">
        <RandomReveal
          characterSet={alphabetPersian}
          isPlaying
          duration={4}
          characters="امیرحسین کیماسی"
          onComplete={()=>{setStart(true)}}
        />
      </Typography>
      {start &&
      (
        <Typography
          color="whitesmoke"
          sx={{ textAlign: "center" }}
          variant="caption"
        >
          <RandomReveal
            characterSet={alphabetPersian}
            isPlaying
            duration={4}
            characters="سلام کیماسی
"
          />
        </Typography>
      )}
    </>
  );
};

export default SidebarHeader;
