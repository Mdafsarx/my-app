import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Our_Service_Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="space-y-2.5 border border-[#F0EBFE] rounded-2xl p-4">
      {/* icon */}
      <div className="bg-[#F0EBFE] size-12 flex items-center justify-center rounded-full">
        {icon}
      </div>
      {/* title */}
      <h3 className="text-lg font-semibold">{title}</h3>
      {/* description */}
      <p className="opacity-75">{description}</p>
    </div>
  );
};

export default Our_Service_Card;
