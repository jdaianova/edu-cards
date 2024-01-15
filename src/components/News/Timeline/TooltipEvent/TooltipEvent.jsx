import "./TooltipEvent.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TooltipEvent = ({ event, isTooltipMaximize, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="TooltipEvent" onClick={handleClick}>
      <div className={`tooltip ${isTooltipMaximize ? "tooltip-maximize" : ""}`}>
        <h3>{event.title}</h3>
        {isTooltipMaximize && (
          <h6>
            {event.lang === "en" ? t("update_lang_en") : t("update_lang_ru")}
          </h6>
        )}
        {isTooltipMaximize && <span>{t("update date")} {event.date}</span>}
        <p>
          {event.deploy ? t("tooltip_deployed") : t("tooltip_not_deployed")}
        </p>
        {isTooltipMaximize && (
          <button className="submit-btn" onClick={onClose}>
            {t("close")}
          </button>
        )}
        {isTooltipMaximize && (
          <button
            className="submit-btn"
            onClick={() => navigate("/collections/sets")}
            disabled={!event.deploy}
          >
            {t("view_sets")}
          </button>
        )}
      </div>
    </div>
  );
};

export default TooltipEvent;
