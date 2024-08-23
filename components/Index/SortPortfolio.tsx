import all from "../../Imgs/Others/allProjectText.png";
import fintrackerio from "../../Imgs/portfolio/fintrackerio.png";
import certi from "../../Imgs/portfolio/certi.png";
import shareRide from "../../Imgs/portfolio/shareRide.png";
import style from "../../styles/component.module.css";
import PortfolioItem from "../PortfolioItem";

const SortPortfolio = () => {
  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center relative">
      <div
        className={`${style.round} before:z-[-99]
      before:right-[-30%] md:before:right-[-15%] lg:before:right-[-10%] xl:before:right-[-5%] 
      before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        <h1 className="text-5xl md:text-7xl text-center font-oleo underline underline-offset-4 decoration-wavy decoration-2 mb-6">
          Portfolio
        </h1>
        <div className="md:flex md:flex-wrap justify-center space-y-5 xl:space-y-0 xl:space-x-5">
          <PortfolioItem
            img={certi}
            height={220}
            title={"Certificate Verification"}
            technology={"Next.js, Tailwind Css, MySql, React-QR-code"}
            link={"https://eseba.chittaranjandas.com/"}
          />
          <PortfolioItem
            img={fintrackerio}
            height={180}
            title={"Finance-tracker"}
            technology={"Next.js, Tailwind Css, Express.js, MySql"}
            link={"https://fintrackerio-stage.vercel.app"}
          />
          <PortfolioItem
            img={shareRide}
            height={200}
            title={"Share Ride"}
            technology={"React JS, React-leaflet (Map), Tailwind css"}
            link={"https://pages.pathao.com/share-ride/YY75g6H7cT7AKXnnTY3Cwg=="}
          />
          {/* All project */}
          <PortfolioItem
            img={all}
            height={200}
            title={"All Projects"}
            description={"One click for opening my project showcase..."}
            href={"/Portfolio"}
          />
        </div>
      </div>
    </div>
  );
};

export default SortPortfolio;
