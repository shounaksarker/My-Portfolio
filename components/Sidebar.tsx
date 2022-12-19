import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { BsChatRightDots, BsClipboardData } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { MdSettingsSuggest } from "react-icons/md";
import { TfiHome } from "react-icons/tfi";
import coding from "../Imgs/coding.svg";
import codingGreen from "../Imgs/codingGreen.svg";
import codingOrange from "../Imgs/codingOrange.svg";
import codingPink from "../Imgs/codingPink.svg";
import codingWhite from "../Imgs/codingWhite.svg";
import { AppContext } from "../pages/_app";
 
const Sidebar = () => {
  const [myTheme, setMyTheme, showSidebar, setShowSidebar] = useContext<any>(AppContext);
  console.log("theme: ", myTheme);
  const [ddHide, setddHide] = useState(true)
  // ###### funtion for changing theme ######
  const handleTheme = (value: string) => {
    localStorage.setItem("themee", value);
    setMyTheme(value);
    setddHide(!ddHide);
  };

  return (
    <aside
      className={`min-h-screen font-poppins px-12 2xl-px-14 pt-5 text-center lg:fixed ${ (myTheme == "emerald") ? "bg-[#d8d8d8] text-black" :
        (myTheme == "light") || (myTheme == "synthwave")? "bg-black text-white" : "bg-[#343434] text-white"
      } overflow-y-scroll xl:overflow-y-auto`}
    >
      <div className="mb-2">
        <Image
          src={(myTheme === "emerald") || (myTheme === "forest") ? codingGreen : ((myTheme === "luxury") ? codingWhite : ((myTheme === "halloween") ? codingOrange : (myTheme === "synthwave") || (myTheme === "dracula")? codingPink : coding))}
          alt="profile"
          width={150}
          className={`bg-black rounded-full px-0 py-[8%]`}
        />
        
        <div className="relative max-w-[180px]">
          <h4
            className="text-4xl xl:text-5xl my-10 font-clickerScript px-[15px] py-[10px] 
             customBeforeAfter before:border-primary after:border-primary
             "
          >
            Shounak
          </h4>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="space-y-5 xl:space-y-8 text-lg xl:text-xl">
          <li>
            <Link onClick={()=>{setShowSidebar(false)}} href={"/"} className="flex items-center">
              <TfiHome className="mr-4" /> Home
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setShowSidebar(false)}} href={"/About"} className="flex items-center">
              <IoIosContact className="mr-4" />
              About
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setShowSidebar(false)}} href={"/Skills"} className="flex items-center">
              <GiSkills className="mr-4" />
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={()=>{setShowSidebar(false)}} href={"/Portfolio"} className="flex items-center">
              <BsClipboardData className="mr-4" />
              Portfolio
            </Link>
          </li>
          <li >
            <Link onClick={()=>{setShowSidebar(false)}} href={"/Contact"} className="flex items-center">
              <BsChatRightDots className="mr-4" />
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <MdSettingsSuggest className="mr-4"/>
            <div className="dropdown dropdown-top xl:dropdown-bottom">
              <label tabIndex={0} className={`btn m-1 bg-transparent hover:bg-transparent outline-none border-none focus:outline-none p-0 text-lg xl:text-xl normal-case ${(myTheme === "emerald") && "text-black"} font-normal`} onClick={() => setddHide(!ddHide)}>Theme</label>
              <ul tabIndex={0} className={`${(ddHide && "hidden")} ${(myTheme === "light") && "text-black"} dropdown-content menu px-2 shadow  rounded-box bg-primary`}>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("emerald")}><span className="rounded-full border-[#66CC8A] border-t-[#66CC8A] border-b-[#D8D8D8] border-l-[#D8D8D8] border-[13px] xl:border-[10px] border-solid"></span></a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("light")}><span className="rounded-full border-[#6C63FF] border-t-[#6C63FF] border-b-black border-l-black border-[13px] xl:border-[10px] border-solid"></span></a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("forest")}> <span className="rounded-full border-[#66CC8A] border-t-[#66CC8A] border-b-[#343434] border-l-[#343434] border-[13px] xl:border-[10px] border-solid"></span> </a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("luxury")}> <span className="rounded-full border-[#FFFFFF] border-t-[#FFFFFF] border-b-[#343434] border-l-[#343434] border-[13px] xl:border-[10px] border-solid"></span> </a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("halloween")}> <span className="rounded-full border-[#F28C18] border-t-[#F28C18] border-b-[#343434] border-l-[#343434] border-[13px] xl:border-[10px] border-solid"></span> </a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("synthwave")}> <span className="rounded-full border-[#6C63FF] border-t-[#6C63FF] border-b-[#343434] border-l-[#343434] border-[13px] xl:border-[10px] border-solid"></span> </a></li>

                <li><a className="py-3 xl:py-1" onClick={()=>handleTheme("dracula")}> <span className="rounded-full border-[#E779C1] border-t-[#E779C1] border-b-[#343434] border-l-[#343434] border-[13px] xl:border-[10px] border-solid"></span> </a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;


{/* <select className={`text-lg max-w-[120px] select bg-transparent outline-none border-none focus:outline-none`}
            onChange={(e) => handleTheme(e.target.value)} >
              <option disabled selected>
                Theme
              </option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="emerald">emerald</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="light">Light II</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="forest">forest</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="luxury">luxury</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="halloween">halloween</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="synthwave">synthwave</option>
              <option className={`${(myTheme !== "emerald") && "text-black"}`} value="dracula">dracula</option>
            </select> */}