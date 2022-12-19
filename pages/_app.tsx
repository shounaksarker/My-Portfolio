import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import {GiHamburgerMenu, GiCrossedBones} from "react-icons/gi"
import "../styles/globals.css";

export const AppContext = createContext<any>(null)

export default function App({ Component, pageProps }: AppProps) {
  const [myTheme, setMyTheme] = useState<string>("light");
  const [showSidebar, setShowSidebar] = useState<any>(false)

  // ##### for setting up theme from localStorage
  useEffect(() => {
    const thm = localStorage.getItem("themee") ? localStorage.getItem("themee") : "light";
    thm && setMyTheme(thm);
  }, [myTheme]);
  

  return (
  
    <AppContext.Provider value={[myTheme, setMyTheme, showSidebar, setShowSidebar]}>
      <ThemeProvider attribute="class">
        <div className="lg:flex font-poppins w-full overflow-hidden relative" data-theme={myTheme}>
          <button className='btn fixed right-0 top-2 z-50 lg:hidden' onClick={()=>{setShowSidebar(!showSidebar)}}>{showSidebar ? <GiCrossedBones/> : <GiHamburgerMenu/>}</button>
          <div className={`${showSidebar ? "block fixed min-w-[80%] md:max-w-[50%] z-40" : "hidden"} lg:block md:w-80 transition-all ease-in-out duration-300 delay-500`} >
            <Sidebar />
          </div>
          <div className="w-full" onClick={()=>{setShowSidebar(false)}}>
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
