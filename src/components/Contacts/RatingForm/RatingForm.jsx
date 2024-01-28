import { useContext, useState } from "react";
import { useForm } from "@formspree/react";
import "./RatingForm.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ThemeContext";

const RatingForm = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xzbnbnnj");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="RatingForm">
        <div className="confirmation">
          <p>{t("thanks_for_rating")}</p>
        </div>
      </div>
    );
  }

  return (
    <form className={`RatingForm RatingForm-${theme}`} onSubmit={onSubmit}>
      <div className="RatingForm-stars">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : ""}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <input type="hidden" name="rating" value={rating} />
      <label htmlFor="name">{t("rating_your_name")}</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="comment">{t("rating_your_comment")}</label>
      <textarea id="comment" name="comment" />
      <button className="submit-btn" type="submit" disabled={rating === 0}>
        {t("submit_btn")}
      </button>
    </form>
  );
};

export default RatingForm;
