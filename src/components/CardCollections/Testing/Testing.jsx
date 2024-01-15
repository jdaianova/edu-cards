import "./Testing.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import TestCardAnimation from "./TestCardAnimation/TestCardAnimation";

import  getQuestionWord  from "../../../utils/getQuestionWord";

const Testing = () => {
  const location = useLocation();
  const { set } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setInorrectAnswers] = useState(0);
  const [startTesting, setStartTesting] = useState(false);

  return (
    <div className="Testing-container">
      <div className="Testing__title">
        <h4>{set.set_title}</h4>
        <div className="Testing__title-number-of-questions">
          {set.set_cards.length || 0}
          {getQuestionWord(set.set_cards.length || 0)}
        </div>
        <div className="Testing__title__score">
          <div className="Testing__title__score-correct">{correctAnswers}</div>
          <div className="Testing__title__score-incorrect">
            {incorrectAnswers}
          </div>
        </div>
      </div>
      {!startTesting && (
        <div className="Testing-start">
          <div>rules</div>
          <button onClick={() => setStartTesting(true)}>start</button>
        </div>
      )}
      {startTesting && currentQuestionIndex < set.set_cards.length && (
        <div className="Testing">
          {set.instructions && (
            <div className="Testing-instructions">{set.instructions}</div>
          )}
          <div className="Testing-cards">
            <TestCardAnimation
              currentcCardInfo={set.set_cards[currentQuestionIndex]}
              numberOfCards={set.set_cards.length}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              setCorrectAnswers={setCorrectAnswers}
              setInorrectAnswers={setInorrectAnswers}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testing;
