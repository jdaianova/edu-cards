import { useState } from "react";
import "./CardWorkspace.css";
import { mySetsUseCards } from "../../db/db";
import { nanoid } from "nanoid";
import NewSetProperties from "./NewSetProperties/NewSetProperties";
import CreateCards from "./CreateCards/CreateCards";

const CardWorkspace = ({ isEditing = false, editingSetId }) => {
  const [creating, setCreating] = useState(false);
  const [currentSetId, setCurrentSetId] = useState(null);

  const startCreating = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const newSetId = nanoid();
      setCurrentSetId(newSetId);
      const newSet = {
        set_id: newSetId,
        set_title: "",
        date_of_create: currentDate,
        lang: "",
        category: "",
        instructions: "",
        set_cards: [],
      };
      await mySetsUseCards.sets.add(newSet);
      setCreating(true);
    } catch (error) {}
  };

  return (
    <div className="CardWorkspace">
      <div className="CardWorkspace__title">
        <h3>{!isEditing ? "create new set" : "edit set"}</h3>
        {!creating && !isEditing && (
          <button onClick={startCreating}>start</button>
        )}
      </div>
      {(creating || isEditing) && (
        <div className="CardWorkspace__creating">
          <div className="CardWorkspace__properties">
            <NewSetProperties setId={currentSetId} />
          </div>
          <div className="CardWorkspace__cards">
            <CreateCards setId={currentSetId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardWorkspace;
