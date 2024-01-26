import React, { useEffect, useState } from "react";
import "./Header.css";

import { useTranslation } from "react-i18next";

import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("languageUseCards") || "en"
  );

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("languageUseCards", language);
    setLanguage(language);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Header">
      <div className="Header__logo">
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        {isMobile && (
          <div className="Header__lang">
            <button
              onClick={() => changeLanguage(language === "en" ? "ru" : "en")}
            >
              {language === "en" ? "ru" : "en"}
            </button>
          </div>
        )}
      </div>
      <div className="Header__menu">
        <NavBar />
      </div>

      {!isMobile && (
        <div className="Header__choosing">
          <div className="Header__lang">
            <button
              onClick={() => changeLanguage(language === "en" ? "ru" : "en")}
            >
              {language === "en" ? "ru" : "en"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
