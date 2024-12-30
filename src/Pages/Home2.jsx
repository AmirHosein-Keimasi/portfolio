import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";
import { Grid } from "@mui/material";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import Imgs from "./Imgs";
import About from "./About";
import Resume from "./Resume";
import { Comment, Contact } from ".";

const strings = [
  "توسعه دهنده فرانت ",
  "  در حال یادگیری وآموزش ",
  " فریلنسر ",
  " علاقه مند به دنیای تکنولوژی ",
];

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["      امیرحسین کیماسی    "],
      typeSpeed: 20,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });

    const stringTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3500);

    return () => {
      typedName.destroy();
      clearInterval(stringTransition);
    };
  }, []);

  return (
    <Box sx={{ overflowY: "auto", height: "100vh", padding: 2 }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Grid
        container
        spacing={2}
        sx={{
          height: "95vh",
          display: "flex",
          alignItems: "center ",
          justifyContent: "center",
          flexWrap: "wrap", // برای مدیریت ریسپانسیو
        }}
      >
        {/* گرید تصویر */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Imgs />
        </Grid>

        {/* گرید متن */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-end" },
            textAlign: { xs: "center", sm: "end" },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              color="text.main"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              }}
            >
              سلام من
            </Typography>
            <Typography
              ref={nameEl}
              variant="h5"
              color="success.main"
              sx={{
                mt: 2,
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              }}
            ></Typography>
            <TextTransition springConfig={presets.wobbly}>
              <Typography
                variant="h4"
                color="text.main"
                sx={{
                  my: 4,
                  textDecoration: "underline",
                  textDecorationColor: "primary.main",
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                  alignItems: "start",
                  textAlign: "center",
                }}
              >
                {strings[index % strings.length]}
              </Typography>
            </TextTransition>
          </Box>
          <SocialMediaIcons />
        </Grid>
      </Grid>

      {/* سایر صفحات */}
      <Box sx={{ mt: 3 }}>
        <About />
        <Resume />
        <Comment />
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
