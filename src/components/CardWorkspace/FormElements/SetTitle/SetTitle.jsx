import { useTranslation } from "react-i18next";
import "./SetTitle.css";
import { useEffect, useState } from "react";

const SetTitle = ({ nextStep }) => {
  const { t } = useTranslation();
  const [currentTitle, setCurrentTitle] = useState(
    localStorage.getItem("currentTitle") || ""
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("currentTitle", currentTitle);
  }, [currentTitle]);

  const saveSetTitle = () => {
    if (!currentTitle || currentTitle.length > 50) {
      setError(
        currentTitle.length > 50 ? t("error_more_simbols") : t("error_empty")
      );
      return;
    }

    setError(false);
    nextStep();
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setCurrentTitle(newValue);

    if (newValue.length > 50) {
      setError(t("error_more_simbols"));
    } else if (newValue.length === 0) {
      setError(t("error_empty"));
    } else {
      setError(false);
    }
  };

  return (
    <div className="SetTitle form-element-wrapper">
      <div className="SetTitle__section form-element-section">
        <h5>{t("set_title_head_text")}</h5>
        <p>{t("set_title_text")}</p>
        <textarea
          placeholder={`${t("set_title_head_text")}...`}
          value={currentTitle}
          onChange={handleInputChange}
          style={{ color: error ? "red" : "" }}
        />
        {error && <div className="error">{error}</div>}
      </div>

      <div className="CardWorkspace__form__btns">
        <button disabled={true}>{t("create_btn_back")}</button>
        <button onClick={saveSetTitle} disabled={error}>
          {t("create_btn_forward")}
        </button>
      </div>
    </div>
  );
};

export default SetTitle;
