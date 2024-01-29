import "./EditSetElement.css";

import { useState } from "react";

const EditSetElement = ({ nameElement, lableElement }) => {
  const [editedElement, setEditedElement] = useState(
    localStorage.getItem(nameElement) || ""
  );

  const handleChange = (e) => {
    setEditedElement(e.target.value);
    localStorage.setItem(nameElement, e.target.value);
  };

  return (
    <div className="EditSetElement">
      <label htmlFor={nameElement}>{lableElement}</label>
      <textarea type="text" name={nameElement} value={editedElement} onChange={handleChange} />
    </div>
  );
};

export default EditSetElement;
