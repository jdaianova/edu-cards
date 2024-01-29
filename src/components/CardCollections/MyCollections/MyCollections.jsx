import { useEffect, useState } from "react";
import "./MyCollections.css";
import { mySetsUseCards } from "../../../db/db";
import ShowSets from "../ShowSets/ShowSets";

const MyCollections = () => {
  const [mySets, setMySets] = useState([]);

  useEffect(() => {
    loadMySets();
  }, []);

  const loadMySets = async () => {
    const fetchSets = await mySetsUseCards.sets.toArray();
    setMySets(fetchSets);
  };

  const handleLoadSets = () => {
    loadMySets();
  };

  return (
    <div className="Sets-container">
      <ShowSets sets={mySets} isReadySets={false} handleLoadSets={handleLoadSets} />
    </div>
  );
};

export default MyCollections;
