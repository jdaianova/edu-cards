import { useEffect, useState } from "react";
import "./CategoryList.css";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const CategoryList = ({
  categories,
  setCurrentCategory,
  currentCategory,
  error,
  setError,
}) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);

    setSelectedCategory(currentCategory);
  }, [searchTerm, currentCategory]);

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 30) {
      setError(true);
    } else {
      setError(false);
    }
    setSearchTerm(newValue);
    setCurrentCategory(newValue);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    setCurrentCategory(category);
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentCategory("");
    setError(false);
  };

  return (
    <div className="CategoryList">
      <div className="CategoryList__search">
        <input
          type="text"
          placeholder={`${t("choose_category_placeholder")}...`}
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ borderColor: error ? "red" : "", color: error ? "red" : "" }}
        />

        <button onClick={handleClearSearch} className="CategoryList__clear-btn">
          <RxCross2 size={25} />
        </button>
      </div>

      <div className="CategoryList__items">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className={`CategoryList__item ${
              category === selectedCategory ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
