import "./Learning.css";

import { useLocation, useNavigate } from "react-router-dom";
import SwipeCard from "./SwipeCard/SwipeCard";
import { useState } from "react";
import LearningInstractions from "./LearningInstractions/LearningInstractions";
import insertSoftHyphens from '../../../utils/insertHyphens';

const Learning = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { set } = location.state || {};

  const [cards, setCards] = useState(set.set_cards);
  const [learnedCards, setLearnedCards] = useState(0);
  const [unlearnedCards, setUnlearnedCards] = useState(0);

  const handleSwipe = (swipedCard) => {
    setCards((cards) =>
      cards.filter((card) => card.question !== swipedCard.question)
    );
  };

  const handleOnceMore = () => {
    setCards(set.set_cards);
    setLearnedCards(0);
    setUnlearnedCards(0);
  };

  return (
    <div className="Learning-container">
      <div className="Learning">
        <div className="Learning__cards">
          {cards.length > 0 ? (
            <SwipeCard
              key={cards[0].question}
              card={cards[0]}
              onSwipe={handleSwipe}
              setLearnedCards={setLearnedCards}
              setUnlearnedCards={setUnlearnedCards}
            />
          ) : (
            <div className="Learning__score">
              <div className="Learning__score-title">{insertSoftHyphens(set.set_title, 20)}</div>
              <div className="Learning__score-learned">
                <p>выучено:</p>
                <p>{learnedCards}</p>
              </div>
              <div className="Learning__score-learned">
                <p>повторить:</p>
                <p>{unlearnedCards}</p>
              </div>
              <button onClick={handleOnceMore}>еще раз</button>
              <button onClick={() => navigate("/collections/my-collections")}>
                выбрать другой сет
              </button>
            </div>
          )}
        </div>
        {cards.length > 0 && <LearningInstractions />}
      </div>
    </div>
  );
};

export default Learning;
