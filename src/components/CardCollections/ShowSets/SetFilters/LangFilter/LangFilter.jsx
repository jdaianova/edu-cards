import { useEffect, useState } from "react";
import "./LangFilter.css";
import SliderToggle from "./SliderToggle/SliderToggle";

const LangFilter = ({ setFilterLang }) => {
  const [isRuActive, setIsRuActive] = useState(true);
  const [isEnActive, setIsEnActive] = useState(true);

  useEffect(() => {
    let filterLang;
    if (isRuActive && isEnActive) {
      setFilterLang("all");
    } else if (isRuActive) {
      setFilterLang("ru");
    } else if (isEnActive) {
      setFilterLang("en");
    } else {
      setFilterLang("none");
    }
    localStorage.setItem("filterLang", filterLang);
  }, [isRuActive, isEnActive, setFilterLang]);

  return (
    <div className="LangFilter">
      <div className="LangFilter__switch">
        <SliderToggle labelText={"ru"} onToggle={setIsRuActive} />
      </div>
      <div className="LangFilter__switch">
        <SliderToggle labelText={"en"} onToggle={setIsEnActive} />
      </div>
    </div>
  );
};

export default LangFilter;
