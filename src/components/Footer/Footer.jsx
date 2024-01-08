import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../ThemeContext";
import SocialIcons from "./SocialIcons/SocialIcon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const themes = ["dark", "light", "sea"];
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <div className="Footer__themes">
        <p>{t("choosing_theme")}</p>
        {themes.map((themeName) => (
          <button
            key={themeName}
            onClick={() => changeTheme(themeName)}
            className={theme === themeName ? "Footer__themes-btn_active" : ""}
          >
            {themeName}
          </button>
        ))}
      </div>

      <SocialIcons />
    </div>
  );
};

export default Footer;
