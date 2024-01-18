import "./Learning.css";
import { useLocation } from "react-router-dom";
import SwipeCard from "./SwipeCard/SwipeCard";
import { useState } from "react";
import LearningInstractions from "./LearningInstractions/LearningInstractions";

const Learning = () => {
  const location = useLocation();
  const { set } = location.state || {};
  console.log(set.set_cards);

  const [cards, setCards] = useState(set.set_cards);

  const handleSwipe = (swipedCard) => {
    setCards((cards) =>
      cards.filter((card) => card.question !== swipedCard.question)
    );
  };

  return (
    <div className="Learning-container">
      <div className="Learning">
        <LearningInstractions />
        <div className="Learning__cards">
          {cards.length > 0 ? (
            <SwipeCard
              key={cards[0].question}
              card={cards[0]}
              onSwipe={handleSwipe}
            />
          ) : (
            <p>Карточки закончились!</p>
          )}
        </div>
        <div className="Learning__"></div>
      </div>
    </div>
  );
};

export default Learning;
