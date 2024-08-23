import React from "react";

type ExperienceItemProps = {
  position: string;
  companyName: string;
  jobDate?: string;
  className?: string;
  responsibilities: string[];
};

const ExperienceItem = ({
  position,
  companyName,
  jobDate,
  responsibilities,
  className,
}: ExperienceItemProps) => {
  return (
    <div className={`flex relative pb-8 ${className}`}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-bold text-lg underline underline-offset-4 title-font text-md mb-1 tracking-wider text-primary">
          {position}
        </h2>
        <p className="leading-relaxed text-sm">
          <span className="text-primary/70 text-lg">{companyName}</span>
          {jobDate ? <span>&emsp;({jobDate})</span> : ""}
        </p>
        <ul className="leading-relaxed list-disc text-justify mt-2 flex flex-col gap-y-4">
          {responsibilities.map((responsibility: string, index: any) => (
            <li key={index} className="">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
