import "./EditSet.css";

import { useEffect, useState } from "react";
import { getSetById, updateSet } from "../../../../db/db";
import { useNavigate } from "react-router";
import EditSetElement from "./EditSetElement/EditSetElement";

const EditSet = () => {
  const navigate = useNavigate();
  const editedSetID = localStorage.getItem("editedSetID" || "");
  const [isLoadingEditedSet, setIsLoadingEditedSet] = useState(false);

  useEffect(() => {
    getSetById(editedSetID).then((set) => {
      if (set) {
        localStorage.setItem("editedSetCards", JSON.stringify(set.set_cards));
        localStorage.setItem("editedSetTitle", set.set_title);
        localStorage.setItem("editedSetLang", set.lang);
        localStorage.setItem("editedSetCategory", set.category);
        localStorage.setItem(
          "editedSetInstructions",
          JSON.stringify(set.instructions)
        );
        setIsLoadingEditedSet(true);
      }
    });
  }, [editedSetID]);

  const handleSaveEdit = () => {
    const currentEditedSetString = localStorage.getItem("currentEditedSet");
    if (currentEditedSetString) {
      const currentEditedSet = JSON.parse(currentEditedSetString);
      if (currentEditedSet && currentEditedSet.set_id) {
        updateSet(currentEditedSet)
          .then(() => {
            navigate("/collections/my-collections");
          })
          .catch((error) => {
            console.error("Error updating set:", error);
          });
      }
    }
  };

  if (isLoadingEditedSet)
    return (
      <div className="EditSet">
        <h5>edit set</h5>
        <div className="EditSet__info">
          <div className="EditSet__info__section">
            <EditSetElement
              nameElement={"editedSetTitle"}
              lableElement={"edit_title"}
            />
          </div>
          <div className="EditSet__info__section">
            <EditSetElement
              nameElement={"editedSetCategory"}
              lableElement={"edit_category"}
            />
          </div>
          <div className="EditSet__info__section">
            <EditSetElement
              nameElement={"editedSetInstructions"}
              lableElement={"edit_instructions"}
            />
          </div>
          <div className="EditSet__info__section">
            <button>en</button>
            <button>ru</button>
          </div>
        </div>

        <div className="EditSet__cards"></div>

        <div className="EditSet__save">
          <button onClick={handleSaveEdit}>save</button>
        </div>
      </div>
    );
};

export default EditSet;
