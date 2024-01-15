import { useEffect, useState } from "react";
import "./TestingCard.css";

const TestingCard = ({
  currentcCardInfo,
  handleNextCard,
  setCorrectAnswers,
  setInorrectAnswers,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [currentcCardInfo]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentcCardInfo.answer) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setInorrectAnswers((prev) => prev + 1);
    }
    setTimeout(() => {
      handleNextCard();
    }, 1000);
  };

  const getOptionClassName = (option) => {
    if (selectedOption === null) {
      return "TestingCard__option";
    }

    if (option === selectedOption) {
      return `TestingCard__option ${
        option === currentcCardInfo.answer ? "correct" : "incorrect"
      }`;
    }

    if (option === currentcCardInfo.answer) {
      return "TestingCard__option correct";
    }

    return "TestingCard__option";
  };

  return (
    <div className="TestingCard">
      <div className="TestingCard-question">{currentcCardInfo.question}</div>
      <div className="TestingCard__options">
        {currentcCardInfo.options.map((option, i) => (
          <div key={i}>
            <button
              className={getOptionClassName(option)}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingCard;
