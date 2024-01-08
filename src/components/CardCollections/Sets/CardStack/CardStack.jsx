import { useState } from "react";
import "./CardStack.css";
import { useNavigate } from "react-router-dom";

const CardStack = ({ set }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleCards = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = (path) => () => {
    navigate(path, { state: { set } });
  };

  return (
    <div
      className={`CardStack ${isExpanded ? "expanded" : ""}`}
      onClick={toggleCards}
    >
      <div
        className="CardStack-card"
        onClick={handleCardClick("/collections/testing")}
      >
        {isExpanded && "test"}
      </div>
      <div
        className="CardStack-card"
        onClick={handleCardClick("/collections/learning")}
      >
        {isExpanded && "learn"}
      </div>
      <div className="CardStack-card">{set.set_title}</div>
    </div>
  );
};

export default CardStack;
