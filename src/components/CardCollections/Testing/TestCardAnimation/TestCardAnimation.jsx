import { useState } from "react";
import "./TestCardAnimation.css";

const TestCardAnimation = ({ question, onAnswerSubmit }) => {
  const [changeCards, setChangeCards] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    onAnswerSubmit(answer);
    setAnswer("");
    setChangeCards(true);
    setTimeout(() => {
      setChangeCards(false);
    }, 1000);
  };

  return (
    <div className="TestCardAnimation">
      <div className="TestCardAnimation__card-container">
        <div className="cards-deck"></div>
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
          <div
            className="TestCardAnimation__card-content"
            style={changeCards ? { display: "none" } : {}}
          >
            <p>{question}</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Введите ваш ответ"
            />
            <button onClick={handleSubmit}>"ok"</button>
          </div>
        </div>
      </div>
      <div className="TestCardAnimation__card-container">
        <div className="TestCardAnimation__card card-tree"></div>
      </div>
    </div>
  );
};

export default TestCardAnimation;
