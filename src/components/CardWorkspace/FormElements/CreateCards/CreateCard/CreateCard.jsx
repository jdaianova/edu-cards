import "./CreateCard.css";

const CreateCard = ({ currentCard, updateCurrentCard }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "answer") {
      const updatedOptions = [...currentCard.options];
      updatedOptions[3] = value;
      updateCurrentCard({
        ...currentCard,
        answer: value,
        options: updatedOptions,
      });
    } else if (name.startsWith("option")) {
      const optionIndex = parseInt(name.split("-")[1]);
      const newOptions = [...currentCard.options];
      newOptions[optionIndex] = value;
      updateCurrentCard({ ...currentCard, options: newOptions });
    } else {
      updateCurrentCard({ ...currentCard, [name]: value });
    }
  };

  return (
    <div className="CreateCard">
      <div className="CreateCard__section">
        <label htmlFor="question">Question</label>
        <input
          name="question"
          value={currentCard?.question}
          onChange={handleChange}
        />
      </div>

      <div className="CreateCard__section">
        <label htmlFor="answer">Right Answer</label>
        <input
          name="answer"
          value={currentCard?.answer}
          onChange={handleChange}
        />
      </div>

      <p> Answer Choices</p>
      <div className="CreateCard__section-options">
        {currentCard?.options.map((option, index) => (
          <div className="CreateCard__section-option" key={index}>
            {/* <label htmlFor={`option-${index}`}>Option {index + 1}</label> */}
            <input
              name={`option-${index}`}
              value={option}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCard;
