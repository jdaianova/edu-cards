import "./ChoosingLang.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ChoosingLang = ({ nextStep, prevStep }) => {
  const { t } = useTranslation();

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
        <h5>{t("choose_lang_head_text")}</h5>
        <p>{t("choose_lang_text")}</p>
        <div className="ChoosingLang__section__lang">
          <button onClick={() => setLang("ru")} disabled={lang === "ru"}>
            русский
          </button>
          <button onClick={() => setLang("en")} disabled={lang === "en"}>
            english
          </button>
        </div>
      </div>
      <div className="CardWorkspace__form__btns">
        <button onClick={handleStepBackBtn}>{t("create_btn_back")}</button>
        <button onClick={handleStepForwardBtn} disabled={lang === null}>
          {t("create_btn_forward")}
        </button>
      </div>
    </div>
  );
};

export default ChoosingLang;
