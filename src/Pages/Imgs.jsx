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
      shift="top"
      sx={{
        borderRadius: "999px",
        top: "-100px",
      }}
    />
  );
};

export default Imgs;
