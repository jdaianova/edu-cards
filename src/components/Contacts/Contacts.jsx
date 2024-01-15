import "./Contacts.css";

import ContactForm from "./ContactForm/ContactForm";
import RatingForm from "./RatingForm/RatingForm";

import { useTranslation } from "react-i18next";
 

const Contacts = () => {
  const {t} =useTranslation();
  return (
    <div className="Contacts">
      <h2>{t("contact_us")}</h2>
      <ContactForm />
      <RatingForm />
    </div>
  );
};

export default Contacts;
