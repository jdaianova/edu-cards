import "./LearningInstractions.css";

import { FaLightbulb } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const LearningInstractions = () => {
  const { t } = useTranslation();

  return (
    <div className="LearningInstractions">
      <p>{t("learning_use_swipe")}</p>
      <div className="LearningInstractions__swipe">
        <div className="LearningInstractions__swipe-left">
          <TiArrowBack size={30} color=" rgb(63, 167, 63)" />
          <p>{t("learning_already_know")}</p>
        </div>
        <div className="LearningInstractions__swipe-bulb">
        <FaLightbulb size={13}/>
          <p>{t("learning_show_answer")}</p>
        </div>
        <div className="LearningInstractions__swipe-right">
          <p>{t("learning_repeat")}</p>
          <TiArrowForward size={30} color="rgb(192, 97, 97)" />
        </div>
      </div>
    </div>
  );
};

export default LearningInstractions;
