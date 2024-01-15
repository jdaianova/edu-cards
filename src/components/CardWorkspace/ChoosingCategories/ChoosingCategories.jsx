import React, { useEffect, useState } from "react";
import "./ChoosingCategories.css";
import { mySetsUseCards, readySetsUseCards } from "../../../db/db";

const ChoosingCategories = () => {
  const [allSets, setAllSets] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    async function getAllSets() {
      const fetchReadySets = await readySetsUseCards.sets.toArray();
      const fetchMySets = await mySetsUseCards.sets.toArray();
      setAllSets([...fetchReadySets, ...fetchMySets]);
    }

    getAllSets();
  }, []);

  const handleAddNewClick = () => {
    setIsAddingNew(true);
  };

  const handleConfirmClick = () => {
    if (isAddingNew) {
      console.log("Добавлена новая категория:", newCategory);
      // Добавление новой категории в базу данных
    } else {
      // Обработка выбранной категории
      console.log("Выбрана категория:", newCategory);
    }
    setIsAddingNew(false);
    setNewCategory("");
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleBackToSelect = () => {
    setIsAddingNew(false);
  };

  return (
    <div className="ChoosingCategories">
      <select
        className="ChoosingCategories__select"
        onChange={handleCategoryChange}
        disabled={isAddingNew}
        value={newCategory}
      >
        {allSets.map((set, i) => (
          <option key={i} value={set.category}>
            {set.category}
          </option>
        ))}
      </select>

      {isAddingNew ? (
        <>
          <button
            className="ChoosingCategories__add-new-category"
            onClick={handleBackToSelect}
          >
            back
          </button>
          <input
            className="ChoosingCategories__add-category"
            value={newCategory}
            onChange={handleCategoryChange}
            placeholder="enter new category"
          />
        </>
      ) : (
        <button
          className="ChoosingCategories__add-new-category"
          onClick={handleAddNewClick}
        >
          add new category
        </button>
      )}
    </div>
  );
};

export default ChoosingCategories;
