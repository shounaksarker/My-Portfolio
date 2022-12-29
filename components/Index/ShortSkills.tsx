/* eslint-disable react/no-unescaped-entities */
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import Link from "next/link";
import Button from "../../helperComponent/Button";
import skill from "../../Imgs/SVG/skill.svg";
import skillGreen from "../../Imgs/SVG/skillGreen.svg";
import skillWhite from "../../Imgs/SVG/skillWhite.svg";
import skillOrange from "../../Imgs/SVG/skillOrange.svg";
import skillPink from "../../Imgs/SVG/skillPink.svg";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import style from "../../styles/component.module.css";

const ShortSkill = () => {
  const [myTheme, ] = useContext<any>(AppContext);
  
  return (
    <div className="w-full relative">
      {/* side round ball start */}
      <div
        className={`${style.round} before:z-[-99]
      before:left-[-30%] md:before:left-[-15%] lg:before:left-[-10%] xl:before:left-[-5%]
      before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        {/* side round ball end */}
        <h1 className="text-5xl md:text-7xl text-center font-Segoe font-oleo underline decoration-wavy decoration-2 mb-6 text-white">
          Skills
        </h1>
        <div className="lg:flex items-center justify-evenly"> 
          {/* Image   */}
          <div className="lg:w-2/5 lg:order-last mb-5">
            <Image 
            src={(myTheme === "emerald") || (myTheme === "forest") ? skillGreen : ((myTheme === "luxury") ? skillWhite : ((myTheme === "halloween") ? skillOrange : (myTheme === "synthwave") || (myTheme === "dracula")? skillPink : skill))}
            width={500} alt="img" className='mx-auto'/>
          </div>
          {/* Skill Bars  */}
          <div className="lg:w-3/5 lg:order-first lg:px-6">
            <div>
              <ProgressBar
                completed={90}
                bgColor="#DD4D25"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000000"
                customLabel="HTML / CSS"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={70}
                bgColor="#38BDF8"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000000"
                customLabel="Tailwind Css"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={90}
                bgColor="#7410F0"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#fff"
                customLabel="Bootstrap"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={80}
                bgColor="#EFD81D"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000000"
                customLabel="JavaScript"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={78}
                bgColor="#5ED3F3"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000000"
                customLabel="React / Next js"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={40}
                bgColor="#88B85C"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000000"
                customLabel="Node / Express"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={30}
                bgColor="#429543"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#fff"
                customLabel="MongoDB"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={35}
                bgColor="#207196"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#fff"
                customLabel="Wordpress"
                height="26px"
                className="mb-3"
              />
              <ProgressBar
                completed={30}
                bgColor="#6295CB"
                borderRadius="20px"
                labelAlignment="left"
                baseBgColor="#e8e8e6"
                labelColor="#000"
                customLabel="C++ / TS"
                height="26px"
                className="mb-3"
              />
            </div>
            <Button className="btn btn-primary">
              <Link href="/Skills">Expand</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortSkill;
