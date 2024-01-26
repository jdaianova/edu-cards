import "./CreateCard.css";
import { useTranslation } from "react-i18next";

const CreateCard = ({ currentCard, updateCurrentCard }) => {
  const { t } = useTranslation();

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
        <label htmlFor="question">{t("create_cards_question")}</label>
        <input
          placeholder={`${t("create_cards_question_placeholder")}...`}
          name="question"
          value={currentCard?.question}
          onChange={handleChange}
        />
      </div>

      <div className="CreateCard__section">
        <label htmlFor="answer">{t("create_cards_answer")}</label>
        <input
          placeholder={`${t("create_cards_answer_placholder")}...`}
          name="answer"
          value={currentCard?.answer}
          onChange={handleChange}
        />
      </div>

      <p>{t("create_cards_answer_choices")}</p>
      <div className="CreateCard__section-options">
        {currentCard?.options.map((option, index) => (
          <div className="CreateCard__section-option" key={index}>
            <input
              disabled={index === 3}
              placeholder={`${t("create_cards_answer_choices_placholder")}...`}
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
