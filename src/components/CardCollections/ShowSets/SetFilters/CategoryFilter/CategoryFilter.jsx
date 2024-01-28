import "./CategoryFilter.css";

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ setFilterCategory, filteredSets }) => {
  const { t } = useTranslation();
  const [isDropList, setIsDropList] = useState(false);
  const [findedCategory, setFindedCategory] = useState("");

  useEffect(() => {
    setFilterCategory(findedCategory);
  }, [findedCategory, setFilterCategory]);

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

  const handleClearSearch = () => {
    setFindedCategory("");
  };

  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter_title">{t("show_sets_with_category")}</div>
      <div className="CategoryFilter_finder-container">
        <input
          placeholder={`${t("filter_placeholder_all")}...`}
          className="CategoryFilter_finder"
          value={findedCategory}
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button onClick={handleClearSearch} className="CategoryList__clear-btn">
          <RxCross2 size={25} />
        </button>
      </div>
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
