import Image from "next/image";
import Link from "next/link";
import React from "react";
import st from "../styles/contact.module.css";

type PortfolioTypes = {
  img: any;
  title: string;
  height: number;
  technology?: string;
  link?: string;
  description?: string;
  href?: string;
};

const PortfolioItem = ({
  img,
  height,
  title,
  technology,
  link='',
  description,
  href='',
}: PortfolioTypes) => {
  return (
    <div
      className={`md:w-[46%] xl:w-[23%] card bg-base-100 shadow-xl md:mr-6 xl:mr-0 ${st.glassi} bg-[#ffffff1a]`}
    >
      <figure>
        <Image height={height} src={img} alt="Album" />
      </figure>
      <div className="card-body md:text-sm">
        <h2 className="card-title text-primary md:text-lg">{title}</h2>
        <p className="">
          {description ? (
            description
          ) : (
            <>
              <strong className="underline">Required items: </strong>{" "}
              {technology}
            </>
          )}
        </p>
        <div className="card-actions justify-end">
          {href ? (
            <Link href={href}>
              <button className="btn btn-primary">All Projects</button>
            </Link>
          ) : (
            <Link target="_blank" href={link}>
              <button className="btn btn-primary">Live</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
