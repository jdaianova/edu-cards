import { useState } from "react";
import "./CardStack.css";
import { useNavigate } from "react-router-dom";
import { mySetsUseCards } from "../../../../db/db";

const CardStack = ({ set, isReadySets, onSetDelete}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleCards = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = (path) => () => {
    navigate(path, { state: { set } });
  };

  const handleDeleteSet = async () => {
    await mySetsUseCards.sets.delete(set.set_id);
    onSetDelete();
  };

  return (
    <div>
      <div
        className={`CardStack ${isExpanded ? "expanded" : ""}`}
        onClick={toggleCards}
      >
        <div
          className="CardStack__card"
          onClick={handleCardClick("/collections/testing")}
        >
          {isExpanded && "test"}
        </div>

        <div
          className="CardStack__card"
          onClick={handleCardClick("/collections/learning")}
        >
          {isExpanded && "learn"}
        </div>
        
        <div className="CardStack__card">
          <div className="CardStack__card-title">{set.set_title}</div>
        </div>
      </div>
      {!isReadySets && (
        <div className={`CardStack__card-btn ${isExpanded ? "expanded" : ""}`}>
          <button>edit</button>
          <button onClick={handleDeleteSet}>delete</button>
        </div>
      )}
    </div>
  );
};

export default CardStack;
