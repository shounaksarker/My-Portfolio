/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import bootstrap from "../Imgs/Skills/bootstrap.png";
import css from "../Imgs/Skills/css.png";
import html5 from "../Imgs/Skills/html.png";
import js from "../Imgs/Skills/js.png";
import mui from "../Imgs/Skills/mui.png";
import rRouter from "../Imgs/Skills/react-router.png";
import reactjs from "../Imgs/Skills/react.png";
import vuejs from "../Imgs/Skills/vuejs.png";
import sass from "../Imgs/Skills/sass.png";
import cpp from "../Imgs/Skills/c++.png";
import express from "../Imgs/Skills/express.png";
import firebase from "../Imgs/Skills/fireabse.png";
import git from "../Imgs/Skills/git.png";
import github from "../Imgs/Skills/github.png";
import heroku from "../Imgs/Skills/heroku.png";
import mongo from "../Imgs/Skills/mongodb.png";
import node from "../Imgs/Skills/nodejs.png";
import ps from "../Imgs/Skills/ps.png";
import mysql from "../Imgs/Skills/mysql.png";
import xd from "../Imgs/Skills/xd.png";
import next from "../Imgs/Skills/next.png";
import vercel from "../Imgs/Skills/vercel.png";
import wordpress from "../Imgs/Skills/wordpress.png";
import { AppContext } from "./_app";
import SkillsItem from "../components/SkillsItem";
const Skills = () => {
  const [myTheme] = useContext<any>(AppContext);
  return (
    <div className="lg:min-h-screen flex justify-center">
      <Head>
        <title>Skills</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-8">
        <h2
          className={`font-oleo underline underline-offset-4 decoration-wavy decoration-2 text-7xl text-center text-primary ${
            myTheme == "light" || myTheme == "emerald" || myTheme == "luxury"
              ? "drop-shadow-titleBlack"
              : "drop-shadow-titleWhite"
          }`}
        >
          Skills
        </h2>
        <h4 className="text-lg text-center">
          Find out my skill set, what do I know and where I am perfect for.
        </h4>
        <div className="md:flex justify-center items-center space-y-10 md:space-y-0 md:space-x-10 xl:space-x-20 mt-24">
          {/* 1st box - front end */}
          <div
            className={`flex-col space-y-3 p-5 bg-[#eeeeee] rounded-xl shadow-skill md:h-[570px] md:w-[32%] text-black ${
              myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
            }`}
          >
            <h4 className="text-xl underline text-center">** Frontend **</h4>
            <SkillsItem name="HTML" image={html5} />
            <SkillsItem name="CSS" image={css} />
            <SkillsItem name="Bootstrap" image={bootstrap} />
            <div className="flex justify-start items-center text-xl">
              <SiTailwindcss className="text-blue-400 text-3xl mr-6" />
              Tailwind
            </div>
            <SkillsItem name="Material UI" image={mui} width={30} />
            <SkillsItem name="Sass" image={sass} />
            <SkillsItem name="JavaScript" image={js} width={30} />
            <SkillsItem name="React.js" image={reactjs} />
            <SkillsItem name="Next Js" image={next} width={30} />
            <SkillsItem name="React Router" image={rRouter} />
            <SkillsItem name="Vue.js" image={vuejs} width={30} />
          </div>

          {/* 2nd box - backend + hosting  */}
          <div className="flex flex-col justify-between space-y-10 md:space-y-0 md:h-[550px] md:w-[32%]">
            {/* backend */}
            <div
              className={`flex-col space-y-3 p-5 bg-[#eeeeee] rounded-xl shadow-skill text-black ${
                myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
              }`}
            >
              <h4 className="text-xl underline text-center">** Backend **</h4>
              <SkillsItem name="Node Js" image={node} />
              <SkillsItem name="Express Js" image={express} />
              <SkillsItem name="MongoDB" image={mongo} />
              <SkillsItem name="MySql" image={mysql} width={35} />
            </div>
            {/* hosting  */}
            <div
              className={`flex-col space-y-3 p-5 bg-[#eeeeee] rounded-xl shadow-skill ${
                myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
              } text-black`}
            >
              <h4 className="text-xl underline text-center">** Hosting **</h4>
              <SkillsItem name="Firebase" image={firebase} width={40} />
              <SkillsItem name="Heroku" image={heroku} width={40} />
              <SkillsItem name="Github pages" image={github} width={40} />
              <SkillsItem name="Vercel" image={vercel} width={40} />
            </div>
          </div>

          {/* 3rd div */}
          <div className="flex flex-col justify-between space-y-10 md:space-y-0 md:h-[550px] md:w-[32%]">
            {/* language */}
            <div
              className={`flex-col space-y-3 p-5 bg-[#eeeeee] rounded-xl shadow-skill ${
                myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
              } text-black`}
            >
              <h4 className="text-xl underline text-center">** Language **</h4>
              <SkillsItem name="JavaScript" image={js} width={30} />
              <SkillsItem name="C++" image={cpp} width={40} />
            </div>
            {/* Version Control  */}
            <div
              className={`flex-col space-y-3 p-4 bg-[#eeeeee] rounded-xl shadow-skill ${
                myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
              } text-black`}
            >
              <h4 className="text-xl underline text-center">
                ** Version Control **
              </h4>
              <SkillsItem name="Git" image={git} width={40} />
            </div>
            {/* tools  */}
            <div
              className={`flex-col space-y-3 p-5 bg-[#eeeeee] rounded-xl shadow-skill ${
                myTheme == "light" ? "shadow-[#aaaaaa]" : "shadow-primary"
              } text-black`}
            >
              <h4 className="text-xl underline text-center">** Tools **</h4>
              <SkillsItem name="WordPress" image={wordpress} width={40} />
              <SkillsItem name="Adobe XD" image={xd} width={40} />
              <SkillsItem name="Adobe Photoshop" image={ps} width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
