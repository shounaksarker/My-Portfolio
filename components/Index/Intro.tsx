/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Button from "../../helperComponent/Button";
import me from "../../Imgs/Others/snkH.png";
import style from "../../styles/index.module.css";

const Intro = () => {
  return (
    <div className="lg:flex items-center justify-evenly w-full min-h-screen">
      <div className="mt-6 w-full mb-6 lg:w-3/5">
        <h3 className="text-xl md:text-3xl xl:4xl">Hello..!!</h3>
        <h1 className="text-3xl md:text-5xl xl:text-7xl my-3">
          I'm <br />
          <span
            className={`${style.animateCharcter} font-clickerScript text-8xl xl:text-9xl ml-[-18px] md:ml-0`}
          >
            Shounak
          </span>
        </h1>
        <h3 className="text-xl md:text-2xl xl:text-4xl">
          Professional Web Developer
        </h3>
        <h4 className="text-xl md:text-2xl font-light my-12">
        I am a hardworking, honest, always willing to learn new skills and technologies, friendly, helpful, polite and  a good listener. To fulfill my object, I am outgoing, tactful and able to listen effectively when solving problems.
        </h4>
        <div className="flex space-x-2 md:space-x-6">
          <Button className="btn btn-primary">
            <Link
              target="_blank"
              href="https://github.com/shounaksarker?tab=repositories"
            >
              My GitHub
            </Link>
          </Button>
          <Button className="btn btn-primary">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1HVvEMJlrEJHZynh3f97OWc68LHuApnzc/view?usp=sharing"
            >
              My Resume
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative lg:w-2/5">
        <div className="customBeforeAfterP before:border-primary after:border-primary relative">
          <Image src={me} alt="Profile pic" width={500} className="p-6 m-0" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
