import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import all from "../../Imgs/allCourses.png";
import fed from "../../Imgs/FED.jpeg";
import PWJ from "../../Imgs/PWJ.jpeg";
import RB from "../../Imgs/RB.jpeg";
import { AppContext } from "../../pages/_app";
import style from "../../styles/component.module.css";

const ShortAchivement = () => {
  const [myTheme, ] = useContext<any>(AppContext);
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

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"}`}>
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

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"}`}>
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

            <div className={`card-body ${(myTheme !== "luxury") && "text-white"}`}>
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
          <div className="md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl bg-[#ffffff1a]">
            <figure>
              <Image height={200} src={all} alt="Album" />
            </figure>
            <div className={`card-body ${(myTheme !== "luxury") && "text-white"}`}>
              <h2 className="card-title text-primary">
                Another Certificates are ready for your concentration...
              </h2>
              <p>One click for opening my certificate showcase...</p>
              <div className="flex card-actions justify-end items-center">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAchivement;
