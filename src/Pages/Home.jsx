import { Typography, Box } from "@mui/material";
import React, { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "من توسعه دهنده ریکت هستم",
    "من یک فریلنسر هستم",
    "من دانشجو هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["[[امیرحسین کیماسی]]"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    })

    const typeinfo = new Typed(infoEl.current, {
        strings: strings,
        startDelay:1500,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 50,
        loop:true,
        showCursor: false,
      });

    return () => {

      typedName.destroy()
      typeinfo.destroy()
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../Assets/photo_2022-01-07_22-36-04.jpg")})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography ref={nameEl} variant="h3" color="tomato">
       
      </Typography>
      <Typography  ref={infoEl}
        variant="h5   "
        color="whitesmoke"
        sx={{ textDecoration: "underline", textDecorationColor: "gray" }}
      >
        در حال یادگیری هستم
      </Typography>
    </Box>
  );
};

export default Home;
