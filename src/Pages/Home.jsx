import { useEffect, useRef, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import bg02 from "../Assets/photo_2022-01-07_22-36-04.jpg";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";

const strings = [
  "توسعه دهنده فول استک هستم",
  " مدرس برنامه نویسی هستم",
  " فریلنسر هستم",
  " محتواساز دنیای برنامه نویسی هستم",
];

const Home = ({helmetTitle}) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[ یونس قربانی ]]"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });
    const stiringTranision = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000);

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
      sx={{
        backgroundImage: `url(${bg02})`,
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
      <Box component={"div"} sx={{ display: "flex", mt:3 }}>
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
