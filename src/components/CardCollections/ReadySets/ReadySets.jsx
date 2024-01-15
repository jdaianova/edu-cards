import "./ReadySets.css";

import { readySetsUseCards } from "../../../db/db";
import { useEffect, useState } from "react";
import ShowSets from "../ShowSets/ShowSets";

const ReadySets = () => {
  const [readySets, setReadySets] = useState([]);

  useEffect(() => {
    async function getReadySets() {
      const fetchSets = await readySetsUseCards.sets.toArray();
      setReadySets(fetchSets);
    }

    getReadySets();
  }, []);

  return (
    <div className="Sets-container">
      <ShowSets sets={readySets} isReadySets = {true}/>
    </div>
  );
};

export default ReadySets;
