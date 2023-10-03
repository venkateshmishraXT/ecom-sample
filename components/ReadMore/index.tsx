"use client"

import React, { useState } from "react";
  
export const ReadMore = ({ children }:any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 120) : text}
      <span  onClick={toggleReadMore} className="font-bold block underline underline-offset-4 cursor-pointer">
        {isReadMore ? "Read more" : " show less"}
      </span>
    </p>
  );
};