import React from "react";

type EducationItemProps = {
  exam: string;
  institute: string;
  dept?: string;
  session?: string;
  passingYear?: string;
  className?: string;
  result: string;
};

const EducationItem = ({
  exam,
  institute,
  dept,
  session,
  passingYear,
  result,
  className
}: EducationItemProps) => {
  return (
    <div className={`flex relative pb-8 ${className}`}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-bold underline underline-offset-4 title-font text-md mb-1 tracking-wider">
          {exam}
        </h2>
        <p className="leading-relaxed italic">{institute}</p>
        {dept && <p className="leading-relaxed">Dept: {dept}</p>}
        <p className="leading-relaxed">
          {passingYear && <span>Passing Year: {passingYear},</span>}
          {session && <span>Session: {session},</span>}
          &emsp; Result: {result}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
