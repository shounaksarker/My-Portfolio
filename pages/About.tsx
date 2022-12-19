/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// travel pictures
import cox from "../Imgs/Travel/cx-min.jpeg";
import darj from "../Imgs/Travel/DarjTea-min.jpeg";
import other from "../Imgs/Travel/gpl2-min.jpeg";
import sikkim from "../Imgs/Travel/MGmarg-min.jpeg";
// Photography pictures
import river from "../Imgs/Photography/boatPadma.jpeg";
import animal from "../Imgs/Photography/cat.jpeg";
import nature from "../Imgs/Photography/DarjNn.jpeg";
import others from "../Imgs/Photography/leg.jpeg";
// others imports
import Head from "next/head";
import { useContext, useState } from "react";
import SingleGallery from "../helperComponent/SingleGallery";
import education from '../Imgs/education.png';
import { AppContext } from "../pages/_app";
// ------------------------------------------------------------------------------
const Aboutme = () => {
  const [myTheme, ] = useContext<any>(AppContext);
 
  // travel states
  const [dOpen, setDOpen] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const [cOpen, setCOpen] = useState(false);
  const [oOpen, setOOpen] = useState(false);
  // photography states
  const [natureOpen, setNatureOpen] = useState(false);
  const [riverOpen, setRiverOpen] = useState(false);
  const [animalOpen, setAnimalOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const darjeeling = [
    {
      src: "https://i.ibb.co/94ycGsy/Darj-Tea-min.jpg",
      original: "https://i.ibb.co/94ycGsy/Darj-Tea-min.jpg",
      width: 250,
      height: 174,
      tags: [{ value: "Darjeling", title: "India" }, ,],
      caption: "Tea Garden, Darjeling, India",
    },
    {
      src: "https://i.ibb.co/Kcgs96Z/me-min.jpg",
      original: "https://i.ibb.co/Kcgs96Z/me-min.jpg",
      alt: "Wood Glass",
      width: 400,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Mall Road, Darjeeling, India",
    },
    {
      src: "https://i.ibb.co/DkgHVzc/darj-T-min.jpg",
      original: "https://i.ibb.co/DkgHVzc/darj-T-min.jpg",
      alt: "Wood Glass",
      width: 600,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tea Garden, Darjeeling, India",
    },
    {
      src: "https://i.ibb.co/N9vTRph/wtr-min.jpg",
      original: "https://i.ibb.co/N9vTRph/wtr-min.jpg",
      width: 292,
      height: 213,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tista River, India",
    },
  ];
  // travel pictures
  const sikim = [
    {
      src: "https://i.ibb.co/r75QQ6b/skm-min.jpg",
      original: "https://i.ibb.co/r75QQ6b/skm-min.jpg",
      width: 290,
      height: 212,
      tags: [{ value: "Sikkim", title: "India" }, ,],
      caption: "Sikkim, India",
    },
    {
      src: "https://i.ibb.co/ZWZNtBD/skm2-min.jpg",
      original: "https://i.ibb.co/ZWZNtBD/skm2-min.jpg",
      alt: "Big Ben - London",
      width: 400,
      height: 320,
      tags: [{ value: "Sikkim", title: "India" }],
      caption: "Sikkim, India",
    },
    {
      src: "https://i.ibb.co/kyqfKGR/MGmarg-min.jpg",
      original: "https://i.ibb.co/kyqfKGR/MGmarg-min.jpg",
      alt: "Wood Glass",
      width: 350,
      height: 320,
      tags: [{ value: "MG marg, Gangtok", title: "India" }],
      caption: "MG marg statue, Gangtok, India",
    },
    {
      src: "https://i.ibb.co/zVGMWNf/Mg-Mrg2-min.jpg",
      original: "https://i.ibb.co/zVGMWNf/Mg-Mrg2-min.jpg",
      width: 200,
      height: 148,
      tags: [{ value: "Gangtok", title: "India" }],
      caption: "MG Marg Road, Gangtok, India",
    },
  ];
  const coxBazar = [
    {
      src: "https://i.ibb.co/r3DLrTL/saint-Lv-min.jpg",
      original: "https://i.ibb.co/r3DLrTL/saint-Lv-min.jpg",
      width: 250,
      height: 213,
      tags: [{ value: "St. Martin", title: "Bangladesh" }, ,],
      caption: "Saint Martin, Coal Island, Bangladesh",
    },

    {
      src: "https://i.ibb.co/tmMb2YH/saint-Dab-min.jpg",
      original: "https://i.ibb.co/tmMb2YH/saint-Dab-min.jpg",
      width: 500,
      height: 320,
      tags: [{ value: "St. Martin", title: "Bangladesh" }],
      caption: "Saint Martin, Bangladesh",
    },
    {
      src: "https://i.ibb.co/nM9zyDt/cx-Bike-min.jpg",
      original: "https://i.ibb.co/nM9zyDt/cx-Bike-min.jpg",
      alt: "Red Zone - Paris",
      width: 245,
      height: 113,
      tags: [{ value: "Cox's Bazar", title: "Bangladesh" }],
      caption: "Water-bike, Cox's bazar, Bangladesh",
    },
    {
      src: "https://i.ibb.co/XS4SsMD/cx-min.jpg ",
      original: "https://i.ibb.co/XS4SsMD/cx-min.jpg ",
      alt: "Wood Glass",
      width: 350,
      height: 320,
      tags: [{ value: "Cox's Bazar", title: "Bangladesh" }],
      caption: "Sea beach, Cox's bazar, Bangladesh",
    },
  ];
  const otherImg = [
    {
      src: "https://i.ibb.co/Js5fv3m/gpl2-min.jpg",
      original: "https://i.ibb.co/Js5fv3m/gpl2-min.jpg",
      width: 400,
      height: 212,
      tags: [{ value: "Gopalganj", title: "Bangladesh" }, ,],
      caption: "Gopalganj, Bangladesh",
    },
    {
      src: "https://i.ibb.co/xq7r4QX/gpl-min.jpg",
      original: "https://i.ibb.co/xq7r4QX/gpl-min.jpg",
      width: 210,
      height: 190,
      tags: [{ value: "Gopalgang", title: "Bangladesh" }],
      caption: "Gopalganj, Bangladesh",
    },
    {
      src: "https://i.ibb.co/jzJZMph/mun-min.jpg",
      original: "https://i.ibb.co/jzJZMph/mun-min.jpg",
      alt: "Wood Glass",
      width: 550,
      height: 320,
      tags: [{ value: "Munsiganj", title: "Bangladesh" }],
      caption: "Bank of River, Munsiganj, Bangladesh",
    },
    {
      src: "https://i.ibb.co/L1fZRrj/ctg-Pln-min.jpg",
      original: "https://i.ibb.co/L1fZRrj/ctg-Pln-min.jpg",
      width: 250,
      height: 183,
      caption: "Chattogram Airport, Ctg, Bangladesh ",
      tags: [{ value: "Chattogram (Airport)", title: "Bangladesh" }, ,],
    },
  ];
  //  photography pictures
  const riverPic = [
    {
      src: "https://i.ibb.co/ggygRwn/boat-Padma.jpg",
      original: "https://i.ibb.co/ggygRwn/boat-Padma.jpg",
      width: 250,
      height: 174,
      tags: [{ value: "boat", title: "India" }, ,],
      caption: "Tea Garden, Darjeling, India",
    },
    {
      src: "https://i.ibb.co/XY0jfW4/padmaB.jpg",
      original: "https://i.ibb.co/XY0jfW4/padmaB.jpg",
      width: 200,
      height: 148,
      tags: [{ value: "padma bridge", title: "India" }],
      caption: "MG Marg Road, Gangtok, India",
    },
    {
      src: "https://i.ibb.co/yk1pRW1/saintB.jpg",
      original: "https://i.ibb.co/yk1pRW1/saintB.jpg",
      width: 500,
      height: 320,
      tags: [{ value: "St. Martin", title: "Bangladesh" }],
      caption: "Saint Martin, Bangladesh",
    },
  ];
  const naturePic = [
    {
      src: "https://i.ibb.co/s3ffjFY/tree.jpg",
      original: "https://i.ibb.co/s3ffjFY/tree.jpg",
      alt: "Wood Glass",
      width: 400,
      height: 320,
      tags: [{ value: "tree", title: "India" }],
      caption: "Mall Road, Darjeeling, India",
    },
    {
      src: "https://i.ibb.co/fHyF4rn/DarjNn.jpg",
      original: "https://i.ibb.co/fHyF4rn/DarjNn.jpg",
      alt: "Wood Glass",
      width: 600,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tea Garden, Darjeeling, India",
    },

    {
      src: "https://i.ibb.co/ZdBbbMQ/darjn.jpg",
      original: "https://i.ibb.co/ZdBbbMQ/darjn.jpg",
      width: 250,
      height: 213,
      tags: [{ value: "Darjeeling", title: "Bangladesh" }, ,],
      caption: "Saint Martin, Coal Island, Bangladesh",
    },
  ];
  const animalPic = [
    {
      src: "https://i.ibb.co/mJbLn61/cat.jpg",
      original: "https://i.ibb.co/mJbLn61/cat.jpg",
      width: 290,
      height: 212,
      tags: [{ value: "Cat", title: "India" }, ,],
      caption: "Sikkim, India",
    },
    {
      src: "https://i.ibb.co/8bP7RtQ/bird.jpg",
      original: "https://i.ibb.co/8bP7RtQ/bird.jpg",
      alt: "Wood Glass",
      width: 350,
      height: 320,
      tags: [{ value: "Bird", title: "India" }],
      caption: "MG marg statue, Gangtok, India",
    },
  ];
  const othersPic = [
    {
      src: "https://i.ibb.co/g3X9N1g/csma.jpg",
      original: "https://i.ibb.co/g3X9N1g/csma.jpg",
      width: 292,
      height: 213,
      tags: [{ value: "chosma", title: "India" }],
      caption: "Tista River, India",
    },
    {
      src: "https://i.ibb.co/JBLWtSz/leg.jpg",
      original: "https://i.ibb.co/JBLWtSz/leg.jpg",
      alt: "Big Ben - London",
      width: 400,
      height: 320,
      tags: [{ value: "Leg", title: "India" }],
      caption: "Sikkim, India",
    },
    {
      src: "https://i.ibb.co/yXp9xk4/sgr.jpg",
      original: "https://i.ibb.co/yXp9xk4/sgr.jpg",
      width: 400,
      height: 212,
      tags: [{ value: "Gopalganj", title: "Bangladesh" }, ,],
      caption: "Gopalganj, Bangladesh",
    },
  ];
  return (
    <div>
      <Head>
        <title>About Shounak</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:min-h-screen flex justify-center">
        <div className="p-8">
        <h2 className={`font-oleo underline decoration-wavy decoration-2 text-7xl text-center text-primary ${(myTheme == "light") || (myTheme == "emerald") || (myTheme == "luxury") ? "drop-shadow-titleBlack" : "drop-shadow-titleWhite"}`} >
          About me
        </h2>
          
          <h4 className="text-lg text-center text-[#aeaeae]">
            Find out who I am, where I'm from and what I'm all about.
          </h4>

          {/* ====== about me text ====== */}
          <div className="text-lg md:text-xl font-thin text-justify mt-8 mb-12 leading-7">
            <p className="mb-5">
              My name's Shounak. I'm a basically part-time front end web
              developer and full time student based in Dhaka, Bangladesh.
              Currently I'm doing my B.Sc. (Hons.) in Electronics and
              Communication Engineering. During the day I spend most of the time
              in class and bus.
            </p>
            {/* <blockquote className='mx-[10%] my-[2%] p-[3%] bg-[#ededed] shadow-inner shadow-slate-400'>
            By the way You are going to read about me. Not about my skills. If you want to skip this page and know about my skills then go to SKILL page.
          </blockquote> */}
            <p className="mb-5">
              Though class lectures are about electrical and electronics based
              but I would like to read programming related topic, blog or
              articles. Want to know about a interesting line about me? "I love
              traffic jam..." Funny, right? Yeah, in that time i can think or
              learn new thing, can take rest or listening music. I learnt
              JavaScript's basic within this traffic jam. And yeah, after that,
              during evening time I spend my time by doing tuition.
            </p>
            <p className="mb-5">
              Basically I'm fast learner and very keen to learn. Obviously not
              any bookish element. I'm keen to learn new and trendy technology.
              Recently learn : React, Sass/Scss, GSAP (js library), Adobe xd.
              I'm ready to take any side project. If you want to contact with
              me, don't hesitate. And last, I like coffee. Don't think twice to
              offer me a coffee for any kind of query. Just knock me.
            </p>
          </div>

          {/*  ====== Education section ====== */}
          <h4 className="text-2xl underline">Education:</h4>
          <section>
            {/* steps  */}
            <div className="container px-5 pt-12 pb-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full justify-around">
                {/* left div - step  */}
                <div className="md:w-3/5 md:pr-10 md:py-6">
                  <div className="flex relative pb-12 ">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                  {/* ssc */}
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold underline underline-offset-4 title-font text-md mb-1 tracking-wider">
                        SSC
                      </h2>
                      <p className="leading-relaxed italic">
                        Motijheel Govt. Boys' High School.
                      </p>
                      <p className="leading-relaxed">
                        Passing Year: 2015,&emsp; GPA: 5.00
                      </p>
                    </div>
                  </div>
                  {/* hsc */}
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="font-bold underline underline-offset-4 title-font text-md mb-1 tracking-wider">
                        HSC
                      </h2>
                      <p className="leading-relaxed italic">
                        Govt. Science College.
                      </p>
                      <p className="leading-relaxed">
                        Passing Year: 2017,&emsp; GPA: 4.67
                      </p>
                    </div>
                  </div>
                  {/* Hons */}
                  <div className="flex relative ">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="font-bold underline underline-offset-4 title-font text-md mb-1 tracking-wider">
                        B.Sc
                      </h2>
                      <p className="leading-relaxed italic">
                        Institute of Science and Technology
                      </p>
                      <p className="leading-relaxed">
                      Dept: Electronics & Communication Engineering<br/>Session: 2017-18,&emsp; GPA: 3.1 (Running, Last year)
                      </p>
                    </div>
                  </div>
                </div>
                <Image className="md:w-2/5 object-cover object-center rounded-lg lg:mt-0 mt-12" src={education} width={400}  alt="step"></Image>
              </div>
            </div>
          </section>

          {/*  ====== Hobby section ====== */}

          <h4 className="text-2xl underline">Hobbies:</h4>
          <h3 className="text-xl font-thin text-justify my-8 leading-7">
            <strong>Travelling </strong> and <strong>Photography</strong> are my
            hobbies. I like to travel with team. It is one kind of natural
            medicine to me for keeping me fresh and sound. Another one is
            photography. I like to capture the beauty of nature and the memories
            of my mates. Here is some of my travel memories and photography..
          </h3>
          {/* ====== travel section ====== */}
          <h3 className={`text-center text-2xl ${myTheme !== "luxury" && "text-white"} underline my-12 py-3 bg-primary`}>
            Travel Gallery
          </h3>
          <div className="flex flex-wrap justify-center items-center md:space-y-5 xl:space-y-0 xl:space-x-5">
            {/* ====== Darjeeling Gallery ====== */}
            <div
              className="cursor-wait md:w-[48%] xl:w-[24%] md:mr-3 xl:mr-0 hover:scale-110 duration-300"
              onClick={() => setDOpen(true)}
            >
              <h5 className="text-lg text-center">Darjeeling</h5>
              <Image
                src={darj}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={darjeeling}
                open={dOpen}
                setOpen={setDOpen}
              />
            </div>
            {/* ====== Sikkim Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] hover:scale-110 duration-300"
              onClick={() => setSOpen(true)}
            >
              <h5 className="text-lg text-center">Sikkim</h5>
              <Image
                src={sikkim}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery images={sikim} open={sOpen} setOpen={setSOpen} />
            </div>
            {/* ====== Cox's Bazar Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] md:mr-3 xl:mr-0 hover:scale-110 duration-300"
              onClick={() => setCOpen(true)}
            >
              <h5 className="text-lg text-center">Cox's Bazar & St. Martin</h5>
              <Image
                src={cox}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={coxBazar}
                open={cOpen}
                setOpen={setCOpen}
              />
            </div>
            {/* ====== Others Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] hover:scale-110 duration-300"
              onClick={() => setOOpen(true)}
            >
              <h5 className="text-lg text-center">Others</h5>
              <Image
                src={other}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={otherImg}
                open={oOpen}
                setOpen={setOOpen}
              />
            </div>
          </div>
          {/* ====== Photograhy section ====== */}
          <h3 className={`text-center text-2xl ${myTheme !== "luxury" && "text-white"} underline mt-20 mb-12 py-3 bg-primary`}>
            Photography Gallery
          </h3>
          <div className="flex flex-wrap justify-center items-center md:space-y-5 xl:space-y-0 xl:space-x-5">
            {/* ====== River Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] md:mr-3 xl:mr-0 hover:scale-110 duration-300"
              onClick={() => setRiverOpen(true)}
            >
              <h5 className="text-lg text-center">River & Sea</h5>
              <Image
                src={river}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={riverPic}
                open={riverOpen}
                setOpen={setRiverOpen}
              />
            </div>
            {/* ====== Nature Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] hover:scale-110 duration-300"
              onClick={() => setNatureOpen(true)}
            >
              <h5 className="text-lg text-center">Nature</h5>
              <Image
                src={nature}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={naturePic}
                open={natureOpen}
                setOpen={setNatureOpen}
              />
            </div>
            {/* ====== animal Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] md:mr-3 xl:mr-0 hover:scale-110 duration-300"
              onClick={() => setAnimalOpen(true)}
            >
              <h5 className="text-lg text-center">Animal</h5>
              <Image
                src={animal}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={animalPic}
                open={animalOpen}
                setOpen={setAnimalOpen}
              />
            </div>
            {/* ====== Others Gallery ====== */}
            <div
              className="md:w-[48%] xl:w-[24%] hover:scale-110 duration-300"
              onClick={() => setOtherOpen(true)}
            >
              <h5 className="text-lg text-center">Others</h5>
              <Image
                src={others}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery
                images={othersPic}
                open={otherOpen}
                setOpen={setOtherOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
