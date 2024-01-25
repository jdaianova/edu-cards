import { useEffect, useState } from "react";
import "./CategoryList.css";
import { RxCross2 } from "react-icons/rx";

const CategoryList = ({ categories, setCurrentCategory, currentCategory }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);

    setSelectedCategory(currentCategory);
  }, [searchTerm, currentCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentCategory(e.target.value);
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
  };

  return (
    <div className="CategoryList">
      <div className="CategoryList__search">
        <input
          type="text"
          placeholder="Введите или выберите категорию..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <button onClick={handleClearSearch} className="CategoryList__clear-btn">
        <RxCross2 size={25}/>
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
