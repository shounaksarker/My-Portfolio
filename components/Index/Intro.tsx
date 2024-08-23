/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Button from "../../helperComponent/Button";
// import me from "../../Imgs/Others/snkH.png";
// import me from "../../Imgs/Others/file.png";
import me from "../../Imgs/Others/snkH2.png";
import style from "../../styles/index.module.css";

const Intro = () => {
  return (
    <div className="lg:flex items-center justify-evenly w-full min-h-screen">
      <div className="mt-6 w-full mb-6 lg:w-3/5 lg:pr-4">
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
          Software Engineer
        </h3>
        <h4 className="text-xl md:text-2xl font-light my-12 text-justify">
        with expertise in both frontend and backend development. Holding a B.Sc in Electronics and Communication Engineering, I’ve honed my skills in creating high-performance web applications. My career has been a blend of creativity and logic, where I've consistently delivered results that drive business growth and user engagement. I'm on a mission to leverage technology to create intuitive, efficient, and scalable digital products.
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
              href="https://drive.google.com/file/d/1BIsTvUnUPIuJqoU2MQ7OUJEHDj-KsVev/view?usp=drivesdk"
            >
              My Resume
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative max-w-[300px] lg:max-w-full lg:w-2/5">
        <div className="customBeforeAfterP before:border-primary after:border-primary relative flex justify-center max-h-[500px] lg:max-h-full">
          <Image src={me} alt="Profile pic" width={300} className="p-6 m-0" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
