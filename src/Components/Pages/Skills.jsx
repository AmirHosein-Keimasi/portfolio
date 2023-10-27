import React from "react";
import { DevSkills } from "../../constants/DevSkills";
import { useState, useEffect } from "react";
import { Skill } from "../../Components/Pages";

const Skills = () => {
  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
    DevSkills;

  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [nodeJs, setNodeJs] = useState(0);
  const [react, setReact] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 90);
      });

      setCss((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 50);
      });

      setJavascript((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 60);
      });

      setNodeJs((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 5);
      });

      setReact((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 40);
      });

      setGit((oldProgress) => {
        const rondomNumber = Math.random() * 10;
        return Math.min(oldProgress + rondomNumber, 60);
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={nodeJs}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
};

export default Skills;
