import "./TestingCard.css";

import { useEffect, useState } from "react";
import insertSoftHyphens from "../../../../utils/insertHyphens";

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
      <div className="TestingCard-question">
        <p>{insertSoftHyphens(currentcCardInfo.question, 25)}</p>
      </div>
      <div className="TestingCard__options">
        {currentcCardInfo.options.map((option, i) => (
          <div key={i}>
            <button
              className={getOptionClassName(option)}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              {insertSoftHyphens(option, 25)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingCard;
