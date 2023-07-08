import Image from "next/image";
import Link from "next/link";
import all from "../../Imgs/Others/allProjectText.png";
import management from "../../Imgs/portfolio/management.png";
import netflix from "../../Imgs/portfolio/netflix.png";
import certi from "../../Imgs/portfolio/certi.png";
import style from "../../styles/component.module.css";
import st from "../../styles/contact.module.css"

const SortPortfolio = () => {
  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center relative">
      <div
        className={`${style.round} before:z-[-99]
      before:right-[-30%] md:before:right-[-15%] lg:before:right-[-10%] xl:before:right-[-5%] 
      before:bg-gradient-to-r before:from-[#E33A4E] before:to-[#513A8F]`}
      >
        <h1 className="text-5xl md:text-7xl text-center font-oleo underline decoration-wavy decoration-2 mb-6">
          Portfolio
        </h1>
        <div className="md:flex md:flex-wrap justify-center space-y-5 lg:space-y-0 xl:space-x-5">
          {/* 1st project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl shadow-primary md:mr-6 xl:mr-0 ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={certi} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">Certificate Verification</h2>
              <p className="">
                <strong className="underline">Required items: </strong>Next.js, Tailwind Css, React-QR-code
              </p>
              <div className="card-actions justify-end">
                <Link target="_blank" href='https://eseba.chittaranjandas.com/'><button className="btn btn-primary">Live</button></Link>
              </div>
            </div>
          </div>

          {/* 2nd project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl shadow-primary ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={netflix} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">Netflix-clone</h2>
              <p className="">
                <strong className="underline">Required items: </strong>React JS, React-YouTube, Movie-Trailer, Flex-box, Firebase
              </p>
              <div className="card-actions justify-end">
                <Link target="_blank" href='https://netflix-snk.web.app/'><button className="btn btn-primary">Live</button></Link>
              </div>
            </div>
          </div>

          {/* 3rd project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 xl:mr-0 ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={180}  src={management} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">Management App</h2>
              <p className="">
                <strong className="underline">Required items: </strong>Next.js, Firebase Auth,
                Tailwind Css, TypeScript, Prisma
              </p>
              <div className="card-actions justify-end">
                <Link target="_blank" href='https://temp-manage.vercel.app/'><button className="btn btn-primary">Live</button></Link>
              </div>
            </div>
          </div>

          {/* all project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl shadow-primary ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={all} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                Another projects are ready for you...
              </h2>
              <p className="">One click for opening my project showcase...</p>
              <div className="card-actions justify-end">
                <Link href='/Portfolio'><button className="btn btn-primary">All Projects</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortPortfolio;
