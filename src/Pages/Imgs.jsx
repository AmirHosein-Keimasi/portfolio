import Image from "mui-image";
import React, { useState, useEffect } from "react";
import src1 from "../Assets/1.png";
import src2 from "../Assets/2.png";
import src3 from "../Assets/3.png";

const ImageList = [src1, src2, src3];

const Imgs = () => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ImageList.length);
    setRandomImage(ImageList[randomIndex]);
  }, []);

  return (
    <Image
      src={randomImage}
      height="60%"
      width="105%"
      shift="top"
      fit="cover"
      sx={{
        mr: 10,
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        },
      }}
    />
  );
};

export default Imgs;
