import "./SwipeCardAnswer.css";

import { useState } from "react";
import { FaLightbulb } from "react-icons/fa6";

function SwipeCardAnswer({ answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="SwipeCardAnswer">
      <div
        className={`SwipeCardAnswer__inner ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="SwipeCardAnswer__front">
          <FaLightbulb size={25} />
        </div>
        <div className="SwipeCardAnswer__back">{answer}</div>
      </div>
    </div>
  );
}

export default SwipeCardAnswer;
