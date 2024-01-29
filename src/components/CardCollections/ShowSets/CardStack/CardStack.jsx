import "./CardStack.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mySetsUseCards } from "../../../../db/db";
import { MdDeleteForever } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import insertSoftHyphens from "../../../../utils/insertHyphens";

const CardStack = ({ set, isReadySets, onSetDelete }) => {
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

  const handleEditSet = async () => {
    localStorage.setItem('editedSetID', set.set_id);
    navigate('/collections/editing');
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
          <div className="CardStack__card-title">
            {insertSoftHyphens(set.set_title, 15)}
          </div>
          {!isReadySets && (
            <div
              className={`CardStack__card-btn ${isExpanded ? "expanded" : ""}`}
            >
              <button
                className="CardStack__card-btn-edit"
                onClick={handleEditSet}
              >
                <RiFileEditFill size={18} color={"rgba(152, 220, 152)"} />
              </button>
              <button
                className="CardStack__card-btn-delete"
                onClick={handleDeleteSet}
              >
                <MdDeleteForever size={20} color={"rgba(255, 180, 180)"} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardStack;
