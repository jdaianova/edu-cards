import { useEffect, useState } from "react";
import CreateCard from "./CreateCard/CreateCard";
import "./CreateCards.css";
import { nanoid } from "nanoid";
import { mySetsUseCards } from "../../../../db/db";
import { useNavigate } from "react-router-dom";
import { clearAfterCreateNewSet } from "../../../../localStorage/helpers";
import { useTranslation } from "react-i18next";

const CreateCards = ({ prevStep }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const initialCard = { question: "", answer: "", options: ["", "", "", ""] };

  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [initialCard];
  });
  const [currentCardIndex, setCurrentCardIndex] = useState(
    parseInt(localStorage.getItem("currentCardIndex")) || 0
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("currentCardIndex", currentCardIndex.toString());
  }, [cards, currentCardIndex]);

  const handleStepBackBtn = () => prevStep();

  const handleCreateNewSet = async () => {
    const newSet = {
      set_id: nanoid(),
      set_title: localStorage.getItem("currentTitle" || ""),
      date_of_create: new Date(),
      lang: localStorage.getItem("set_lang" || ""),
      category: localStorage.getItem("currentCategory" || ""),
      instructions: localStorage.getItem("instructions" || ""),
      set_cards: cards,
    };

    try {
      await mySetsUseCards.sets.bulkPut([newSet]);
      clearAfterCreateNewSet();
    } catch (error) {}

    navigate("/collections/my-collections");
  };

  const goToNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCards([...cards, initialCard]);
      setCurrentCardIndex(cards.length);
    }
  };

  const goToPrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const updateCurrentCard = (updatedCard) => {
    const newCards = cards.map((card, index) =>
      index === currentCardIndex ? updatedCard : card
    );
    setCards(newCards);
  };

  const allFiedsFilled = () => {
    const allOptionsFilled = cards[currentCardIndex].options.every(
      (option) => option !== ""
    );
    const answerFilled = cards[currentCardIndex].answer !== "";
    const qustionFilled = cards[currentCardIndex].qustion !== "";
    return allOptionsFilled && answerFilled && qustionFilled;
  };

  return (
    <div className="CreateCards form-element-wrapper">
      <p>{t("create_cards_text")}</p>
      <div>
        <CreateCard
          currentCard={cards[currentCardIndex]}
          updateCurrentCard={updateCurrentCard}
        />
        <div className="CreateCards__cards-btns">
          <button onClick={goToPrevCard} disabled={currentCardIndex === 0}>
            {t("create_cards_prev_card")}
          </button>
          <button onClick={goToNextCard} disabled={!allFiedsFilled()}>
            {currentCardIndex < cards.length - 1
              ? t("create_cards_next_card")
              : t("create_cards_new_card")}
          </button>
        </div>
      </div>

      <div className="CardWorkspace__form__btns CardWorkspace__create_new_set-btns">
        <button
          disabled={!allFiedsFilled()}
          className="btn-create-new-set"
          onClick={handleCreateNewSet}
        >
          {t("create_btn_new_set")}
        </button>
        <button onClick={handleStepBackBtn}>{t("create_btn_back")}</button>
      </div>
    </div>
  );
};

export default CreateCards;
