import { useEffect, useState } from "react";
import "./ChoosingLang.css";

const ChoosingLang = ({ nextStep, prevStep }) => {
  const [lang, setLang] = useState(localStorage.getItem("set_lang") || null);

  const handleStepBackBtn = () => {
    prevStep();
  };

  const handleStepForwardBtn = () => {
    nextStep();
  };

  useEffect(() => {
    localStorage.setItem("set_lang", lang);
  }, [lang]);

  return (
    <div className="ChoosingLang form-element-wrapper">
      <div className="ChoosingLang__section form-element-section">
        <h5>выберите язык</h5>
        <p>На каком языке будет ваш набор карточек?</p>
        <div className="ChoosingLang__section__lang">
          <button onClick={() => setLang("ru")} disabled={lang === "ru"}>
            russian
          </button>
          <button onClick={() => setLang("en")} disabled={lang === "en"}>
            english
          </button>
        </div>
      </div>
      <div className="CardWorkspace__form__btns">
        <button onClick={handleStepBackBtn}>Назад</button>
        <button onClick={handleStepForwardBtn} disabled={lang === null}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default ChoosingLang;
