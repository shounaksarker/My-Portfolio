import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../pages/_app";

type AchievementTypes = {
  img: any;
  title: string;
  platform: string;
  grade: string | number;
  link: string;
};

const AchivementItem = ({ img, title, platform, grade, link }: AchievementTypes) => {
  const [myTheme] = useContext<any>(AppContext);

  return (
    <div className="md:w-[46%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 bg-[#ffffff1a]">
      {/* modal opening */}
      <label htmlFor="my-modal-1">
        <figure className="cursor-grabbing">
          <Image src={img} alt={title} />
        </figure>
      </label>
      {/* modal */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-auto">
        <label
          className="modal-box relative md:min-w-[50vw] md:min-h-[50vh]"
          htmlFor=""
        >
          <Image src={img} alt={title} />
          <div className="modal-action">
            <label htmlFor="my-modal-1" className="btn">
              X
            </label>
          </div>
        </label>
      </label>
      {/* modal end  */}

      <div
        className={`card-body lg:text-sm ${myTheme !== "luxury" && "text-white"} ${
          myTheme === "light" && "bg-white/50"
        }`}
      >
        <h2 className="card-title text-primary lg:text-base">{title}</h2>
        <p>
          <strong>Platform: </strong>
          {platform}
        </p>
        <div className="flex card-actions justify-between items-center">
          <span>
            <strong>Grade:</strong> {grade}%
          </span>
          <button className="btn btn-primary">
            <Link target="_blank" href={link}>
              Verify
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchivementItem;
