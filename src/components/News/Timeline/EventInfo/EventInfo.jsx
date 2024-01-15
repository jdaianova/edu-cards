import React, { useState } from "react";
import "./EventInfo.css";
import TooltipEvent from "../TooltipEvent/TooltipEvent";

const EventInfo = ({ event }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isTooltipMaximize, setIsTooltipMaximize] = useState(false);
  const day = parseInt(event.date.slice(-2));
  const positionPercent = (day / 31) * 100;

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isTooltipMaximize) setIsTooltipVisible(false);
  };

  const handleClick = () => {
    setIsTooltipMaximize(!isTooltipMaximize);
  };

  return (
    <div
      className={`circle ${event.deploy ? "" : "circle-not-deploy"}`}
      style={{ left: `${positionPercent}%` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {day}
      {isTooltipVisible && (
        <TooltipEvent
          event={event}
          isTooltipMaximize={isTooltipMaximize}
          onClose={() => setIsTooltipMaximize(false)}
        />
      )}
    </div>
  );
};

export default EventInfo;
