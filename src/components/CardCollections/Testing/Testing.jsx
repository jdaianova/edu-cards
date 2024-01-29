import "./Testing.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TestCardAnimation from "./TestCardAnimation/TestCardAnimation";

import getQuestionWord from "../../../utils/getQuestionWord";
import insertSoftHyphens from "../../../utils/insertHyphens";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Testing = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { set } = location.state || {};
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setInorrectAnswers] = useState(0);
  const [startTesting, setStartTesting] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div className="Testing-container">
      <div className="Testing__title">
        <div className="Testing__title__number-of-questions">
          <div className="Testing__title__number-of-questions-num">
            {set.set_cards.length || 0}
          </div>
          <div className="Testing__title__number-of-questions-word">
            {currentLanguage === "ru" && (
              <span>{getQuestionWord(set.set_cards.length || 0)}</span>
            )}

            {currentLanguage === "en" && (
              <span>
                {set.set_cards.length === 1 ? " question" : " questions"}
              </span>
            )}
          </div>
        </div>

        <h4>{insertSoftHyphens(set.set_title, 15)}</h4>

        <div className="Testing__title__score">
          <div className="Testing__title__score-correct">{correctAnswers}</div>
          <div className="Testing__title__score-incorrect">
            {incorrectAnswers}
          </div>
        </div>
      </div>

      {!startTesting && (
        <div className="Testing-start">
          {set.instructions && (
            <div className="Testing-instructions">
              {insertSoftHyphens(set.instructions, 50)}
            </div>
          )}
          <button onClick={() => setStartTesting(true)}>{t("start")}</button>
        </div>
      )}

      {startTesting && currentQuestionIndex < set.set_cards.length && (
        <div className="Testing">
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
