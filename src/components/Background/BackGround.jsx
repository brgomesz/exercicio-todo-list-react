import React from "react";
import "./components/Background.css";

const Background = ({ children, backgroundClass }) => {
  return <div className={`background ${backgroundClass}`}>{children}</div>;
};

export default Background;
