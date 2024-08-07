import { useEffect, useRef, useCallback, useState } from "react";

import { Box, Typography, Card } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import bg02 from "../Assets/herobg.png";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import { Image } from "mui-image";
import image from "../Assets/1.png";
import Imgs from "./Imgs";

const strings = [
  "توسعه دهنده فرانت ",
  "  در حال یادگیری وآموزش ",
  " فریلنسر ",
  " علاقه مند به دنیای تکنولوژی ",
];

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const nameEl2 = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["      امیرحسین کیماسی    "],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });

    const typed2 = new Typed(nameEl2.current, {
      strings: [" هستم "],
      typeSpeed: 400,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });
    const stiringTranision = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3500);

    return () => {
      typed2.destroy();
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
    <Grid container>
      {/*   */}

      <Grid xs={0} sm={4} md={6} ls={7} xl={6}>
        <Imgs/>
      </Grid>
      <Grid xs={12} sm={8} md={6} ls={5} xl={5}>
        <Box
          //  `url(${bg02})`
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "primary.main" : "primary.main",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "65vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            ml: 2,
          }}
        >
          <Helmet>
            <title>{helmetTitle}</title>
          </Helmet>
          {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      /> */}
          <Typography variant="h5" color={"text.main"}>
            سلام من
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              ref={nameEl2}
              sx={{ paddingLeft: 2 }}
              color={"text.main"}
            >
              هستم
            </Typography>
            <Typography
              ref={nameEl}
              variant="h3"
              color={"success.main"}
            ></Typography>{" "}
          </Box>

          <Box component={"div"} sx={{ display: "flex", mt: 3 }}>
            <TextTransition springConfig={presets.wobbly}>
              <Typography
                ref={infoEl}
                variant="h4"
                color="text.main"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "primari",
                }}
              >
                {strings[index % strings.length]}
              </Typography>
            </TextTransition>
          </Box>
        </Box>
        <SocialMediaIcons textAlign={"end"} sx={{ mb: 10 }} />
      </Grid>
    </Grid>
  );
};

export default Home;
