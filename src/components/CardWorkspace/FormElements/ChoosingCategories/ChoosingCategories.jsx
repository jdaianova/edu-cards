import "./ChoosingCategories.css";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { mySetsUseCards, readySetsUseCards } from "../../../../db/db";
import Popup from "../../../commonComponents/Popup/Popup";
import CategoryList from "./CategoryList/CategoryList";

const ChoosingCategories = ({ nextStep, prevStep }) => {
  const { t } = useTranslation();

  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(
    localStorage.getItem("currentCategory") || ""
  );

  useEffect(() => {
    async function getAllCategories() {
      try {
        const [fetchReadySets, fetchMySets] = await Promise.all([
          readySetsUseCards.sets.toArray(),
          mySetsUseCards.sets.toArray(),
        ]);

        const allSets = [...fetchReadySets, ...(fetchMySets || [])];

        const tempAllCategories = Array.from(
          new Set(allSets.map((set) => set.category))
        ).filter((elem) => elem !== "");
        setAllCategories(tempAllCategories);
      } catch (error) {
        return <Popup text={error.message} />;
      }
    }

    getAllCategories();
  }, []);

  useEffect(() => {
    localStorage.setItem("currentCategory", currentCategory);
  }, [currentCategory]);

  return (
    <div className="ChoosingCategories form-element-wrapper">
      <div className="ChoosingCategories__section form-element-section">
        <h5>{t("choose_category_head_text")}</h5>
        <span>{t("create_duty")}</span>
        <p>{t("choose_category_text")}</p>
        <CategoryList
          categories={allCategories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          error={error}
          setError={setError}
        />
      </div>

      <div className="CardWorkspace__form__btns">
        <button onClick={() => prevStep()}>{t("create_btn_back")}</button>
        <button onClick={() => nextStep()} disabled={error}>{t("create_btn_forward")}</button>
      </div>
    </div>
  );
};

export default ChoosingCategories;
