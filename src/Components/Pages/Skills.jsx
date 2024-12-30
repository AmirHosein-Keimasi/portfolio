import React, { useState, useEffect } from "react";
import { DevSkills } from "../../constants/DevSkills";
import { Skill } from "../../Components/Pages";
import { Box } from "@mui/material";

const Skills = () => {
  const {
    reactSkill,
    nextSkill,
    reduxSkill,
    jsSkill,
    reactQuerySkill,
    htmlSkill,
    cssFrameworksSkill,
    tailwindSkill,
    bootstrapSkill,
    muiSkill,
    gitSkill,
    webpackSkill,
    restApiSkill,
  } = DevSkills;

  // استیت‌ها برای هر مهارت
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [react, setReact] = useState(0);
  const [nextJs, setNextJs] = useState(0);
  const [redux, setRedux] = useState(0);
  const [reactQuery, setReactQuery] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [bootstrap, setBootstrap] = useState(0);
  const [mui, setMui] = useState(0);
  const [git, setGit] = useState(0);
  const [webpack, setWebpack] = useState(0);
  const [restApi, setRestApi] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // برای هر مهارت مقدار تصادفی اضافه می‌شود
      setHtml((oldProgress) => Math.min(oldProgress + Math.random() * 10, 99));
      setCss((oldProgress) => Math.min(oldProgress + Math.random() * 10, 90));
      setJavascript((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 85)
      );
      setReact((oldProgress) => Math.min(oldProgress + Math.random() * 10, 85));
      setNextJs((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 85)
      );
      setRedux((oldProgress) => Math.min(oldProgress + Math.random() * 10, 75));
      setReactQuery((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 80)
      );

      setTailwind((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 85)
      );
      setBootstrap((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 85)
      );
      setMui((oldProgress) => Math.min(oldProgress + Math.random() * 10, 80));
      setGit((oldProgress) => Math.min(oldProgress + Math.random() * 10, 80));
      setWebpack((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 75)
      );
      setRestApi((oldProgress) =>
        Math.min(oldProgress + Math.random() * 10, 75)
      );
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }} // در صفحات کوچک (xs) یک ستون و در صفحات بزرگتر (md) دو ستون
      alignItems="flex-start" // تغییر از 'center' به 'flex-start' برای شروع از بالا
      gap={6}
    >
      {/* در صفحات کوچک هر Box تمام عرض صفحه را می‌گیرد */}
      <Box flex={{ xs: 1, md: "auto" }} width={{ xs: "100%", md: "auto" }}>
        <Skill
          name={reactSkill.name}
          icon={reactSkill.icon}
          color={reactSkill.color}
          value={react}
        />
        <Skill
          name={nextSkill.name}
          icon={nextSkill.icon}
          color={nextSkill.color}
          value={nextJs}
        />
        <Skill
          name={jsSkill.name}
          icon={jsSkill.icon}
          color={jsSkill.color}
          value={javascript}
        />
        <Skill
          name={reduxSkill.name}
          icon={reduxSkill.icon}
          color={reduxSkill.color}
          value={redux}
        />
        <Skill
          name={reactQuerySkill.name}
          icon={reactQuerySkill.icon}
          color={reactQuerySkill.color}
          value={reactQuery}
        />{" "}
        <Skill
          name={restApiSkill.name}
          icon={restApiSkill.icon}
          color={restApiSkill.color}
          value={restApi}
        />
      </Box>
      <Box flex={{ xs: 1, md: "auto" }} width={{ xs: "100%", md: "auto" }}>
        <Skill
          name={htmlSkill.name}
          icon={htmlSkill.icon}
          color={htmlSkill.color}
          value={html}
        />
        <Skill
          name={cssFrameworksSkill.name}
          icon={cssFrameworksSkill.icon}
          color={cssFrameworksSkill.color}
          value={css}
        />
        <Skill
          name={tailwindSkill.name}
          icon={tailwindSkill.icon}
          color={tailwindSkill.color}
          value={tailwind}
        />
        <Skill
          name={bootstrapSkill.name}
          icon={bootstrapSkill.icon}
          color={bootstrapSkill.color}
          value={bootstrap}
        />
        <Skill
          name={muiSkill.name}
          icon={muiSkill.icon}
          color={muiSkill.color}
          value={mui}
        />
        <Skill
          name={gitSkill.name}
          icon={gitSkill.icon}
          color={gitSkill.color}
          value={git}
        />
        <Skill
          name={webpackSkill.name}
          icon={webpackSkill.icon}
          color={webpackSkill.color}
          value={webpack}
        />
      </Box>
    </Box>
  );
};

export default Skills;
