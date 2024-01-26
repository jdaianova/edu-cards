import { useEffect, useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ setFilterCategory, filteredSets }) => {
  const [isDropList, setIsDropList] = useState(false);
  const [findedCategory, setFindedCategory] = useState("");

  useEffect(() => {
    setFilterCategory(findedCategory);
  }, [findedCategory,setFilterCategory]);

  const currentCategories = [
    "all",
    ...Array.from(
      new Set(
        filteredSets
          .map((set) => set.category)
          .filter((category) => category && category.trim() !== "")
      )
    ),
  ];

  const filteredCategories = currentCategories.filter((category) =>
    category.toLowerCase().startsWith(findedCategory.toLowerCase())
  );

  const handleChange = (e) => {
    setFindedCategory(e.target.value);
  };

  const handleFocus = () => {
    setIsDropList(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropList(false);
    }, 100);
  };

  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter_title">show sets with category</div>

      <input
        placeholder="all"
        className="CategoryFilter_finder"
        value={findedCategory}
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isDropList && (
        <div className="CategoryFilter_list">
          {filteredCategories.map((category, i) => (
            <div
              key={i}
              className="CategoryFilter_list-element"
              onClick={() => setFindedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
