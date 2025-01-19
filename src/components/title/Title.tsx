import React from "react";

interface titlePropsType {
  title: string;
  subTitleLine1: string;
  subTitleLine2: string;
}

const Title: React.FC<titlePropsType> = ({
  title,
  subTitleLine1,
  subTitleLine2,
}) => {
  return (
    <div className="text-center space-y-3">
      <h6 className="text-[#B260FD] font-medium">{title}</h6>
      <h3 className="capitalize text-3xl font-bold">
        <span>{subTitleLine1}</span> <br />
        <span>{subTitleLine2}</span>
      </h3>
    </div>
  );
};

export default Title;
