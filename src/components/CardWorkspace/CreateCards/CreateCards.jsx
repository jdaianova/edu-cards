import React, { useState } from "react";
import "./CreateCards.css";
import { mySetsUseCards } from "../../../db/db";

const CreateCards = ({ setId }) => {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState(["", "", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = options.map((option, i) =>
      i === index ? value : option
    );
    setOptions(newOptions);
  };

  const addCard = () => {
    const newCard = { question, answer, options };
    setCards([...cards, newCard]);
    setQuestion("");
    setAnswer("");
    setOptions(["", "", ""]);
  };

  const updateCardsInDb = async () => {
    await mySetsUseCards.sets.update(setId, { set_cards: cards });
  };

  return (
    <div className="CreateCards">
      <div className="CreateCards__form">
        <input
        className="CreateCards__form-question"
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
        className="CreateCards__form-answer"
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        {options.map((option, index) => (
          <input
          className="CreateCards__form-option"
            key={index}
            type="text"
            placeholder={`option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
        <button onClick={addCard}>Add Card</button>
      </div>

      <div className="CreateCards__list">
        {cards.map((card, index) => (
          <div key={index}>
            <div>Q: {card.question}</div>
            <div>A: {card.answer}</div>
            <div>Options: {card.options.join(", ")}</div>
          </div>
        ))}
      </div>

      <button className="CreateCards__form-btn" onClick={updateCardsInDb}>
        Update Cards in DB
      </button>
    </div>
  );
};

export default CreateCards;
