import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xoqgqgob");

  if (state.succeeded) {
    return (
      <div className="ContactForm">
        <div className="confirmation">
          <p>{t("thanks_for_mail_1")}</p>
          <span>{t("thanks_for_mail_2")}</span>
        </div>
      </div>
    );
  }

  return (
    <form className={`ContactForm ContactForm-${theme}`} onSubmit={handleSubmit}>
      <label htmlFor="email">{t("contact_your_email")}</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">{t("contact_your_message")}</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {t("submit_btn")}
      </button>
    </form>
  );
}

export default ContactForm;
