import "./SwipeCard.css";
import React, { useState } from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { VscTriangleRight } from "react-icons/vsc";
import { FaLightbulb } from "react-icons/fa6";
import { useSwipeable } from "react-swipeable";

function SwipeCard({ card, onSwipe }) {
  const [swipeClass, setSwipeClass] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const openAnsewr = () => {
    setShowAnswer(!showAnswer);
  };

  const swipeLeft = () => {
    setSwipeClass("fade-left");
    setTimeout(() => onSwipe(card), 500);
  };

  const swipeRight = () => {
    setSwipeClass("fade-right");
    setTimeout(() => onSwipe(card), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="SwipeCardWrapper">
      <button className="SwipeArrowLeft" onClick={swipeLeft}>
        <VscTriangleLeft size={30} color="rgb(63, 167, 63)" />
      </button>

      <div {...handlers} className={`SwipeCard ${swipeClass}`}>
        <button className="SwipeCard__content-btn" onClick={openAnsewr}>
          <FaLightbulb size={30} />
        </button>
        <div className="SwipeCard__content-question">{card.question}</div>
        {showAnswer && (
          <div className="SwipeCard__content-answer">{card.answer}</div>
        )}
      </div>

      <button className="SwipeArrowRight" onClick={swipeRight}>
        <VscTriangleRight size={30} color="rgb(192, 97, 97)" />
      </button>
    </div>
  );
}

export default SwipeCard;
