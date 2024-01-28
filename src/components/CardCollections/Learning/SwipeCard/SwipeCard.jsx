import "./SwipeCard.css";
import { useState } from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { VscTriangleRight } from "react-icons/vsc";
import { useSwipeable } from "react-swipeable";
import SwipeCardAnswer from "../SwipeCardAnswer/SwipeCardAnswer";
import insertSoftHyphens from "../../../../utils/insertHyphens";

function SwipeCard({ card, onSwipe, setLearnedCards, setUnlearnedCards }) {
  const [swipeClass, setSwipeClass] = useState("");

  const swipeLeft = () => {
    setSwipeClass("fade-left");
    setUnlearnedCards((prev) => prev + 1);
    setTimeout(() => onSwipe(card), 500);
  };

  const swipeRight = () => {
    setSwipeClass("fade-right");
    setLearnedCards((prev) => prev + 1);
    setTimeout(() => onSwipe(card), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="SwipeCard">
      <div className="SwipeCardWrapper">
        <button className="SwipeArrowLeft" onClick={swipeLeft}>
          <VscTriangleLeft size={30} color="rgb(63, 167, 63)" />
        </button>

        <div {...handlers} className={`SwipeCard ${swipeClass}`}>
          <div className="SwipeCard__content-question">
            {insertSoftHyphens(card.question,25)}
          </div>
          <SwipeCardAnswer answer={insertSoftHyphens(card.answer,25)} />
        </div>

        <button className="SwipeArrowRight" onClick={swipeRight}>
          <VscTriangleRight size={30} color="rgb(192, 97, 97)" />
        </button>
      </div>
    </div>
  );
}

export default SwipeCard;
