import Image from "next/image";
import Link from "next/link";
import all from "../../Imgs/allProjectText.png";
import auth from "../../Imgs/auth.png";
import blood from "../../Imgs/blood.png";
import powerOdd from "../../Imgs/powerodd.png";
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
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 xl:mr-0 ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={auth} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">Authentication</h2>
              <p className="">
                <strong className="underline">Required Technologies: </strong>React.js, Firebase Auth,
                Bootstrap, React-Router
              </p>
              <div className="card-actions justify-end">
                <Link href='https://auth-snk.web.app/'><button className="btn btn-primary">Live</button></Link>
              </div>
            </div>
          </div>
          {/* 2nd project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl shadow-primary ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={blood} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">Blood App</h2>
              <p className="">
                <strong className="underline">Required Technologies: </strong>React.js, Firebase Auth,
                Bootstrap, React-Router, Firebase Database and Hosting
              </p>
              <div className="card-actions justify-end">
                <Link href='https://blood-app-snk.web.app'><button className="btn btn-primary">Live</button></Link>
              </div>
            </div>
          </div>
          {/* 3rd project */}
          <div className={`md:w-[48%] xl:w-[23%] card bg-base-100 shadow-xl shadow-primary md:mr-6 xl:mr-0 ${st.glassi} bg-[#ffffff1a]`}>
            <figure>
              <Image height={200} src={powerOdd} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">PowerOdd - (OTP)</h2>
              <p className="">
                <strong className="underline">Required Technologies: </strong>React.js, Firebase Auth,
                Bootstrap, React-Router
              </p>
              <div className="card-actions justify-end">
                <Link href='https://phone-auth-snk.web.app'><button className="btn btn-primary">Live</button></Link>
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
