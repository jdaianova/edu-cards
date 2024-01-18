import { useState } from "react";
import ChoosingCategories from "../ChoosingCategories/ChoosingCategories";
import "./NewSetProperties.css";
//import { mySetsUseCards } from "../../../db/db";

const NewSetProperties = ({ setId }) => {
  const [title, setTitle] = useState("");
  const [lang, setLang] = useState("");
  const [instructions, setInstructions] = useState("");

  const updateTitle = (e) => setTitle(e.target.value);
  const updateInstructions = (e) => setInstructions(e.target.value);
  const updateLang = (newLang) => setLang(newLang);

  // const updateSetInDb = async () => {
  //   await mySetsUseCards.sets.update(setId, {
  //     set_title: title,
  //     lang: lang,
  //     instructions: instructions,
  //   });
  // };

  return (
    <div className="NewSetProperties">
      <div className="NewSetProperties__set-title">
        <label>Title of set</label>
        <input
          value={title}
          onChange={updateTitle}
          placeholder="enter name of set..."
        />
      </div>
      <div className="NewSetProperties__categories">
        <label>choose category {lang}</label>
        <ChoosingCategories />
      </div>
      <div className="NewSetProperties__lang">
        <label>choose language</label>
        <button onClick={() => updateLang("ru")}>ru</button>
        <button onClick={() => updateLang("en")}>en</button>
      </div>
      <div className="NewSetProperties__instructions">
        <label>Instructions</label>
        <textarea
          value={instructions}
          onChange={updateInstructions}
          placeholder="enter your instructions"
        />
      </div>
    </div>
  );
};

export default NewSetProperties;
