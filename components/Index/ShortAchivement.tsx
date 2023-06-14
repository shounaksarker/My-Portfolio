import Image from "next/image";
import { useContext, useState } from "react";
import Link from "next/link";
import all from "../../Imgs/Others/allCourses.png";
import mine from "../../Imgs/portfolio/mine.png";
import fed from "../../Imgs/Others/FED.jpeg";
import PWJ from "../../Imgs/Others/PWJ.jpeg";
import RB from "../../Imgs/Others/RB.jpeg";
import { AppContext } from "../../pages/_app";
import style from "../../styles/component.module.css";
import SingleGallery from "../../helperComponent/SingleGallery";

const ShortAchivement = () => {
  const [myTheme,] = useContext<any>(AppContext);
  const [dOpen, setDOpen] = useState(false);

  const myImgs = [
    {
      src: "https://i.ibb.co/xMf8dx7/IMG20230531134701-03.jpg",
      original: "https://i.ibb.co/xMf8dx7/IMG20230531134701-03.jpg",
      alt: "with Mayor",
      width: 400,
      height: 320,
      tags: [{ value: "Darjeeling", title: "India" }],
      caption: "Showing the Certificate verify project for the resident of ward no-5",
    },
    {
      src: "https://i.ibb.co/tBrsspd/IMG-20230601-WA0000-01.jpg",
      original: "https://i.ibb.co/tBrsspd/IMG-20230601-WA0000-01.jpg",
      width: 250,
      height: 174,
      tags: [{ value: "Darjeling", title: "India" }, ,],
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
        <div className="md:flex md:flex-wrap justify-center space-y-5 lg:space-y-0">
          {/* 1st div  */}
          <div className="md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 bg-[#ffffff1a]">
            {/* modal opening */}
            <label htmlFor="my-modal-1">
              <figure className="cursor-grabbing">
                <Image src={fed} alt="Introduction to frontend development" />
              </figure>
            </label>
            {/* modal */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <label htmlFor="my-modal-1" className="modal cursor-auto">
              <label
                className="modal-box relative md:min-w-[50vw] md:min-h-[50vh]"
                htmlFor=""
              >
                <Image src={fed} alt="Introduction to frontend development" />
                <div className="modal-action">
                  <label htmlFor="my-modal-1" className="btn">
                    X
                  </label>
                </div>
              </label>
            </label>
            {/* modal end  */}

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"} ${(myTheme === "light") && "bg-white/50"}`}>
              <h2 className="card-title text-primary">
                Introduction of Frontend development
              </h2>
              <p>
                <strong>Platform: </strong>Coursera
              </p>
              <div className="flex card-actions justify-between items-center">
                <span>
                  <strong>Grade:</strong> 93.40%
                </span>
                <button className="btn btn-primary">
                  <Link
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/HGCQ7F3EENEW"
                  >
                    Verify
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* 2nd div  */}
          <div className="md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl xl:mr-6 bg-[#ffffff1a]">
            {/* modal opening */}
            <label htmlFor="my-modal-2">
              <figure className="cursor-grabbing">
                <Image src={PWJ} alt="Programming With JavaScript" />
              </figure>
            </label>
            {/* modal */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <label htmlFor="my-modal-2" className="modal cursor-auto">
              <label
                className="modal-box relative md:min-w-[50vw] md:min-h-[50vh]"
                htmlFor=""
              >
                <Image src={PWJ} alt="Programming With JavaScript" />
                <div className="modal-action">
                  <label htmlFor="my-modal-2" className="btn">
                    X
                  </label>
                </div>
              </label>
            </label>
            {/* modal end  */}

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"} ${(myTheme === "light") && "bg-white/50"}`}>
              <h2 className="card-title text-primary">Programming With JavaScript</h2>
              <p>
                <strong>Platform: </strong>Coursera
              </p>
              <div className="flex card-actions justify-between items-center">
                <span>
                  <strong>Grade:</strong> 95.33%
                </span>
                <button className="btn btn-primary">
                  <Link
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/Z55ESLSJ3RK4"
                  >
                    Verify
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* 3rd div  */}
          <div className="md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 bg-[#ffffff1a]">
            {/* modal opening */}
            <label htmlFor="my-modal-3">
              <figure className="cursor-grabbing">
                <Image src={RB} alt="React Basic" />
              </figure>
            </label>
            {/* modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <label htmlFor="my-modal-3" className="modal cursor-auto">
              <label
                className="modal-box relative md:min-w-[50vw] md:min-h-[50vh]"
                htmlFor=""
              >
                <Image src={RB} alt="React Basic" />
                <div className="modal-action">
                  <label htmlFor="my-modal-3" className="btn">
                    X
                  </label>
                </div>
              </label>
            </label>
            {/* modal end  */}

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"} ${(myTheme === "light") && "bg-white/50"}`}>
              <h2 className="card-title text-primary">React Basic</h2>
              <p>
                <strong>Platform: </strong>Coursera
              </p>
              <div className="flex card-actions justify-between items-center">
                <span>
                  <strong>Grade:</strong> 97.50%
                </span>
                <button className="btn btn-primary">
                  <Link
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/PF8B6U26NAWY"
                  >
                    Verify
                  </Link>
                </button>
              </div>
            </div>
          </div>
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
            <div className={`card-body ${(myTheme !== "luxury") && "text-white"} ${(myTheme === "light") && "bg-white/50"}`}>
              <h2 className="card-title text-primary">
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
