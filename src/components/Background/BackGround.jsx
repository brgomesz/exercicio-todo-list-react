import React from "react";
import "./BackGround.css";

const Background = ({ children, backgroundClass }) => {
  return <div className={`background ${backgroundClass}`}>{children}</div>;
};
// 

export default Background;
