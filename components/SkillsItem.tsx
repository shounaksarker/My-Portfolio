import Image, { StaticImageData } from "next/image";
import React from "react";

type imageProps = {
  image: StaticImageData;
  name: string;
  width?: number;
  className?: string;
};

const SkillsItem = ({ image, width, name, className }: imageProps) => {
  return (
    <div className={`flex justify-start items-center text-xl ${className}`}>
      <Image src={image} alt="images" className="mr-4" width={width || 40} />
      {name}
    </div>
  );
};

export default SkillsItem;
