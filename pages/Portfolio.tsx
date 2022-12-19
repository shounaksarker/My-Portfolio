/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Project from "../helperComponent/Project";
import auth from "../Imgs/portfolio/auth.png";
import blood from "../Imgs/portfolio/blood.png";
import netflix from "../Imgs/portfolio/netflix.png";
import numberGuess from "../Imgs/portfolio/numberGuess.png";
import powerOdd from "../Imgs/portfolio/powerOdd.png";
import weather from "../Imgs/portfolio/weather.png";
import doctor from "../Imgs/portfolio/doctor.png";
import { useContext } from "react";
import { AppContext } from "../pages/_app";

const Portfolio = () => {
  const [myTheme, ] = useContext<any>(AppContext);
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:min-h-screen flex justify-center">
        <div className="p-8">
        <h2 className={`font-oleo underline decoration-wavy decoration-2 text-7xl text-center text-primary ${(myTheme == "light") || (myTheme == "emerald") || (myTheme == "luxury") ? "drop-shadow-titleBlack" : "drop-shadow-titleWhite"}`} >
          Portfolio
        </h2>
          <h4 className="text-lg text-center text-[#aeaeae]">
            Check my porjects with code and you can call me if you are
            interested to hire me
          </h4>
          {/* portfolio start */}
          <div className="mt-12 text-lg md:flex md:flex-wrap">
            {/* 1st project */}
            <Project
              img={weather}
              title="Weather App"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className="bg-[#6c63ff14] md:mr-6 xl:mr-5"
            />
            {/* 2nd project */}
            <Project
              img={netflix}
              title="Netflix"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/About"
              demo="/demo"
              className="xl:mr-5"
            />
            {/* 3rd project */}
            <Project
              img={numberGuess}
              title="Number Guess Game"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className="bg-[#6c63ff14] md:mr-6 xl:mr-5"
            />
            {/* 4th project */}
            <Project
              img={auth}
              title="Authentication"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className=""
            />
            {/* 5th project */}
            <Project
              img={blood}
              title="Blood Bank"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className="bg-[#6c63ff14] md:mr-6 xl:mr-5"
            />
            {/* 6th project */}
            <Project
              img={powerOdd}
              title="OTP - Authentication"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className="xl:mr-5"
            />
            {/* 7th project */}
            <Project
              img={doctor}
              title="Doctor's Portal"
              overview="This full stack website is made for taking appointment and save patient's info in database."
              technology="React, Firebase, Node, Heroku, MongoDB."
              repository="/repo"
              demo="/demo"
              className="bg-[#6c63ff14] md:mr-6 xl:mr-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;