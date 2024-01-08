import React from "react";
import { useLocation } from "react-router-dom";

const Learning = () => {
  const location = useLocation();
  const { set } = location.state || {};
  console.log(set);

  return <div>Learning</div>;
};

export default Learning;
