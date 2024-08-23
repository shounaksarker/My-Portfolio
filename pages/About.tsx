/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// travel --- darjeeling
import darj from "../Imgs/Travel/DarjTea-min.jpeg";
import darjTBack from "../Imgs/Travel/darjT-min.jpeg";
import darjWater from "../Imgs/Travel/wtr-min.jpeg";
import darjMe from "../Imgs/Travel/me-min.jpeg";
// sikkim
import sikkimBackGarden from "../Imgs/Travel/skm-min.jpeg";
import sikkimYellow from "../Imgs/Travel/skm2-min.jpeg";
import sikkimMgRoad from "../Imgs/Travel/MGmarg-min.jpeg";
import sikkimMgWindow from "../Imgs/Travel/MgMrg2-min.jpeg";
// cox-saint
import saintLv from "../Imgs/Travel/saintLv-min.jpeg";
import saintDab from "../Imgs/Travel/saintDab-min.jpeg";
import cxBike from "../Imgs/Travel/cxBike-min.jpeg";
import cox from "../Imgs/Travel/cx-min.jpeg";
// other
import other from "../Imgs/Travel/gpl2-min.jpeg";
import other2 from "../Imgs/Travel/gpl-min.jpeg";
import other3 from "../Imgs/Travel/mun-min.jpeg";
import other4 from "../Imgs/Travel/ctgPln-min.jpg";
// Photography --- river
import river from "../Imgs/Photography/boatPadma.jpeg";
import river2 from "../Imgs/Photography/padmaB.jpeg";
import river3 from "../Imgs/Photography/saintB.jpeg";
// animal
import animal from "../Imgs/Photography/cat.jpeg";
import animal2 from "../Imgs/Photography/bird.jpeg";
// nature
import nature from "../Imgs/Photography/DarjNn.jpeg";
import nature1 from "../Imgs/Photography/tree.jpeg";
import nature2 from "../Imgs/Photography/darjn.jpeg";
// others
import others from "../Imgs/Photography/leg.jpeg";
import others1 from "../Imgs/Photography/csma.jpeg";
import others2 from "../Imgs/Photography/sgr.jpeg";
// others imports
import Head from "next/head";
import { useContext, useState } from "react";
import SingleGallery from "../helperComponent/SingleGallery";
import education from "../Imgs/Others/education.png";
import engineerJob from "../Imgs/Others/engineerJob.png";
import { AppContext } from "../pages/_app";
import ExperienceItem from "../components/ExperienceItem";
import EducationItem from "../components/EducationItem";

// ------------------------------------------------------------------------------
const Aboutme = () => {
  const [myTheme] = useContext<any>(AppContext);

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
  // travel pictures
  const darjeeling = [
    {
      src: darj,
      original: darj.src,
      width: 250,
      height: 174,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tea Garden, Darjeeling, India",
    },
    {
      src: darjMe,
      original: darjMe.src,
      width: 400,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Mall Road, Darjeeling, India",
    },
    {
      src: darjTBack,
      original: darjTBack.src,
      width: 600,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tea Garden, Darjeeling, India",
    },
    {
      src: darjWater,
      original: darjWater.src,
      width: 292,
      height: 213,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tista River, India",
    },
  ];
  
  const sikkim = [
    {
      src: sikkimBackGarden,
      original: sikkimBackGarden.src,
      width: 290,
      height: 212,
      tags: [{ value: "Sikkim", title: "India" }],
      caption: "Sikkim Garden, India",
    },
    {
      src: sikkimYellow,
      original: sikkimYellow.src,
      width: 400,
      height: 320,
      tags: [{ value: "Sikkim", title: "India" }],
      caption: "Sikkim, India",
    },
    {
      src: sikkimMgRoad,
      original: sikkimMgRoad.src,
      width: 350,
      height: 320,
      tags: [{ value: "MG Marg, Gangtok", title: "India" }],
      caption: "MG Marg statue, Gangtok, India",
    },
    {
      src: sikkimMgWindow,
      original: sikkimMgWindow.src,
      width: 200,
      height: 148,
      tags: [{ value: "Gangtok", title: "India" }],
      caption: "MG Marg Road, Gangtok, India",
    },
  ];
  
  const coxBazar = [
    {
      src: saintLv,
      original: saintLv.src,
      width: 250,
      height: 213,
      tags: [{ value: "St. Martin", title: "Bangladesh" }],
      caption: "Saint Martin, Coal Island, Bangladesh",
    },
    {
      src: saintDab,
      original: saintDab.src,
      width: 500,
      height: 320,
      tags: [{ value: "St. Martin", title: "Bangladesh" }],
      caption: "Saint Martin, Bangladesh",
    },
    {
      src: cxBike,
      original: cxBike.src,
      width: 245,
      height: 113,
      tags: [{ value: "Cox's Bazar", title: "Bangladesh" }],
      caption: "Water-bike, Cox's Bazar, Bangladesh",
    },
    {
      src: cox,
      original: cox.src,
      width: 350,
      height: 320,
      tags: [{ value: "Cox's Bazar", title: "Bangladesh" }],
      caption: "Sea beach, Cox's Bazar, Bangladesh",
    },
  ];
  
  const otherImg = [
    {
      src: other,
      original: other.src,
      width: 400,
      height: 212,
      tags: [{ value: "Gopalganj", title: "Bangladesh" }, ,],
      caption: "Gopalganj, Bangladesh",
    },
    {
      src: other2,
      original: other2.src,
      width: 210,
      height: 190,
      tags: [{ value: "Gopalgang", title: "Bangladesh" }],
      caption: "Gopalganj, Bangladesh",
    },
    {
      src: other3,
      original: other3.src,
      alt: "Wood Glass",
      width: 550,
      height: 320,
      tags: [{ value: "Munsiganj", title: "Bangladesh" }],
      caption: "Bank of River, Munsiganj, Bangladesh",
    },
    {
      src: other4,
      original: other4.src,
      width: 250,
      height: 183,
      caption: "Chattogram Airport, Ctg, Bangladesh ",
      tags: [{ value: "Chattogram (Airport)", title: "Bangladesh" }, ,],
    },
  ];

  // const otherImg = [
  //   {
  //     src: other,
  //     original: "https://i.ibb.co/Js5fv3m/gpl2-min.jpg",
  //     width: 400,
  //     height: 212,
  //     tags: [{ value: "Gopalganj", title: "Bangladesh" }, ,],
  //     caption: "Gopalganj, Bangladesh",
  //   },
  //   {
  //     src: other2,
  //     original: "https://i.ibb.co/xq7r4QX/gpl-min.jpg",
  //     width: 210,
  //     height: 190,
  //     tags: [{ value: "Gopalgang", title: "Bangladesh" }],
  //     caption: "Gopalganj, Bangladesh",
  //   },
  //   {
  //     src: other3,
  //     original: "https://i.ibb.co/jzJZMph/mun-min.jpg",
  //     alt: "Wood Glass",
  //     width: 550,
  //     height: 320,
  //     tags: [{ value: "Munsiganj", title: "Bangladesh" }],
  //     caption: "Bank of River, Munsiganj, Bangladesh",
  //   },
  //   {
  //     src: other4,
  //     original: "https://i.ibb.co/L1fZRrj/ctg-Pln-min.jpg",
  //     width: 250,
  //     height: 183,
  //     caption: "Chattogram Airport, Ctg, Bangladesh ",
  //     tags: [{ value: "Chattogram (Airport)", title: "Bangladesh" }, ,],
  //   },
  // ];
  //  photography pictures
  const riverPic = [
    {
      src: river,
      original: river.src,
      width: 250,
      height: 174,
      tags: [{ value: "boat", title: "Padma River" }],
      caption: "Padma River, Bangladesh",
    },
    {
      src: river2,
      original: river2.src,
      width: 200,
      height: 148,
      tags: [{ value: "padma bridge", title: "Bangladesh" }],
      caption: "Padma Bridge, Bangladesh",
    },
    {
      src: river3,
      original: river3.src,
      width: 500,
      height: 320,
      tags: [{ value: "St. Martin", title: "Bangladesh" }],
      caption: "Saint Martin, Bangladesh",
    },
  ];
  
  const naturePic = [
    {
      src: nature1,
      original: nature1.src,
      width: 400,
      height: 320,
      tags: [{ value: "tree", title: "Bangladesh" }],
      caption: "Sunset",
    },
    {
      src: nature,
      original: nature.src,
      width: 600,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Tista river with cloud, Gangtok, India",
    },
    {
      src: nature2,
      original: nature2.src,
      width: 250,
      height: 213,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Clouds over tea garden, Darjeeling",
    },
  ];
  
  const animalPic = [
    {
      src: animal,
      original: animal.src,
      width: 290,
      height: 212,
      tags: [{ value: "Cat", title: "bd" }],
      caption: "Love of mother cat",
    },
    {
      src: animal2,
      original: animal2.src,
      width: 350,
      height: 320,
      tags: [{ value: "Bird", title: "India" }],
      caption: "Bird showpiece",
    },
  ];
  
  const othersPic = [
    {
      src: others1,
      original: others1.src,
      width: 292,
      height: 213,
      tags: [{ value: "chosma", title: "BD" }],
      caption: "River scenario without glass",
    },
    {
      src: others,
      original: others.src,
      width: 400,
      height: 320,
      tags: [{ value: "Leg", title: "India" }],
      caption: "Walk Alone to the sea",
    },
    {
      src: others2,
      original: others2.src,
      width: 400,
      height: 212,
      tags: [{ value: "Gopalganj", title: "Bangladesh" }],
      caption: "Childhood Game",
    },
  ];
  

  const internResponsibilities = [
    "Learned and applied Vue.js, Vuex, and many more in real-world projects.",
    "Assisted in resolving issues across various projects, improving system reliability.",
    "Fixed errors and bugs in dashboards, contributing to smoother project operations.",
  ];

  const aseResponsibilities = [
    "Developed the ride-sharing feature for bike and car rides on the web platform, enhancing the user experience.",
    "Implemented new features on existing projects, driving continuous product improvement.",
    "Refactored functions and optimized code to enhance performance and maintainability.",
  ];

  const se1Responsibilities = [
    "Extended the ride-sharing feature to rental rides and auto (Tuktuk) rides in Nepal’s cities, broadening service offerings.",
    "Developed APIs and created logic to support platform's ongoing innovation.",
    "Identified and fixed errors in multiple projects, ensuring a high level of user satisfaction and system stability.",
  ];

  const FedResponsibilities = [
    "Developed E-commerce functionalities such as shopping cart and admin dashboard, making the process 40% faster than before.",
    "Developed and designed a responsive company website that increased user engagement by 30%.",
    "Integrated Firebase for real-time data storage and collaborated with teams to meet client expectations.",
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
          <h2
            className={`font-oleo underline underline-offset-4 decoration-wavy decoration-2 text-7xl text-center text-primary ${
              myTheme == "light" || myTheme == "emerald" || myTheme == "luxury"
                ? "drop-shadow-titleBlack"
                : "drop-shadow-titleWhite"
            }`}
          >
            About me
          </h2>

          <h4 className="text-lg text-center text-[#aeaeae]">
            Find out who I am, where I'm from and what I'm all about.
          </h4>

          {/* ====== about me text ====== */}
          <div className="text-lg md:text-xl font-thin text-justify mt-8 mb-12 leading-7">
            <p className="mb-5">
              I’m <b>Shounak</b>, a dedicated Software Engineer, currently
              working at <b>Pathao Ltd.</b>, a leading digital platform in
              Bangladesh, where I help to shape the future of Bangladesh’s
              digital services. My journey at Pathao has been marked by the
              development of features like a ride-sharing option on the web
              platform, which has added significant value to the user
              experience. <br /> <br /> My work is not limited to new
              developments; I also focus on refining existing systems by
              identifying and fixing issues to enhance overall system
              performance. I’m passionate about using technology to create
              innovative and practical solutions that solve real-world problems.
            </p>
          </div>

          {/*  ====== Experience section ====== */}
          <section className="mb-6">
            <h4 className="text-2xl underline underline-offset-4">
              Experience:
            </h4>
            <div className="container md:px-5 pt-4 pb-10 md:pb-14 mx-auto flex flex-wrap">
              <div className="flex flex-col lg:flex-row flex-wrap w-full justify-around items-center">
                {/* left div - step  */}
                <div className="lg:w-3/5 lg:pr-10 lg:py-6">
                  {/* SE-I */}
                  <ExperienceItem
                    position="Software Engineer-I"
                    companyName="Pathao Ltd."
                    jobDate="Jul, 2024 - Present"
                    responsibilities={se1Responsibilities}
                  />

                  {/* Associate SE */}
                  <ExperienceItem
                    position="Associate Software Engineer"
                    companyName="Pathao Ltd."
                    jobDate="Apr, 2024 - Jun, 2024"
                    responsibilities={aseResponsibilities}
                  />
                  {/* Intern */}
                  <ExperienceItem
                    position="Intern Software Engineer"
                    companyName="Pathao Ltd."
                    jobDate="Dec, 2023 - Mar, 2024"
                    responsibilities={internResponsibilities}
                  />
                  {/* Intern */}
                  <ExperienceItem
                    position="Frontend Developer"
                    companyName="Devfirm Ltd."
                    jobDate="Jun, 2023 - Nov, 2023"
                    responsibilities={FedResponsibilities}
                    className="!pb-0"
                  />
                </div>
                <Image
                  className="lg:w-2/5 lg:max-w-[500px] object-cover object-center rounded-lg lg:mt-0 mt-12"
                  src={engineerJob}
                  width={400}
                  alt="step"
                />
              </div>
            </div>
          </section>

          {/*  ====== Education section ====== */}
          <section>
            <h4 className="text-2xl underline">Education:</h4>
            <div className="container md:px-5 pt-4 pb-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full justify-around items-center">
                {/* left div - step  */}
                <div className="md:w-3/5 md:pr-10 md:py-6">
                  <EducationItem
                    exam="SSC"
                    institute="Motijheel Govt. Boys High School"
                    passingYear="2015"
                    result="5.00"
                  />
                  <EducationItem
                    exam="HSC"
                    institute="Govt. Science College"
                    passingYear="2017"
                    result="4.67"
                  />
                  <EducationItem
                    exam="B.Sc"
                    institute="Institute of Science and Technology"
                    session="2017-18"
                    result="3.18"
                    dept="Electronics & Communication Engineering"
                    className="!p-0"
                  />
                </div>
                <Image
                  className="md:w-2/5 md:max-w-[400px] object-cover object-center rounded-lg lg:mt-0 mt-12"
                  src={education}
                  width={400}
                  alt="step"
                />
              </div>
            </div>
          </section>

          {/*  ====== Hobby section ====== */}

          <h4 className="text-2xl underline">Hobbies:</h4>
          <h3 className="text-xl font-thin text-justify my-8 leading-7">
            I have a deep passion for <strong>Travelling </strong> and{" "}
            <strong>Photography</strong>, which allows me to capture the beauty
            of diverse cultures, landscapes, and moments. Whether it's the
            vibrant streets of a bustling city or the serene stillness of
            nature, I find joy in documenting the world through my lens. Each
            journey fuels my creativity, inspiring me to tell compelling visual
            stories.
          </h3>
          {/* ====== travel section ====== */}
          <h3
            className={`text-center text-2xl ${
              myTheme !== "luxury" && "text-white"
            } underline my-12 py-3 bg-primary`}
          >
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
                src={sikkimMgRoad}
                alt="imageD"
                className="cursor-hand h-[350px] rounded-2xl"
              />
              <SingleGallery images={sikkim} open={sOpen} setOpen={setSOpen} />
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
          <h3
            className={`text-center text-2xl ${
              myTheme !== "luxury" && "text-white"
            } underline mt-20 mb-12 py-3 bg-primary`}
          >
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
