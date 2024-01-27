import { useState } from "react";
import "./TestCardAnimation.css";
import TestingCard from "../TestingCard/TestingCard";
import { useNavigate } from "react-router";

const TestCardAnimation = ({
  currentcCardInfo,
  numberOfCards,
  setCurrentQuestionIndex,
  setCorrectAnswers,
  setInorrectAnswers,
}) => {
  const navigate = useNavigate();
  const [changeCards, setChangeCards] = useState(false);
  const [leftDeck, setLeftDeck] = useState(numberOfCards);
  const [rightDeck, setrightDeck] = useState(0);
  const [endTest, setEndTest] = useState(false);

  const handleNextCard = () => {
    setChangeCards(true);

    if (leftDeck <= 1) {
      setEndTest(true);
    } else {
      setLeftDeck((prev) => prev - 1);
      setTimeout(() => {
        setChangeCards(false);
        setrightDeck((prevRightDeck) => prevRightDeck + 1);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleEndTest = () => {
    navigate("/collections/sets");
  };

  return (
    <div className="TestCardAnimation">
      {endTest ? (
        // часть с сообщением о завершении теста
        <div className="TestCardAnimation__card-test-end">
          <p>тест завершен</p>
          <button onClick={handleEndTest}>пройти другой тест</button>
        </div>
      ) : (
        // часть с карточками
        <>
          <div className="TestCardAnimation__card-container">
            {leftDeck > 0 && <div className="left-cards-deck App-dark"></div>}
            <div
              className={`TestCardAnimation__card card-one ${
                changeCards ? "animateLeftCard" : ""
              }`}
            ></div>
          </div>
          <div className="TestCardAnimation__card-container">
            <div
              className={`TestCardAnimation__card card-two ${
                changeCards ? "animateCard" : ""
              }`}
            >
              {leftDeck > 0 && (
                <div
                  className="TestCardAnimation__card-content"
                  style={changeCards ? { display: "none" } : {}}
                >
                  <TestingCard
                    currentcCardInfo={currentcCardInfo}
                    handleNextCard={handleNextCard}
                    setCorrectAnswers={setCorrectAnswers}
                    setInorrectAnswers={setInorrectAnswers}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="TestCardAnimation__card-container">
            {!(rightDeck === 0) && (
              <div className="right-cards-deck App-dark"></div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TestCardAnimation;
