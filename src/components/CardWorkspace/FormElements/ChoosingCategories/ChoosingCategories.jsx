import "./ChoosingCategories.css";

import { useEffect, useState } from "react";
import { mySetsUseCards, readySetsUseCards } from "../../../../db/db";
import Popup from "../../../commonComponents/Popup/Popup";
import CategoryList from "./CategoryList/CategoryList";

const ChoosingCategories = ({ nextStep, prevStep }) => {
  const [allCategories, setAllCategories] = useState([]);
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
        <h5>выберите категорию</h5>
        <span>{`(необязательно заполнять)`}</span>
        <p>Чтобы воспользоваться поиском, введите первые сиимволы или напишите новую категорию:</p>
        <CategoryList
          categories={allCategories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </div>

      <div className="CardWorkspace__form__btns">
        <button onClick={() => prevStep()}>Назад</button>
        <button onClick={() => nextStep()}>Далее</button>
      </div>
    </div>
  );
};

export default ChoosingCategories;
