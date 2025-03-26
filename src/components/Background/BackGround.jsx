import React from "react";
import "./Background.css";

const Background = ({ children, backgroundClass }) => {
  return <div className={`background ${backgroundClass}`}>{children}</div>;
};

export default Background;
