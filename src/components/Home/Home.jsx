import "./Home.css";
import HomeCard from "../HomeCard/HomeCard";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import cardsHomePic from "../../data/img/cards-home-pic2.png";
import DotsArrow from "../../svgComponents/DotsArrow";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <div className={`Home Home-${theme}`}>
      <div className="rhombus-container">
        <div className="moving-dot dot-one"></div>
        <div className="moving-dot dot-two"></div>
        <div className="moving-dot dot-three"></div>
        <div className="moving-dot dot-four"></div>
        <div className="moving-dot dot-five"></div>
        <div className="Home__cards-pic">
          <img src={cardsHomePic} alt="cards"></img>
        </div>
      </div>

      <div className="Home__cards">
        {[...Array(4)].map((card, index) => (
          <HomeCard key={index} delay={0.5 * (index + 1)}>
            <h4 className={`HomeCard__title ${index !== 0 ? "not-first" : ""}`}>
              {t(`home_card_${index+1}_title`)}
            </h4>
            <div className={`HomeCard__info ${index !== 0 ? "not-first" : ""}`}>
              <p className="HomeCard__text">{t(`home_card_${index+1}_text`)}</p>
              <div className="HomeCard__btn-container">
                <button className="HomeCard__btn"><DotsArrow width={20} color={"rgb(255, 255, 255)"} /></button>
                <p className="HomeCard__btn-title">{t(`home_card_${index+1}_button_title`)}</p>
              </div>
            </div>
          </HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
