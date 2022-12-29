import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./project.module.css";
type propType = {
  img: StaticImageData;
  title: string;
  overview: string;
  technology: string;
  repository: string;
  demo: string;
  className: string;
};

const Project = ({
  img,
  title,
  overview,
  technology,
  repository,
  demo,
  className,
}: propType) => {
  return (
    <div
      className={`md:w-[48%] xl:w-[31%] 2xl:w-[24%] mb-16 py-4 shadow-skill shadow-[#707070] ${
        style.center
      } ${className ? className : ""}`}
    >
      <div className={`${style.frontFace}`}>
        <div className={`${style.front} ${style.content}`}>
          <div className="px-4">
            <Image src={img} alt="Project Image" height={300} />
          </div>
          <div className=" px-4 mt-6 md:mt-0">
            <h2 className="text-xl mt-3">{title}</h2>

            <div className="mt-5 md:mt-6">
              <button className="btn btn-primary mr-5">
                <Link target="_blank" href={repository}>Repository</Link>
              </button>
              <button className="btn btn-primary">
                <Link target="_blank" href={demo}>Demo</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* back side */}
      <div className={`${style.backFace} p-8`}>
        <div className={`${style.back} ${style.content} text-base md:text-lg xl:text-sm 2xl:text-lg`}>
          <p className="font-light">
            <strong>Technologies: </strong>
            {technology}
          </p>

          <p className="font-light my-5 md:my-2 2xl:my-8">
            <strong>Overview: </strong>
            {overview}
          </p>
          <div className="mt-5 md:mt-8">
            <button className="btn btn-primary mr-5">
              <Link href={repository}>Repository</Link>
            </button>
            <button className="btn btn-primary">
              <Link href={demo}>Demo</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
