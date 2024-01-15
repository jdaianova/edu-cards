import CardStack from "./CardStack/CardStack";
import "./ShowSets.css";

const ShowSets = ({ sets, isReadySets, onSetDelete }) => {

  return (
    <div className="ShowSets-container">
      <div className="ShowSets__filters">filters</div>
      <div className="ShowSets">
        {sets.map((set, i) => (
          <CardStack
            key={i}
            set={set}
            isReadySets={isReadySets}
            onSetDelete={onSetDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowSets;
