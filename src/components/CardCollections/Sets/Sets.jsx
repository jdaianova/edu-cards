import CardStack from "./CardStack/CardStack";
import "./Sets.css";
import readySets from "../../../data/cardSets/readySets";

const Sets = () => {
  return (
    <div className="Sets-container">
      <div className="Sets__filters">filters</div>
      <div className="Sets">
        {readySets.map((set, i) => (
          <CardStack set={set} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Sets;
