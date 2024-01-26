import "./ShowSets.css";
import CardStack from "./CardStack/CardStack";
import SetFilters from "./SetFilters/SetFilters";
import { useState } from "react";

const ShowSets = ({ sets, isReadySets, onSetDelete }) => {
  const [filterLang, setFilterLang] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filteredSets = sets;

  // Фильтрация по языку
  if (filterLang !== "all" && filterLang !== "none") {
    filteredSets = filteredSets.filter((set) => set.lang === filterLang);
  }

  if (filterLang === "none") filteredSets = [];

  // Фильтрация по категории
  if (filterCategory !== "all" && filterCategory !== "") {
    filteredSets = filteredSets.filter(
      (set) => set.category === filterCategory
    );
  }

  return (
    <div className="ShowSets-container">
      <div className="ShowSets__filters">
        <SetFilters
          setFilterLang={setFilterLang}
          setFilterCategory={setFilterCategory}
          filteredSets={filteredSets}
        />
      </div>
      <div className="ShowSets">
        {filteredSets.map((set) => (
          <CardStack
            key={set.set_id}
            set={set}
            isReadySets={isReadySets}
            onSetDelete={onSetDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowSets;
