import { useEffect, useRef, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import bg02 from "../Assets/herobg.png";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

const strings = [
  "توسعه دهنده فرانت هستم",
  " فرد در حال یادگیری و آموزش هستم",
  " فریلنسر هستم",
  " علاقه مند به دنیای تکنولوژی هستم",
];

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[ امیرحسین کیماسی]]"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });
    const stiringTranision = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3500);

    return () => {
      typedName.destroy();
      clearInterval(stiringTranision);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      //  `url(${bg02})`
      sx={{
        backgroundColor: "gray",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Typography ref={nameEl} variant="h3" color="tomato"></Typography>
      <Box component={"div"} sx={{ display: "flex", mt: 3 }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            ref={infoEl}
            variant="h4"
            color="whitesmoke"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "primari",
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="whitesmoke" sx={{ mr: 2 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
