import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TestCardAnimation from './TestCardAnimation/TestCardAnimation';


const Testing = () => {
  const location = useLocation();
  const { set } = location.state || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTesting, setStartTesting] = useState(true);

  const handleAnswerSubmit = (userAnswer) => {
    if (userAnswer === set.set_cards[currentQuestionIndex].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < set.set_cards.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log(`Тест завершен. Правильных ответов: ${correctAnswers}`);
    }
  };

  return (
    <div className="Testing-container">
      {!startTesting && (
        <div className="Testing-start">
          <div>rules</div>
          <button onClick={() => setStartTesting(true)}>start</button>
        </div>
      )}
      {startTesting && (
        <div className="Testing">
          <h4 className="Testing-title">{set.set_title}</h4>
          {set.instructions && (
            <div className="Testing-instructions">{set.instructions}</div>
          )}
          <div className="Testing-score">
            всего вопросов: {set.set_cards.length}
            верных: {correctAnswers}
          </div>
          <div className="Testing-timer">time:</div>
          <div className="Testing-cards">
            <TestCardAnimation
              question={set.set_cards[currentQuestionIndex].question}
              onAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testing;
