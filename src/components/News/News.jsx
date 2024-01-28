import { useContext } from "react";
import "./News.css";
import Timeline from "./Timeline/Timeline";
import { ThemeContext } from "../ThemeContext";

const News = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`News News-${theme}`}>
      <h5>2024</h5>
      <Timeline />
    </div>
  );
};

export default News;
