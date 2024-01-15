import "./Timeline.css";
import yearlyEventsRu from "../../../data/yearlyEventsRu";
import EventInfo from "./EventInfo/EventInfo";
import { useTranslation } from "react-i18next";
import yearlyEventsEn from "../../../data/yearlyEventsEn";

const Timeline = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const yearlyEvents = currentLang === "en" ? yearlyEventsEn : yearlyEventsRu;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  return (
    <div className="Timeline">
      <div className="snake-container">
        {yearlyEvents.map((month, index) => (
          <div key={index} className="rectangle">
            <div
              className={`rectangle-month ${
                currentMonth === index ? "rectangle-month-past" : ""
              }`}
            >
              {month.name}
            </div>

            <div className="circles-container">
              {month.events.map((event, i) => (
                <EventInfo key={new Date().toISOString() + i} event={event} />
              ))}
            </div>

            <div className="rectangle-left-wave"></div>
            <div className="rectangle-right-wave"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
