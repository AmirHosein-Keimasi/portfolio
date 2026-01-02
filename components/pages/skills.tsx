"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { DevSkills } from "@/lib/constants/dev-skills";
import { Skill } from "./skill";

const SKILL_TARGETS = {
  html: 99,
  css: 90,
  javascript: 85,
  react: 85,
  nextJs: 85,
  redux: 75,
  reactQuery: 80,
  tailwind: 85,
  bootstrap: 85,
  mui: 80,
  git: 80,
  webpack: 75,
  restApi: 75,
} as const;

export function Skills() {
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

  const updateProgress = useCallback((setter: (val: (prev: number) => number) => void, target: number) => {
    setter((oldProgress) => Math.min(oldProgress + Math.random() * 10, target));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      updateProgress(setHtml, SKILL_TARGETS.html);
      updateProgress(setCss, SKILL_TARGETS.css);
      updateProgress(setJavascript, SKILL_TARGETS.javascript);
      updateProgress(setReact, SKILL_TARGETS.react);
      updateProgress(setNextJs, SKILL_TARGETS.nextJs);
      updateProgress(setRedux, SKILL_TARGETS.redux);
      updateProgress(setReactQuery, SKILL_TARGETS.reactQuery);
      updateProgress(setTailwind, SKILL_TARGETS.tailwind);
      updateProgress(setBootstrap, SKILL_TARGETS.bootstrap);
      updateProgress(setMui, SKILL_TARGETS.mui);
      updateProgress(setGit, SKILL_TARGETS.git);
      updateProgress(setWebpack, SKILL_TARGETS.webpack);
      updateProgress(setRestApi, SKILL_TARGETS.restApi);
    }, 200);

    return () => clearInterval(timer);
  }, [updateProgress]);

  const leftColumnSkills = useMemo(
    () => [
      { skill: reactSkill, value: react },
      { skill: nextSkill, value: nextJs },
      { skill: jsSkill, value: javascript },
      { skill: reduxSkill, value: redux },
      { skill: reactQuerySkill, value: reactQuery },
      { skill: restApiSkill, value: restApi },
    ],
    [reactSkill, nextSkill, jsSkill, reduxSkill, reactQuerySkill, restApiSkill, react, nextJs, javascript, redux, reactQuery, restApi]
  );

  const rightColumnSkills = useMemo(
    () => [
      { skill: htmlSkill, value: html },
      { skill: cssFrameworksSkill, value: css },
      { skill: tailwindSkill, value: tailwind },
      { skill: bootstrapSkill, value: bootstrap },
      { skill: muiSkill, value: mui },
      { skill: gitSkill, value: git },
      { skill: webpackSkill, value: webpack },
    ],
    [htmlSkill, cssFrameworksSkill, tailwindSkill, bootstrapSkill, muiSkill, gitSkill, webpackSkill, html, css, tailwind, bootstrap, mui, git, webpack]
  );

  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      <div className="flex-1 md:flex-auto w-full md:w-auto">
        {leftColumnSkills.map(({ skill, value }) => (
          <Skill
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            value={value}
          />
        ))}
      </div>
      <div className="flex-1 md:flex-auto w-full md:w-auto">
        {rightColumnSkills.map(({ skill, value }) => (
          <Skill
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}
