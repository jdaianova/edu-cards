import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import menuElements from "../../data/menuElements";

const NavBar = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`NavBar NavBar-theme-${theme}`}>
      <nav>
        {menuElements.map((elem, i) => (
          <NavLink
            key={i}
            to={elem.path}
            className={({ isActive }) =>
              isActive
                ? "NavBar-element NavBar-element_active"
                : "NavBar-element"
            }
          >
            {t(elem.name)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
