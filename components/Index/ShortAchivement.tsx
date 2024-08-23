/* eslint-disable */
import Image from "next/image";
import { useContext, useState } from "react";
import Link from "next/link";
import mine from "../../Imgs/portfolio/mine.png";
import mine2 from "../../Imgs/portfolio/mine2.jpg";
import mine3 from "../../Imgs/portfolio/mine3.jpg";
import fed from "../../Imgs/Others/FED.jpeg";
import PWJ from "../../Imgs/Others/PWJ.jpeg";
import RB from "../../Imgs/Others/RB.jpeg";
import { AppContext } from "../../pages/_app";
import style from "../../styles/component.module.css";
import SingleGallery from "../../helperComponent/SingleGallery";
import AchivementItem from "../AchivementItem";

const ShortAchivement = () => {
  const [myTheme,] = useContext<any>(AppContext);
  const [dOpen, setDOpen] = useState(false);

  const myImgs = [
    {
      src: mine2,
      original: mine2.src,
      alt: "with Mayor",
      width: 400,
      height: 320,
      tags: [{ value: "Prize", title: "BD" }],
      caption: "Showing the Certificate verify project for the resident of ward no-5",
    },
    {
      src: mine3,
      original: mine3.src,
      width: 250,
      height: 174,
      tags: [{ value: "Prize", title: "BD" }, ,],
      caption: "With Mayor, MP and Councilor",
    },
  ];


  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center relative">
      <div
        className={`${style.round} before:z-[-99]
        before:left-[-30%] md:before:left-[-15%] lg:before:left-[-10%] xl:before:left-[-5%]
        before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        <h1 className="text-5xl md:text-7xl text-center font-oleo underline decoration-wavy decoration-2 mb-6 text-white">
          Achievement
        </h1>
        <div className="md:flex md:flex-wrap justify-center space-y-5 xl:space-y-0">
          <AchivementItem img={fed} title={'Introduction of Frontend development'} platform={'Coursera'} grade={93.40} link={'https://www.coursera.org/account/accomplishments/verify/HGCQ7F3EENEW'} />
          <AchivementItem img={PWJ} title={'Programming With JavaScript'} platform={'Coursera'} grade={95.33} link={'https://www.coursera.org/account/accomplishments/verify/Z55ESLSJ3RK4'} />
          <AchivementItem img={RB} title={'React Basic'} platform={'Coursera'} grade={97.50} link={'https://www.coursera.org/account/accomplishments/verify/PF8B6U26NAWY'} />
          {/* last div  */}
          <div className="cursor-grabbing md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl bg-[#ffffff1a]" onClick={() => setDOpen(true)}>
            <figure>
              <Image  src={mine} alt="Album" />
              <SingleGallery
              images={myImgs}
              open={dOpen}
              setOpen={setDOpen}
            />
            </figure>
            <div className={`card-body lg:text-sm ${(myTheme !== "luxury") && "text-white"} ${(myTheme === "light") && "bg-white/50"}`}>
              <h2 className="card-title text-primary lg:text-base">
                Showing the project "E-sheba" infront of
              </h2>
              <p>the Mayor of Dhaka South City Corporation, MP and Councilor</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAchivement;
