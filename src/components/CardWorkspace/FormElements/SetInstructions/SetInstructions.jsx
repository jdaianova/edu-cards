import "./SetInstructions.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SetInstructions = ({ nextStep, prevStep }) => {
  const { t } = useTranslation();

  const [instructions, setInstructions] = useState(
    localStorage.getItem("instructions") || ""
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("instructions", instructions);
  }, [instructions]);

  const saveInstructions = () => {
    if (instructions.length > 200) {
      setError("Превышено ограничение по длине.");
      return;
    }
    setError(false);
    nextStep();
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInstructions(newValue);

    if (newValue.length > 200) {
      setError("Превышено ограничение по длине.");
    } else {
      setError(false);
    }
  };

  return (
    <div className="SetInstructions form-element-wrapper">
      <div className="SetInstructions__section form-element-section">
        <h5>{t("set_instructions_head_text")}</h5>
        <span>{t("create_duty")}</span>
        <p>{t("set_instructions_text")}</p>
        <textarea
          placeholder={`${t("set_instructions_placeholder")}...`}
          value={instructions}
          onChange={handleInputChange}
          style={{ borderColor: error ? "red" : "", color: error ? "red" : "" }}
        />
        {error && <div className="error">{error}</div>}
      </div>

      <div className="CardWorkspace__form__btns">
        <button onClick={prevStep}>{t("create_btn_back")}</button>
        <button onClick={saveInstructions} disabled={error}>
        {t("create_btn_forward")}
        </button>
      </div>
    </div>
  );
};

export default SetInstructions;
