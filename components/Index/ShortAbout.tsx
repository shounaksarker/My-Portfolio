/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Button from "../../helperComponent/Button";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";
import onlineCv from "../../Imgs/SVG/onlineCv.svg";
import onlineCvGreen from "../../Imgs/SVG/onlineCvGreen.svg";
import onlineCvWhite from "../../Imgs/SVG/onlineCvWhite.svg";
import onlineCvOrange from "../../Imgs/SVG/onlineCvOrange.svg";
import onlineCvPink from "../../Imgs/SVG/onlineCvPink.svg";
import style from "../../styles/component.module.css";

const ShortAbout = () => {
  const [myTheme, ] = useContext<any>(AppContext);

  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center relative">
      {/* side round ball start */}
      <div
        className={`${style.round} before:z-[-99]
      before:right-[-30%] md:before:right-[-15%] lg:before:right-[-10%] xl:before:right-[-5%]
      before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        {/* side round ball end */}
        <h1 className="text-5xl md:text-7xl text-center font-oleo underline decoration-wavy decoration-2 mb-6 underline-offset-4">
          About Me
        </h1>
        <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-evenly">
          <div className="lg:order-last w-full lg:w-2/5 mb-5">
            <Image 
            src={(myTheme === "emerald") || (myTheme === "forest") ? onlineCvGreen : ((myTheme === "luxury") ? onlineCvWhite : ((myTheme === "halloween") ? onlineCvOrange : (myTheme === "synthwave") || (myTheme === "dracula")? onlineCvPink : onlineCv))}
            width={500} alt="img" className='mx-auto'/>
          </div>
          <div className="w-full lg:w-3/5 lg:order-first">
            <h3 className="text-lg md:text-xl lg:text-2xl text-justify mb-8 font-light">
              I'm <b>Rajanya Sarker Shounak</b>, a versatile Software Engineer at <b>Pathao Ltd</b> with a strong background in Electronics and Communication Engineering. I specialize in creating high-performance web applications, combining frontend creativity with backend logic. With experience in both startup environments and large-scale projects, I enjoy the challenge of turning complex ideas into user-friendly digital experiences.
            </h3>
            <div className="space-y-5 md:space-y-0 md:flex md:space-x-28 lg:space-x-12 xl:space-x-28 text-xl  mb-9">
              <ul className="space-y-5 lg:w-1/2">
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">Designation: </strong>Software Engineer-I
                </li>
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">Degree: </strong>B.Sc in ECE
                </li>
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">City: </strong>Dhaka (BD)
                </li>
              </ul>

              <ul className="space-y-5 lg:w-1/2">
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">Company: </strong>
                  Pathao Ltd
                </li>
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">Phone: </strong>
                  <a href="tel: +8801960916139">+880 1960916139</a>
                </li>
                <li className="border-b-2 border-primary">
                  <strong className="text-primary">Email: </strong>
                  <a href="mailto:shounaksarker@gmail.com">
                    shounaksarker@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <Button className="btn btn-primary">
              <Link href="/About">Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAbout;
