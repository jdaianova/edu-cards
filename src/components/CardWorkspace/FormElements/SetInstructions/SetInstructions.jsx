import "./SetInstructions.css";
import { useEffect, useState } from "react";

const SetInstructions = ({ nextStep, prevStep }) => {
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
        <h5>введите инструкции</h5>
        <span>{`(необязательно заполнять)`}</span>
        <p>Ваши инструкции не должны превышать 200 символов.</p>
        <textarea
          placeholder="введите текст..."
          value={instructions}
          onChange={handleInputChange}
          style={{ borderColor: error ? "red" : "", color: error ? "red" : "" }}
        />
        {error && <div className="error">{error}</div>}
      </div>

      <div className="CardWorkspace__form__btns">
        <button onClick={prevStep}>Назад</button>
        <button onClick={saveInstructions} disabled={error}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default SetInstructions;
