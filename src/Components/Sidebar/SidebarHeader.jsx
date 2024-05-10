import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionBtn from "../../layouts/Themes/ThemeActionBtn";
import avatar from "../../Assets/logo.jpg";
import CustomAvatar from "../common/CustomAvatar";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <CustomAvatar size={200} fallback="A.K" avatar={avatar} />

      <Typography
        color="text.main"
        sx={{ textAlign: "center", mt: 10 }}
        variant="h5"
      >
        <RandomReveal
          characterSet={alphabetPersian}
          isPlaying
          duration={4}
          characters="امیرحسین کیماسی"
          onComplete={() => {
            setStart(true);
          }}
        />
      </Typography>
      {start && (
        <Typography
          color="error.main"
          sx={{ textAlign: "center", mt: 10 }}
          variant="caption"
        >
          <RandomReveal
            characterSet={alphabetPersian}
            isPlaying
            duration={3}
            characters=" فرانت دولوپر و طراح سایت"
          />
        </Typography>
      )}

      <SocialMediaIcons textAlign={"center"} />
    </>
  );
};

export default SidebarHeader;
