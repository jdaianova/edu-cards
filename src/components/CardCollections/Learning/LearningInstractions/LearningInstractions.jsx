import { FaLightbulb } from "react-icons/fa6";
import "./LearningInstractions.css";
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";

const LearningInstractions = () => {
  return (
    <div className="LearningInstractions">
      <p>используй свайп или стрелки</p>
      <div className="LearningInstractions__swipe">
        <div className="LearningInstractions__swipe-left">
          <TiArrowBack size={30} color=" rgb(63, 167, 63)" />
          <p>уже знаю</p>
        </div>
        <div className="LearningInstractions__swipe-bulb">
        <FaLightbulb size={13}/>
          <p>ответ</p>
        </div>
        <div className="LearningInstractions__swipe-right">
          <p>повторить</p>
          <TiArrowForward size={30} color="rgb(192, 97, 97)" />
        </div>
      </div>
    </div>
  );
};

export default LearningInstractions;
