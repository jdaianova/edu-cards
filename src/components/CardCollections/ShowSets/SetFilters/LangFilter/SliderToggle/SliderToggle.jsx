import { useState } from "react";
import "./SliderToggle.css";

const SliderToggle = ({ labelText, onToggle }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e) => {
    if (onToggle) {
      setIsChecked(!isChecked);
      onToggle(!isChecked);
    }
  };

  return (
    <label className="SliderToggle">
      <input
        name={labelText}
        type="checkbox"
        className="SliderToggle-checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <span className="SliderToggle-text">{labelText}</span>
    </label>
  );
};

export default SliderToggle;
