import "./SetFilters.css";

import CategoryFilter from "./CategoryFilter/CategoryFilter";
import LangFilter from "./LangFilter/LangFilter";

const SetFilters = ({ setFilterLang, setFilterCategory, filteredSets }) => {
  return (
    <div className="SetFilters">
      <div className="SetFilters__open">

        <div className="SetFilters__section">
          <LangFilter setFilterLang={setFilterLang} />
        </div>

        <div className="SetFilters__section">
          <CategoryFilter
            setFilterCategory={setFilterCategory}
            filteredSets={filteredSets}
          />
        </div>
      </div>
    </div>
  );
};

export default SetFilters;
