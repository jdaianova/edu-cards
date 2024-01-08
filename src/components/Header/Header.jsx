import React, { useState } from "react";
import "./Header.css";

import { useTranslation } from "react-i18next";

import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <div className="Header">
      <div className="Header__logo">
        <Logo />
      </div>
      <div className="Header__menu">
        <NavBar />
      </div>

      <div className="Header__choosing">
        <div className="Header__lang">
          <button
            onClick={() => changeLanguage(language === "en" ? "ru" : "en")}
          >
            {language === "en" ? "ru" : "en"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
